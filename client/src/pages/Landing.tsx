import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Truck } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@assets/logo-white_1766887510744.png";

const sliderImages = [
  "@assets/4_1766887442960.jpg",
  "@assets/5_1766887442961.jpg",
  "@assets/6_1766887442961.jpg",
  "@assets/7_1766887442961.jpg",
  "@assets/8_1766887442962.jpg",
  "@assets/1_1766887478916.jpg",
  "@assets/2_1766887478916.jpg",
  "@assets/3_1766887478916.jpg",
];

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Navigation */}
      <nav className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <img src={logo} alt="RULMAK Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#ozellikler" className="text-sm font-medium hover:text-primary transition-colors">Çözümler</a>
            <a href="#hakkimizda" className="text-sm font-medium hover:text-primary transition-colors">Hakkımızda</a>
            <a href="#iletisim" className="text-sm font-medium hover:text-primary transition-colors">İletişim</a>
          </div>
          <div className="flex items-center gap-4">
             <Link href="/login">
               <Button className="font-semibold shadow-lg shadow-primary/20">
                 Bayi Girişi <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
             </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <div className="relative overflow-hidden bg-muted/10 h-96 md:h-[500px]">
        {/* Slider Container */}
        <div className="relative w-full h-full">
          {sliderImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                 <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                 Türkiye'nin Önde Gelen B2B Platformu
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tight text-foreground leading-[1.1]">
                Hareket için <span className="text-primary">Tasarlandı</span>.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                50.000'den fazla endüstriyel rulman ürününü özel bayi fiyatlandırması ile erişin. 
                Modern tedarik zinciri için uygulanmış çözümler.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/login">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-full">
                     Bayi Portalı
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2">
                  İş Ortağı Ol
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? "bg-primary w-8" : "bg-white/40 w-2 hover:bg-white/60"
              }`}
              data-testid={`slider-dot-${idx}`}
            />
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <section id="ozellikler" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-muted-foreground text-lg">Yüksek hacimli endüstriyel tedarik için sağlam bir altyapı sunuyoruz.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Sertifikalı Orijinallik", 
                desc: "SKF, FAG, NSK gibi yetkili distribütörlerden %100 orijinal ürünler." 
              },
              { 
                icon: Truck, 
                title: "Küresel Lojistik", 
                desc: "Gerçek zamanlı takip ve hızlı gönderim ile entegre kargo çözümleri." 
              },
              { 
                icon: Globe, 
                title: "Dijital Entegrasyon", 
                desc: "Akılcı envanter yönetimi için doğrudan ERP bağlantı olanakları." 
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
              { label: "Ürün", value: "50k+" },
              { label: "Bayi", value: "1.200+" },
              { label: "Marka", value: "45" },
              { label: "Ülke", value: "12" },
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
                 <img src={logo} alt="Logo" className="h-8 w-auto" />
               </div>
               <p className="text-sidebar-foreground/60 max-w-sm mb-6">
                 Rulman dağıtım teknolojisinde endüstriye öncülük etmekteyiz. Tedarik zincirieleştirmek için bize katılın.
               </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Hızlı Bağlantılar</h4>
              <ul className="space-y-3 text-sidebar-foreground/60">
                <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ürün Kataloğu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bayi Başvurusu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Destek</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Yasal</h4>
              <ul className="space-y-3 text-sidebar-foreground/60">
                <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hizmet Şartları</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Çerez Politikası</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sidebar-foreground/40 text-sm">
            © 2024 RULMAK B2B Sistemleri. Tüm Hakları Saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}
