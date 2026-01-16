import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Repeat, Clock, Lightbulb, Code } from "lucide-react";

export default function IterationCycles() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b-4 border-primary">
        <div className="container px-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-primary mb-4">Iteration Cycles</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Synchronizing the rhythm of Design Discovery and Code Delivery.
          </p>
        </div>
      </div>

      <div className="container px-4 py-12 space-y-16">
        {/* Comparison Table */}
        <section>
          <h2 className="text-3xl font-bold uppercase mb-8 border-l-8 border-primary pl-4">Methodology Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-foreground text-left">
              <thead>
                <tr className="bg-foreground text-background">
                  <th className="p-4 uppercase font-bold border-r-2 border-background">Approach</th>
                  <th className="p-4 uppercase font-bold border-r-2 border-background">Design Phase</th>
                  <th className="p-4 uppercase font-bold border-r-2 border-background">Hand-off</th>
                  <th className="p-4 uppercase font-bold">Feedback Loop</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-foreground hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-bold border-r-2 border-foreground">Waterfall</td>
                  <td className="p-4 border-r-2 border-foreground">Fully completed before code starts.</td>
                  <td className="p-4 border-r-2 border-foreground text-destructive font-bold">Single "Big Bang"</td>
                  <td className="p-4">Months/Years (Too late)</td>
                </tr>
                <tr className="border-b-2 border-foreground hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-bold border-r-2 border-foreground text-primary">Scrum (Basic)</td>
                  <td className="p-4 border-r-2 border-foreground">Design happens inside the sprint (rushed).</td>
                  <td className="p-4 border-r-2 border-foreground text-yellow-600 font-bold">Continuous / Chaotic</td>
                  <td className="p-4"> 2 Weeks</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-bold border-r-2 border-foreground text-green-600">Dual Track Agile</td>
                  <td className="p-4 border-r-2 border-foreground">Discovery Track runs ahead of Delivery.</td>
                  <td className="p-4 border-r-2 border-foreground text-green-600 font-bold">Staggered & Iterative</td>
                  <td className="p-4">Continuous & Validated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Visual Timeline */}
        <section>
          <h2 className="text-3xl font-bold uppercase mb-8 border-l-8 border-destructive pl-4">Dual Track Visualization</h2>
          <div className="relative border-2 border-foreground p-8 bg-background">
            <div className="absolute top-0 left-0 bg-primary text-white px-3 py-1 text-xs font-bold uppercase">
              The Staggered Sprint
            </div>

            <div className="space-y-8 mt-4">
              {/* Discovery Track */}
              <div>
                <h4 className="font-bold uppercase mb-2 text-sm text-foreground flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" /> Discovery Track (Designers & PMs)
                </h4>
                <div className="flex h-12 w-full border-2 border-foreground">
                  <div className="flex-1 bg-yellow-100 flex items-center justify-center border-r-2 border-foreground text-xs font-bold">Research</div>
                  <div className="flex-[2] bg-yellow-200 flex items-center justify-center border-r-2 border-foreground text-xs font-bold">Prototype & Test</div>
                  <div className="flex-1 bg-yellow-300 flex items-center justify-center border-r-2 border-foreground text-xs font-bold text-center leading-tight">Refine<br />Specs</div>
                  <div className="flex-1 bg-white/50 flex items-center justify-center text-xs text-muted-foreground font-mono">Next: Handover</div>
                </div>
              </div>

              {/* Connection Arrows */}
              <div className="pl-[75%] -my-4 relative z-10">
                <ArrowRight className="w-8 h-8 text-foreground rotate-90" />
              </div>

              {/* Delivery Track */}
              <div>
                <h4 className="font-bold uppercase mb-2 text-sm text-foreground flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-500" /> Delivery Track (Engineers)
                </h4>
                <div className="flex h-12 w-full border-2 border-foreground">
                  <div className="flex-1 bg-gray-100 flex items-center justify-center border-r-2 border-foreground text-xs font-bold text-muted-foreground">Tech Debt</div>
                  <div className="flex-[2] bg-gray-100 flex items-center justify-center border-r-2 border-foreground text-xs font-bold text-muted-foreground">Previous Feature</div>
                  {/* This block aligns with the end of the design track roughly */}
                  <div className="flex-1 bg-blue-500 text-white flex items-center justify-center text-xs font-bold w-full">Sprint Planning</div>
                  <div className="flex-1 bg-blue-100 flex items-center justify-center border-l-2 border-foreground text-xs font-bold">Development</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-4 bg-blue-50 border-l-4 border-blue-500 p-4 text-blue-900">
              <Clock className="h-6 w-6 flex-shrink-0" />
              <p className="text-sm">
                <strong>The Golden Rule:</strong> Design should be validated roughly 1 sprint ahead of development. This ensures engineers never block on "missing designs" and designers don't have to support "pixel pushing" while trying to do research.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
