import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, CheckSquare, Repeat, Layers } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden border-b-4 border-primary">
        <div className="container px-4 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block bg-primary text-white px-3 py-1 text-sm font-bold uppercase tracking-widest">
              Career Transition
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.9]">
              AGILE <br />
              <span className="text-primary">DESIGN</span> <br />
              TO PRODUCT
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Master the transition from <span className="font-bold text-foreground">Interaction Design</span> to <span className="font-bold text-primary">Product Management</span>. Learn how to translate user empathy into shipped software using Agile methodologies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/project-management">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none border-2 border-transparent font-bold uppercase tracking-wide h-14 px-8">
                  <CheckSquare className="mr-2 h-5 w-5" /> Start Learning
                </Button>
              </Link>
            </div>
          </div>

          {/* Abstract Hero Graphic */}
          <div className="relative h-full min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-muted/20 skew-y-3 transform" />
            <div className="relative z-10 border-4 border-primary bg-background p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-md">
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b-2 border-dashed border-muted pb-4">
                  <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <div className="font-bold uppercase text-sm">Design Thinking</div>
                    <div className="text-xs text-muted-foreground">Empathize & Define</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="text-muted-foreground rotate-90" />
                </div>
                <div className="flex items-center gap-4 border-b-2 border-dashed border-muted pb-4">
                  <div className="h-10 w-10 bg-foreground text-background rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <div className="font-bold uppercase text-sm">Agile Execution</div>
                    <div className="text-xs text-muted-foreground">Iterate & Ship</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-foreground/10 pb-6">
            <h2 className="text-4xl font-black uppercase tracking-tight text-foreground">Core Modules</h2>
            <p className="text-muted-foreground max-w-md text-right mt-4 md:mt-0">
              Essential practices for managing complex software products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/iteration-cycles">
              <motion.div whileHover={{ y: -10 }} className="cursor-pointer">
                <Card className="h-full border-2 border-transparent hover:border-primary transition-all duration-300 rounded-none bg-background shadow-sm hover:shadow-xl">
                  <CardHeader className="pb-2">
                    <Repeat className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-2xl font-bold uppercase">Iteration Cycles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Understanding Sprints, Standups, and Retrospectives. How to keep the team moving forward.
                    </p>
                    <div className="flex items-center text-primary font-bold uppercase text-sm tracking-wide group">
                      Explore Sprints <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>

            <Link href="/documentation">
              <motion.div whileHover={{ y: -10 }} className="cursor-pointer">
                <Card className="h-full border-2 border-transparent hover:border-primary transition-all duration-300 rounded-none bg-background shadow-sm hover:shadow-xl">
                  <CardHeader className="pb-2">
                    <FileText className="h-12 w-12 text-destructive mb-4" />
                    <CardTitle className="text-2xl font-bold uppercase">Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      From PRDs to User Stories. Writing requirements that developers can actually build.
                    </p>
                    <div className="flex items-center text-primary font-bold uppercase text-sm tracking-wide group">
                      View Templates <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>

            <Link href="/project-management">
              <motion.div whileHover={{ y: -10 }} className="cursor-pointer">
                <Card className="h-full border-2 border-transparent hover:border-primary transition-all duration-300 rounded-none bg-background shadow-sm hover:shadow-xl">
                  <CardHeader className="pb-2">
                    <CheckSquare className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-2xl font-bold uppercase">Prioritization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Managing the backlog. Deciding what to build next using RICE, MoSCoW, and other frameworks.
                    </p>
                    <div className="flex items-center text-primary font-bold uppercase text-sm tracking-wide group">
                      Learn Management <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <blockquote className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto font-serif italic">
            "Great products aren't just designed; they are <span className="text-destructive bg-white px-2">iterated</span> into existence."
          </blockquote>
        </div>
      </section>
    </Layout>
  );
}
