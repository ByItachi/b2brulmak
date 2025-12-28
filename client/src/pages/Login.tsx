import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Lock, User } from "lucide-react";
import { Topbar } from "@/components/layout/Topbar";
import logoBlack from "@assets/logo_1766887510744.png";

export default function Login() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLocation("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex w-full bg-muted/20 font-sans flex-col">
      <Topbar />
      
      <div className="flex-1 flex">
        {/* Left side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="flex justify-center mb-8">
               <img src={logoBlack} alt="RULMAK Logo" className="h-16 w-auto" />
            </div>
            
            <Card className="border-border/50 shadow-xl">
              <CardHeader className="space-y-1 text-center pb-8">
                <CardTitle className="text-2xl font-bold font-heading">Bayi Portalı Girişi</CardTitle>
                <CardDescription>B2B sistemine erişmek için bayi kimlik bilgilerinizi girin</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username">Bayi Kodu / E-posta</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input id="username" placeholder="örn. KOC-01-460" className="pl-10 h-11" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Şifre</Label>
                      <a href="#" className="text-xs text-primary hover:underline">Şifremi unuttum?</a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input id="password" type="password" className="pl-10 h-11" required />
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-11 text-base font-medium" disabled={isLoading}>
                    {isLoading ? "Doğrulanıyor..." : "Güvenli Giriş"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <p className="text-center text-sm text-muted-foreground">
              Henüz kayıtlı bir bayi değil misiniz? <a href="#" className="text-primary hover:underline font-medium">İş ortağı için başvuru yapın</a>
            </p>
          </div>
        </div>

        {/* Right side - Brand Info */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <blockquote className="space-y-4">
              <p className="text-lg font-medium leading-relaxed italic opacity-90">
                "Bu platform rulman envanterimizi yönetme şeklimizi devrim niteliğinde değiştirdi. Gerçek zamanlı stok güncellemeleri ve kişiselleştirilmiş fiyatlandırma yapısı bize sayısız saati tasarruf ettirdi."
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold">JD</div>
                <div>
                  <div className="font-bold">Ahmet Yıldız</div>
                  <div className="text-sm opacity-70">Satın Alma Müdürü, Endüstriyel Çözümler Ltd.</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
