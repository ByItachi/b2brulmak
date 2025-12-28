import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Lock, User } from "lucide-react";
import heroImg from "@assets/generated_images/industrial_steel_ball_bearings_artistic_composition.png";
import logo from "@assets/generated_images/modern_industrial_minimalist_company_logo.png";

export default function Login() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      setLocation("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex w-full bg-muted/20 font-sans">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-center mb-8">
             <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>
          
          <Card className="border-border/50 shadow-xl">
            <CardHeader className="space-y-1 text-center pb-8">
              <CardTitle className="text-2xl font-bold font-heading">Dealer Portal Login</CardTitle>
              <CardDescription>Enter your dealer credentials to access the B2B system</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Dealer Code / Email</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input id="username" placeholder="e.g. KOC-01-460" className="pl-10 h-11" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input id="password" type="password" className="pl-10 h-11" required />
                  </div>
                </div>

                <Button type="submit" className="w-full h-11 text-base font-medium" disabled={isLoading}>
                  {isLoading ? "Authenticating..." : "Secure Login"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground">
            Not a registered dealer? <a href="#" className="text-primary hover:underline font-medium">Apply for partnership</a>
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-sidebar">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sidebar via-sidebar/90 to-primary/20" />
        
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <blockquote className="space-y-4">
            <p className="text-lg font-medium leading-relaxed italic opacity-90">
              "This platform has revolutionized how we manage our bearing inventory. The real-time stock updates and tailored pricing structure have saved us countless hours."
            </p>
            <footer className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold">JD</div>
              <div>
                <div className="font-bold">John Doe</div>
                <div className="text-sm opacity-70">Procurement Manager, Industrial Solutions Ltd.</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
