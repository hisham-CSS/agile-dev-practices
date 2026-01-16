import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Code, CheckCircle, Smartphone } from "lucide-react";

export default function Documentation() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b-4 border-primary">
        <div className="container px-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-primary mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Writing requirements that clarify thought rather than just filling pages.
          </p>
        </div>
      </div>

      <div className="container px-4 py-12">
        <Tabs defaultValue="stories" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 rounded-none border-2 border-foreground bg-background p-0 h-12">
            <TabsTrigger
              value="stories"
              className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-white h-full font-bold uppercase tracking-wide border-r-2 border-foreground"
            >
              User Stories
            </TabsTrigger>
            <TabsTrigger
              value="specs"
              className="rounded-none data-[state=active]:bg-foreground data-[state=active]:text-background h-full font-bold uppercase tracking-wide"
            >
              Design Handoff
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stories" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="rounded-none border-2 border-primary shadow-lg">
                <CardHeader className="bg-primary/10 border-b-2 border-primary">
                  <CardTitle className="flex items-center gap-2 uppercase font-bold">
                    <FileText className="h-5 w-5" /> The Format
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 font-mono text-sm">
                  <p className="mb-4 text-muted-foreground font-sans">
                    The classic template keeps focus on the user's value, not the system's function.
                  </p>
                  <div className="bg-muted p-4 border border-foreground/20">
                    <div className="text-primary font-bold">AS A</div> &lt;type of user&gt;<br />
                    <div className="text-primary font-bold mt-2">I WANT TO</div> &lt;perform an action&gt;<br />
                    <div className="text-primary font-bold mt-2">SO THAT</div> &lt;I achieve some value&gt;
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-none border-2 border-primary shadow-lg">
                <CardHeader className="bg-primary/10 border-b-2 border-primary">
                  <CardTitle className="flex items-center gap-2 uppercase font-bold">
                    <CheckCircle className="h-5 w-5" /> Acceptance Criteria (AC)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-muted-foreground">
                    The definition of "Done". This is the contract between Product and Engineering.
                  </p>
                  <ul className="list-disc pl-4 space-y-2 text-sm">
                    <li><strong>Scenario 1:</strong> User enters invalid email → Show error "Invalid Format".</li>
                    <li><strong>Scenario 2:</strong> User clicks submit → Button state changes to "Loading".</li>
                    <li><strong>Scenario 3:</strong> API fails → Show toast notification with retry.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="specs" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="rounded-none border-2 border-foreground shadow-lg">
                <CardHeader className="bg-foreground/10 border-b-2 border-foreground">
                  <CardTitle className="flex items-center gap-2 uppercase font-bold">
                    <Smartphone className="h-5 w-5" /> Visual Specs
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-muted-foreground">
                    Don't make devs guess. Figma Dev Mode helps, but explicit notes are better.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold uppercase text-foreground text-sm">States</h4>
                      <p className="text-sm">Default, Hover, Active, Disabled, Loading, Error.</p>
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-foreground text-sm">Responsive</h4>
                      <p className="text-sm">Mobile (375px), Tablet (768px), Desktop (1440px).</p>
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-foreground text-sm">Edge Cases</h4>
                      <p className="text-sm">Super long names, empty states, missing images.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-none border-2 border-foreground shadow-lg">
                <CardHeader className="bg-foreground/10 border-b-2 border-foreground">
                  <CardTitle className="flex items-center gap-2 uppercase font-bold">
                    <Code className="h-5 w-5" /> Technical Handoff
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-muted-foreground">
                    Items to clarify before the sprint starts.
                  </p>
                  <ul className="list-disc pl-4 space-y-2 text-sm">
                    <li><strong>Analytics:</strong> distinct_id, event_name, properties.</li>
                    <li><strong>Assets:</strong> SVGs optimized? Copy final?</li>
                    <li><strong>Accessibility:</strong> Tab order, Aria labels, Contrast ratios.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
