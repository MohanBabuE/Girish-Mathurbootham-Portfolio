/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Rocket, 
  Target, 
  Users, 
  Globe, 
  TrendingUp, 
  Quote, 
  Zap, 
  Heart,
  Linkedin,
  Twitter,
  Network,
  Award,
  Cpu,
  ArrowUpRight,
  Trophy,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Insights", href: "#insights" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-hidden">
      
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-lg font-serif font-black tracking-tighter uppercase text-primary">GM</span>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:block font-bold">Operator-Investor</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <Button className="rounded-none bg-primary text-background font-bold uppercase tracking-widest text-[9px] px-6 py-4 h-auto hover:scale-105 transition-transform">
            Pitch
          </Button>
        </div>
      </header>

      <main className="pt-16 lg:pt-20">
        
        {/* Hero / Identity Section */}
        <section id="home" className="min-h-[90vh] flex flex-col lg:flex-row border-b border-border">
          {/* Identity Panel (Integrated) */}
          <div className="lg:w-[450px] xl:w-[500px] bg-secondary/20 p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-12"
            >
              <div className="relative w-full aspect-[4/5] bg-secondary overflow-hidden rounded-sm group">
                <img 
                  src="https://cdn.prod.website-files.com/6823f7be37e7dd18f6e16585/6900606b8937384b23b6276f_girish.png" 
                  alt="Girish Mathrubootham" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6">
                  <Badge className="bg-primary text-background font-bold tracking-widest uppercase text-[9px] lg:text-[10px] px-2 py-0.5 lg:px-3 lg:py-1 mb-2">
                    NASDAQ: FRSH
                  </Badge>
                </div>
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black leading-[0.85] tracking-tighter uppercase mb-4 lg:mb-6">
                  GIRISH<br />MATHRU-<br />BOOTHAM
                </h1>
                <p className="text-[10px] lg:text-[11px] uppercase tracking-[0.4em] lg:tracking-[0.5em] text-primary font-bold">
                  The Operator-Investor
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Legacy", value: "Founder & CEO, Freshworks" },
                  { label: "Current", value: "Managing Partner, Together Fund" },
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <h3 className="text-[9px] lg:text-[10px] uppercase tracking-widest text-muted-foreground mb-1 group-hover:text-primary transition-colors">{stat.label}</h3>
                    <p className="text-base lg:text-lg font-medium tracking-tight">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Manifesto Panel */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-20 xl:p-24 relative overflow-hidden bg-background">
            <motion.div 
              style={{ opacity, scale }}
              className="max-w-4xl relative z-10"
            >
              <Quote size={48} className="text-primary/20 mb-8 lg:mb-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic font-medium leading-[1.1] tracking-tight text-foreground mb-12 lg:mb-16">
                "From a broken TV in Chennai to the Nasdaq bell—conviction is the only currency that doesn't depreciate."
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-3 lg:space-y-4">
                  <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] lg:tracking-[0.3em] text-primary font-bold">The Thesis</span>
                  <p className="text-lg lg:text-xl font-bold leading-snug">Togetherness over Transaction.</p>
                  <p className="text-xs lg:text-sm text-muted leading-relaxed">
                    Investing isn't about capital; it's about being the first call when things go wrong and the first cheer when they go right.
                  </p>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] lg:tracking-[0.3em] text-primary font-bold">The Mission</span>
                  <p className="text-lg lg:text-xl font-bold leading-snug">The Indian SaaS Mafia.</p>
                  <p className="text-xs lg:text-sm text-muted leading-relaxed">
                    Building a global ecosystem where Indian founders don't just participate—they lead the AI-native revolution.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Background Decorative Text */}
            <div className="absolute -bottom-10 -right-10 lg:-bottom-20 lg:-right-20 text-[20vw] lg:text-[25vw] font-black text-white/[0.02] pointer-events-none select-none leading-none">
              FRSH
            </div>
          </div>
        </section>

        {/* Narrative Section: The Odyssey */}
        <section id="about" className="p-8 md:p-12 lg:p-20 xl:p-24 border-b border-border bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 items-center">
              <div className="flex-1 space-y-8 lg:space-y-12">
                <div className="space-y-3 lg:space-y-4">
                  <Badge variant="outline" className="rounded-none border-primary/50 text-primary text-[9px] lg:text-[10px] tracking-widest uppercase px-3 py-0.5 lg:px-4 lg:py-1">
                    The Narrative
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tighter uppercase">The Chennai-to-Nasdaq Odyssey</h2>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
                    My journey didn't start in a boardroom. It started with a frustration—a broken TV and a customer service nightmare. That spark became Freshworks, a company that proved world-class SaaS could be built from India for the world.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:gap-8">
                  {[
                    { 
                      icon: <Award className="text-primary" />, 
                      title: "The Zoho Foundation", 
                      desc: "Learning the art of product-led growth and resilience at Zoho, the cradle of Indian SaaS." 
                    },
                    { 
                      icon: <Rocket className="text-primary" />, 
                      title: "The Freshworks Spark", 
                      desc: "Scaling from a small team in Chennai to 5,000+ employees globally, serving 60,000+ customers." 
                    },
                    { 
                      icon: <Trophy className="text-primary" />, 
                      title: "The Nasdaq Milestone", 
                      desc: "Becoming the first Indian-founded SaaS company to list on Nasdaq—a moment for an entire ecosystem." 
                    }
                  ].map((milestone, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="flex gap-4 lg:gap-6 items-start p-5 lg:p-6 border border-border bg-background/50 hover:border-primary/50 transition-all group"
                    >
                      <div className="p-2.5 lg:p-3 bg-secondary group-hover:bg-primary/10 transition-colors">
                        {milestone.icon}
                      </div>
                      <div>
                        <h4 className="text-base lg:text-lg font-bold mb-1 lg:mb-2 uppercase tracking-tight">{milestone.title}</h4>
                        <p className="text-xs lg:text-sm text-muted leading-relaxed">{milestone.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 relative w-full">
                <div className="relative aspect-square border border-border overflow-hidden group">
                  <img 
                    src="https://picsum.photos/seed/nasdaq/1000/1000" 
                    alt="Nasdaq Listing" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 bg-primary p-4 lg:p-8 hidden sm:block">
                  <p className="text-background font-black text-2xl lg:text-4xl leading-none uppercase tracking-tighter">
                    Global<br />Impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Philosophy: Together Fund */}
        <section id="philosophy" className="p-8 md:p-12 lg:p-20 xl:p-24 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 lg:mb-24 space-y-4 lg:space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tighter uppercase">Investment Philosophy</h2>
              <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto font-light">
                We don't just invest in startups; we invest in founders who have the audacity to build for the next century.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {[
                { 
                  title: "AI-Native First", 
                  desc: "We look for companies that aren't just 'adding AI' but are built on AI from the ground up.",
                  icon: <Cpu size={28} className="lg:w-8 lg:h-8" />
                },
                { 
                  title: "Product Excellence", 
                  desc: "In a world of noise, product quality is the only signal that lasts. We value craft.",
                  icon: <Zap size={28} className="lg:w-8 lg:h-8" />
                },
                { 
                  title: "Founder-Market Fit", 
                  desc: "The best companies are born from a founder's personal obsession with a problem.",
                  icon: <Target size={28} className="lg:w-8 lg:h-8" />
                },
                { 
                  title: "Global Ambition", 
                  desc: "We back founders who see the world as their market from day zero.",
                  icon: <Globe size={28} className="lg:w-8 lg:h-8" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-background p-8 lg:p-12 space-y-6 lg:space-y-8 hover:bg-secondary/50 transition-colors group">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    <h3 className="text-lg lg:text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                    <p className="text-xs lg:text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section id="portfolio" className="p-8 md:p-12 lg:p-20 xl:p-24 border-b border-border bg-secondary/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-20 gap-8">
              <div className="space-y-3 lg:space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tighter uppercase">Portfolio Impact</h2>
                <p className="text-muted text-sm lg:text-base max-w-md">Leading the $150M Together Fund to empower the next generation of global SaaS leaders.</p>
              </div>
              <Tabs defaultValue="all" className="w-full md:w-auto overflow-x-auto">
                <TabsList className="bg-background border border-border p-1 rounded-none w-full md:w-auto">
                  <TabsTrigger value="all" className="flex-1 md:flex-none data-[state=active]:bg-primary data-[state=active]:text-background rounded-none text-[9px] lg:text-[10px] uppercase tracking-widest px-4 lg:px-6">All</TabsTrigger>
                  <TabsTrigger value="ai" className="flex-1 md:flex-none data-[state=active]:bg-primary data-[state=active]:text-background rounded-none text-[9px] lg:text-[10px] uppercase tracking-widest px-4 lg:px-6">AI / Data</TabsTrigger>
                  <TabsTrigger value="saas" className="flex-1 md:flex-none data-[state=active]:bg-primary data-[state=active]:text-background rounded-none text-[9px] lg:text-[10px] uppercase tracking-widest px-4 lg:px-6">SaaS</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { name: "Toplyne", sector: "AI / Sales", desc: "Behavioral AI for product-led growth teams.", logo: "TL" },
                { name: "CloudKettle", sector: "SaaS / RevOps", desc: "Revenue operations for the world's largest enterprises.", logo: "CK" },
                { name: "DhiWise", sector: "DevTools", desc: "The world's fastest programming platform for developers.", logo: "DW" },
                { name: "Privado", sector: "Privacy / AI", desc: "Privacy code scanning for modern engineering teams.", logo: "PR" },
                { name: "Spendflo", sector: "SaaS / Fintech", desc: "Buying and managing SaaS made simple and efficient.", logo: "SF" },
                { name: "Kula", sector: "HR Tech", desc: "Recruitment automation for high-growth companies.", logo: "KU" }
              ].map((company, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="rounded-none border-border bg-background hover:border-primary/50 transition-all group cursor-pointer overflow-hidden">
                    <CardContent className="p-8 lg:p-10 space-y-5 lg:space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-secondary flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                          {company.logo}
                        </div>
                        <Badge variant="secondary" className="rounded-none text-[8px] lg:text-[9px] uppercase tracking-widest">
                          {company.sector}
                        </Badge>
                      </div>
                      <div className="space-y-1.5 lg:space-y-2">
                        <h3 className="text-xl lg:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{company.name}</h3>
                        <p className="text-xs lg:text-sm text-muted leading-relaxed">{company.desc}</p>
                      </div>
                      <div className="pt-3 lg:pt-4 flex items-center text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                        View Insight <ArrowUpRight size={12} className="ml-1 lg:w-3.5 lg:h-3.5" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 lg:mt-20 text-center">
              <Button variant="outline" className="rounded-none border-border px-8 lg:px-12 py-4 lg:py-6 text-[9px] lg:text-[10px] uppercase tracking-[0.2em] lg:tracking-[0.3em] hover:bg-primary hover:text-background transition-all">
                View Full Portfolio (60+)
              </Button>
            </div>
          </div>
        </section>

        {/* Thought Leadership */}
        <section id="insights" className="p-8 md:p-12 lg:p-20 xl:p-24 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tighter uppercase mb-12 lg:mb-16 text-center">Strategic Insights</h2>
            <Accordion type="single" collapsible className="w-full space-y-3 lg:space-y-4">
              {[
                { 
                  q: "On Culture as a Product", 
                  a: "Culture is not what you say in a handbook; it's the product you build for your employees. If your internal product is broken, your external product will eventually fail." 
                },
                { 
                  q: "On The AI Revolution", 
                  a: "AI isn't just a feature; it's a fundamental shift in how software is consumed. We are moving from 'Software as a Service' to 'Intelligence as a Service'." 
                },
                { 
                  q: "On Founder Resilience", 
                  a: "The difference between a good founder and a great one is the ability to maintain conviction when the data says otherwise. It's about seeing the future before it's obvious." 
                },
                { 
                  q: "On Global Scaling", 
                  a: "To build for the world, you must understand the world. But you must also leverage your unique local advantages. Chennai's frugality combined with Silicon Valley's ambition is a lethal combo." 
                },
                { 
                  q: "On The Future of SaaS", 
                  a: "The next decade of SaaS will be defined by vertical AI—deeply specialized intelligence that solves specific industry pain points with 10x efficiency." 
                }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border px-6 lg:px-8 bg-secondary/20 hover:bg-secondary/40 transition-colors">
                  <AccordionTrigger className="text-base lg:text-lg font-bold uppercase tracking-tight hover:no-underline py-6 lg:py-8 text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base lg:text-lg leading-relaxed pb-6 lg:pb-8 font-light italic">
                    "{item.a}"
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Personal Dimension */}
        <section className="p-8 md:p-12 lg:p-20 xl:p-24 border-b border-border bg-background relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="flex-1 space-y-8 lg:space-y-12 relative z-10">
              <div className="space-y-3 lg:space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tighter uppercase">Beyond the Boardroom</h2>
                <p className="text-muted text-base lg:text-lg font-light">The human side of the operator-investor.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center gap-2 lg:gap-3 text-primary">
                    <Star size={20} className="lg:w-6 lg:h-6" />
                    <h4 className="font-bold uppercase tracking-widest text-xs lg:text-sm">The Superstar Influence</h4>
                  </div>
                  <p className="text-xs lg:text-sm text-muted leading-relaxed">
                    A lifelong fan of Rajinikanth. The 'Superstar's' journey from a bus conductor to a global icon is a constant reminder that humble beginnings are the best foundations for greatness.
                  </p>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center gap-2 lg:gap-3 text-primary">
                    <Trophy size={20} className="lg:w-6 lg:h-6" />
                    <h4 className="font-bold uppercase tracking-widest text-xs lg:text-sm">The Pitch Deck</h4>
                  </div>
                  <p className="text-xs lg:text-sm text-muted leading-relaxed">
                    Cricket is more than a sport; it's a masterclass in strategy, teamwork, and handling pressure. Whether it's a Test match or a Series A, the fundamentals remain the same.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-3 lg:gap-4 w-full">
              <div className="space-y-3 lg:space-y-4">
                <div className="aspect-[3/4] bg-secondary border border-border overflow-hidden">
                  <img src="https://picsum.photos/seed/chennai/600/800" alt="Chennai" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-primary/10 border border-primary/20 flex items-center justify-center p-4 lg:p-8 text-center">
                  <p className="text-primary font-serif italic text-base lg:text-xl">"Stay hungry, stay humble."</p>
                </div>
              </div>
              <div className="space-y-3 lg:space-y-4 pt-8 lg:pt-12">
                <div className="aspect-square bg-secondary border border-border flex items-center justify-center">
                  <Heart size={40} className="text-primary/20 lg:w-15 lg:h-15" />
                </div>
                <div className="aspect-[3/4] bg-secondary border border-border overflow-hidden">
                  <img src="https://picsum.photos/seed/cricket/600/800" alt="Cricket" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="p-8 md:p-12 lg:p-20 xl:p-24 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
            <div className="space-y-3 lg:space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tighter uppercase">Let's Build Together</h2>
              <p className="text-muted text-xs lg:text-sm">Investing in the next 100 years of global SaaS from India.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full sm:w-auto">
              <Button className="rounded-none bg-primary text-background font-bold uppercase tracking-widest px-8 lg:px-10 py-4 lg:py-6 hover:scale-105 transition-transform w-full sm:w-auto">
                Pitch Together Fund
              </Button>
              <Button variant="outline" className="rounded-none border-border font-bold uppercase tracking-widest px-8 lg:px-10 py-4 lg:py-6 hover:bg-secondary transition-all w-full sm:w-auto">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="mt-16 lg:mt-24 pt-8 lg:pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-6 text-[8px] lg:text-[10px] uppercase tracking-[0.2em] lg:tracking-[0.3em] text-muted-foreground text-center md:text-left">
            <p>© 2026 Girish Mathrubootham. All Rights Reserved.</p>
            <div className="flex gap-6 lg:gap-8">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
