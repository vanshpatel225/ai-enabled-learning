type Action = {
  title: string;
  action: () => void;
};

export function aiCommandRouter(query: string, router: any): Action | null {
  const q = query.toLowerCase();

  // NAVIGATION COMMANDS
  if (q.includes("open dashboard")) {
    return {
      title: "Opening Dashboard",
      action: () => router.push("/"),
    };
  }

  if (q.includes("open chat")) {
    return {
      title: "Opening AI Chat",
      action: () => router.push("/chat"),
    };
  }

  if (q.includes("learning")) {
    return {
      title: "Opening Learning Hub",
      action: () => router.push("/learning"),
    };
  }

  // AI COMMANDS (future hook)
  if (
    q.includes("explain") ||
    q.includes("summarize") ||
    q.includes("make") ||
    q.includes("create") ||
    q.includes("generate")
  ) {
    return {
      title: "AI Processing Request",
      action: () => {
        console.log("AI TASK:", query);
        alert("AI layer will handle this next step 🚀");
      },
    };
  }

  return null;
}