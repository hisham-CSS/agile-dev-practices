import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function RoadmapGantt() {
    const roadmapItems = [
        {
            feature: "User Profiles",
            status: "In Progress",
            timeline: [
                { phase: "Discovery", start: 0, duration: 2, type: "design" },
                { phase: "Dev", start: 2, duration: 3, type: "dev" },
            ]
        },
        {
            feature: "Payment Gateway",
            status: "Backlog",
            timeline: [
                { phase: "Discovery", start: 3, duration: 2, type: "design" },
            ]
        },
        {
            feature: "Search Filters",
            status: "Done",
            timeline: [
                { phase: "Dev", start: 0, duration: 1, type: "dev" },
                { phase: "QA", start: 1, duration: 1, type: "qa" },
            ]
        },
        {
            feature: "Analytics Dashboard",
            status: "Backlog",
            timeline: [
                { phase: "Discovery", start: 2, duration: 2, type: "design" },
                { phase: "Dev", start: 4, duration: 1, type: "dev" },
            ]
        }
    ];

    const totalSprints = 5;

    return (
        <Card className="rounded-none border-2 border-foreground shadow-xl overflow-hidden bg-background">
            <CardHeader className="bg-foreground text-background border-b-2 border-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full -skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]" />
                <CardTitle className="uppercase font-black tracking-widest flex justify-between items-center z-10 relative">
                    <span>Strategic Roadmap (Q1)</span>
                    <Badge variant="outline" className="border-background text-background font-mono bg-white/20 hover:bg-white/30">LIVING DOCUMENT</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-8 relative">
                {/* Grid Background */}
                <div className="absolute inset-x-8 top-24 bottom-20 flex pointer-events-none">
                    {[...Array(totalSprints)].map((_, i) => (
                        <div key={i} className="flex-1 border-r border-dashed border-foreground/10 last:border-0" />
                    ))}
                </div>

                <div className="space-y-8 relative z-10">
                    {/* Timeline Header */}
                    <div className="flex pl-4 md:pl-48 text-xs font-bold uppercase text-muted-foreground border-b-2 border-foreground pb-4 tracking-wider">
                        {[...Array(totalSprints)].map((_, i) => (
                            <div key={i} className="flex-1 text-center">Sprint {i + 1}</div>
                        ))}
                    </div>

                    {/* Items */}
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative group flex flex-col md:flex-row items-center gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Label */}
                            <div className="w-full md:w-48 flex justify-between md:block items-center">
                                <div className="text-sm font-bold truncate">{item.feature}</div>
                                <div className="text-[10px] text-muted-foreground font-mono uppercase mt-1">{item.status}</div>
                            </div>

                            {/* Bar Track */}
                            <div className="flex-1 w-full h-10 bg-muted/20 relative rounded-lg border border-border/10 overflow-hidden shadow-inner">
                                {item.timeline.map((block, i) => (
                                    <motion.div
                                        key={i}
                                        className={`absolute h-full top-0 rounded-md border-y border-x border-white/20 shadow-md flex items-center justify-center text-[10px] font-black uppercase text-white tracking-wider cursor-help transition-all hover:scale-[1.02] hover:z-20
                      ${block.type === 'design' ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : ''}
                      ${block.type === 'dev' ? 'bg-gradient-to-br from-blue-400 to-indigo-600' : ''}
                      ${block.type === 'qa' ? 'bg-gradient-to-br from-green-400 to-emerald-600' : ''}
                    `}
                                        style={{
                                            left: `${(block.start / totalSprints) * 100}%`,
                                            width: `${(block.duration / totalSprints) * 100}%`
                                        }}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(block.duration / totalSprints) * 100}%` }}
                                        transition={{ delay: (index * 0.2) + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                                    >
                                        {block.phase}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Legend */}
                <div className="flex gap-6 text-xs mt-12 justify-center md:justify-end font-bold uppercase tracking-wide border-t-2 border-foreground/10 pt-6">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-sm"></div> Discovery</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full shadow-sm"></div> Delivery</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-sm"></div> QA/Staging</div>
                </div>
            </CardContent>
        </Card>
    );
}
