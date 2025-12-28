import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Truck } from "lucide-react";
import heroImg from "@assets/generated_images/industrial_steel_ball_bearings_artistic_composition.png";
import logo from "@assets/generated_images/modern_industrial_minimalist_company_logo.png";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Navigation */}
      <nav className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <img src={logo} alt="Logo" className="h-10 w-auto" />
             <span className="font-heading font-bold text-2xl tracking-tight text-primary">RULMAN B2B</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Solutions</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About Us</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
             <Link href="/login">
               <Button className="font-semibold shadow-lg shadow-primary/20">
                 Dealer Login <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
             </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-muted/10">
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
               <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
               Premium B2B Portal for Industry Leaders
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tight text-foreground leading-[1.1]">
              Engineered for <span className="text-primary">Motion</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Access over 50,000 industrial bearing products with exclusive dealer pricing. 
              Streamlined procurement for the modern supply chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/login">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full">
                   Access Dealer Portal
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-muted-foreground text-lg">We provide a robust infrastructure for high-volume industrial procurement.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Certified Authenticity", 
                desc: "100% genuine products from authorized distributors like SKF, FAG, and NSK." 
              },
              { 
                icon: Truck, 
                title: "Global Logistics", 
                desc: "Integrated shipping solutions with real-time tracking and rapid dispatch." 
              },
              { 
                icon: Globe, 
                title: "Digital Integration", 
                desc: "Direct ERP connection capabilities for seamless inventory management." 
              }
            ].map((feature, i) => (
              <Card key={i} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Products", value: "50k+" },
              { label: "Dealers", value: "1,200+" },
              { label: "Brands", value: "45" },
              { label: "Countries", value: "12" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-bold">{stat.value}</div>
                <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground py-12 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-3 mb-6">
                 <img src={logo} alt="Logo" className="h-8 w-auto bg-white rounded p-0.5" />
                 <span className="font-heading font-bold text-xl">RULMAN B2B</span>
               </div>
               <p className="text-sidebar-foreground/60 max-w-sm mb-6">
                 Leading the industry in bearing distribution technology. Connect with us to streamline your supply chain.
               </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sidebar-foreground/60">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Product Catalog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dealer Application</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-3 text-sidebar-foreground/60">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sidebar-foreground/40 text-sm">
            © 2024 Rulman B2B Systems. All rights reserved. Mockup for demonstration.
          </div>
        </div>
      </footer>
    </div>
  );
}
