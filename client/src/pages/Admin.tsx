import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Lock, User, AlertCircle } from "lucide-react";
import logoBlack from "@assets/logo_1766887510744.png";

export default function Admin() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const ADMIN_CREDENTIALS = {
    username: "admin@rulmak.com",
    password: "rulmak123"
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    setTimeout(() => {
      if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        setIsLoading(false);
        setLocation("/admin/dashboard");
      } else {
        setIsLoading(false);
        setError("Geçersiz kullanıcı adı veya şifre");
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex w-full bg-muted/20 font-sans">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-center mb-8">
             <img src={logoBlack} alt="RULMAK Logo" className="h-16 w-auto" />
          </div>
          
          <Card className="border-border/50 shadow-xl">
            <CardHeader className="space-y-1 text-center pb-8">
              <CardTitle className="text-2xl font-bold font-heading">Admin Paneli Girişi</CardTitle>
              <CardDescription>Yönetici hesabınızla giriş yapın</CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">E-posta / Kullanıcı Adı</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="username" 
                      name="username"
                      placeholder="admin@rulmak.com" 
                      className="pl-10 h-11" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Şifre</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="password" 
                      name="password"
                      type="password" 
                      className="pl-10 h-11" 
                      required 
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full h-11 text-base font-medium" disabled={isLoading}>
                  {isLoading ? "Doğrulanıyor..." : "Admin Girişi"}
                </Button>
              </form>

              {/* Demo Credentials Info */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs font-semibold text-blue-900 mb-2">Demo Kimlik Bilgileri:</p>
                <div className="space-y-1 text-xs text-blue-800 font-mono">
                  <p><strong>E-posta:</strong> admin@rulmak.com</p>
                  <p><strong>Şifre:</strong> rulmak123</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right side - Info */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <blockquote className="space-y-4">
            <h2 className="text-3xl font-heading font-bold mb-6">Admin Paneli</h2>
            <ul className="space-y-3 text-lg leading-relaxed opacity-90">
              <li className="flex items-start gap-3">
                <span className="text-blue-300 font-bold text-xl">✓</span>
                <span>Bayi ve ürün yönetimi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-300 font-bold text-xl">✓</span>
                <span>İndirim gruplarını özelleştirme</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-300 font-bold text-xl">✓</span>
                <span>Sipariş ve envanter takibi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-300 font-bold text-xl">✓</span>
                <span>Uydu hesapları yönetme</span>
              </li>
            </ul>
            <div className="pt-6 border-t border-white/30">
              <p className="text-sm opacity-70">Bu, B2B e-ticaret sisteminin merkezi yönetim alanıdır.</p>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
