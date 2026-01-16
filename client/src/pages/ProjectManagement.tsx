import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckSquare, BarChart3, ListFilter, Trophy } from "lucide-react";
import RoadmapGantt from "@/components/RoadmapGantt";

export default function ProjectManagement() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b-4 border-foreground">
        <div className="container px-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-foreground mb-4">Prioritization</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            The art of saying "No" to good ideas so you can say "Yes" to great ones.
          </p>
        </div>
      </div>

      <div className="container px-4 py-12 space-y-16">

        {/* Frameworks Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b-2 border-foreground/10 pb-6">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground flex items-center gap-3">
                <BarChart3 className="h-8 w-8" /> Prioritization Frameworks
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Don't rely on "gut feeling". Use structured frameworks to defend your roadmap.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <RoadmapGantt />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* RICE Score */}
            <Card className="rounded-none border-2 border-primary shadow-lg">
              <CardHeader className="bg-primary/10 border-b-2 border-primary">
                <CardTitle className="uppercase font-bold text-primary flex justify-between items-center">
                  R.I.C.E. Score
                  <Trophy className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="text-lg font-bold font-mono text-center border-2 border-dashed border-primary/30 p-4 mb-4 bg-muted/50">
                  (Reach × Impact × Confidence) / Effort
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span className="font-bold w-24">Reach:</span> How many users will this affect? (e.g., 2000/mo)</li>
                  <li className="flex gap-2"><span className="font-bold w-24">Impact:</span> How much will it move the needle? (0.25 - 3)</li>
                  <li className="flex gap-2"><span className="font-bold w-24">Confidence:</span> How sure are we? (50% - 100%)</li>
                  <li className="flex gap-2"><span className="font-bold w-24">Effort:</span> How many person-months? (0.5 - 5)</li>
                </ul>
                <p className="text-xs text-muted-foreground italic mt-4">Best for: Quantitative ranking of feature requests.</p>
              </CardContent>
            </Card>

            {/* MoSCoW Method */}
            <Card className="rounded-none border-2 border-foreground shadow-lg">
              <CardHeader className="bg-foreground/10 border-b-2 border-foreground">
                <CardTitle className="uppercase font-bold text-foreground flex justify-between items-center">
                  MoSCoW Method
                  <ListFilter className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-100 p-3 border-l-4 border-green-500">
                    <div className="font-bold text-green-800 uppercase text-xs">Must Have</div>
                    <div className="text-sm">Non-negotiable. The product is broken without it.</div>
                  </div>
                  <div className="bg-blue-100 p-3 border-l-4 border-blue-500">
                    <div className="font-bold text-blue-800 uppercase text-xs">Should Have</div>
                    <div className="text-sm">Important but not vital. Can survive a workaround.</div>
                  </div>
                  <div className="bg-yellow-100 p-3 border-l-4 border-yellow-500">
                    <div className="font-bold text-yellow-800 uppercase text-xs">Could Have</div>
                    <div className="text-sm">Nice to have. Only if extra time exists.</div>
                  </div>
                  <div className="bg-red-100 p-3 border-l-4 border-red-500">
                    <div className="font-bold text-red-800 uppercase text-xs">Won't Have</div>
                    <div className="text-sm">Out of scope for now. (The most powerful column).</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic mt-4">Best for: Negotiating scope for a specific release/sprint.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Backlog Management */}
        <section>
          <h2 className="text-3xl font-bold uppercase mb-8 border-l-8 border-destructive pl-4">Backlog Hygiene</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border-2 border-foreground p-6 hover:shadow-lg transition-all">
              <h4 className="font-bold flex items-center gap-2 mb-3 text-lg"><AlertTriangle className="h-5 w-5 text-destructive" /> Needs Refinement</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Ideas, one-liners, and raw feedback. These are not ready for devs.
              </p>
              <div className="inline-block bg-muted px-2 py-1 text-xs font-bold uppercase">Definition of Ready</div>
            </div>

            <div className="flex items-center justify-center md:rotate-0 rotate-90">
              <div className="text-4xl text-muted-foreground">→</div>
            </div>

            <div className="bg-background border-2 border-primary p-6 hover:shadow-lg transition-all">
              <h4 className="font-bold flex items-center gap-2 mb-3 text-lg"><CheckSquare className="h-5 w-5 text-primary" /> Ready for Dev</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Has designs, acceptance criteria, and user value clearly defined.
              </p>
              <div className="inline-block bg-primary/20 text-primary px-2 py-1 text-xs font-bold uppercase">Estimated</div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
