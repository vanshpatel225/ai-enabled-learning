import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardShell } from "@/components/layouts/dashboard-shell";

export default function WorkspacePage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">
            AI Workspace
          </h1>

          <p className="text-muted-foreground">
            Welcome to NeuralOS.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              AI Assistant
            </CardTitle>
          </CardHeader>

          <CardContent>
            Chat interface will appear here.
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
