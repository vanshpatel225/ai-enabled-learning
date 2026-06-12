type Item = {
  id: string;
  title: string;
  description?: string;
  keywords: string[];
  action: () => void;
};

export function semanticMatch(query: string, items: Item[]) {
  const q = query.toLowerCase();

  return items
    .map((item) => {
      let score = 0;

      // title match (highest weight)
      if (item.title.toLowerCase().includes(q)) {
        score += 5;
      }

      // keyword match
      item.keywords.forEach((k) => {
        if (q.includes(k.toLowerCase())) {
          score += 3;
        }
      });

      // fuzzy word match
      const words = q.split(" ");
      words.forEach((w) => {
        if (item.title.toLowerCase().includes(w)) score += 2;
      });

      return { item, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.item);
}