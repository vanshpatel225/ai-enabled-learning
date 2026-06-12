import { AppShell } from "@/components/layouts/app-shell";

export default function Page() {
  return (
    <AppShell>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">
          NeuralOS Dashboard
        </h1>

        <p className="text-muted-foreground">
          Your AI workspace is ready.
        </p>
      </div>
    </AppShell>
  );
}