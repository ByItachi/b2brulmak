import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Truck, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Topbar } from "@/components/layout/Topbar";
import logoBlack from "@assets/logo_1766887510744.png";

// Brand logos
import idc from "@assets/WhatsApp_Görsel_2025-11-28_saat_14.20.45_26b214f1_1766888119560.jpg";
import nsk from "@assets/WhatsApp_Görsel_2025-11-28_saat_14.20.45_76f64202_1766888119561.jpg";
import gates from "@assets/WhatsApp_Görsel_2025-11-28_saat_14.20.45_4260b648_1766888119561.jpg";
import ntn from "@assets/WhatsApp_Görsel_2025-11-28_saat_14.20.46_7c0d75c6_1766888119562.jpg";
import dunlop from "@assets/WhatsApp_Görsel_2025-11-28_saat_14.20.46_693ad3ff_1766888119562.jpg";
import schaeffler from "@assets/WhatsApp_Görsel_2025-11-28_saat_14.20.46_8739cb61_1766888119562.jpg";
import koyo from "@assets/WhatsApp_Görsel_2025-11-28_saat_14.20.46_cfd8c7f4_1766888119563.jpg";
import timken from "@assets/WhatsApp_Görsel_2025-11-28_saat_14.20.46_da07f4c7_1766888119563.jpg";

const brands = [
  { name: "IDC", logo: idc },
  { name: "NSK", logo: nsk },
  { name: "Gates", logo: gates },
  { name: "NTN", logo: ntn },
  { name: "Dunlop", logo: dunlop },
  { name: "Schaeffler", logo: schaeffler },
  { name: "Koyo", logo: koyo },
  { name: "Timken", logo: timken },
];

const news = [
  {
    id: 1,
    title: "Yeni Stok Ürünler Eklendi",
    excerpt: "50 yeni rulman ürünü katalogumuza dahil edildi. Daha geniş seçim imkanıyla tanışın.",
    date: "22 Aralık 2025"
  },
  {
    id: 2,
    title: "Kış Kampanyası Başladı",
    excerpt: "Grup A bayilerine özel %20 indirim fırsatı. Sınırlı süre için geçerlidir.",
    date: "18 Aralık 2025"
  },
  {
    id: 3,
    title: "Sistem Bakımı Tamamlandı",
    excerpt: "Platform güvenliği ve performansı artırıldı. Daha hızlı işlem yapabilirsiniz.",
    date: "15 Aralık 2025"
  }
];

export default function Landing() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('brand-carousel');
    if (container) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;
      container.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Topbar />

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <img src={logoBlack} alt="RULMAK Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#ozellikler" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Çözümler</a>
            <a href="#haberler" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Haberler</a>
            <a href="#hakkimizda" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Hakkımızda</a>
          </div>
          <div className="flex items-center gap-4">
             <Link href="/login">
               <Button className="font-semibold shadow-lg shadow-primary/20">
                 Bayi Girişi <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
             </Link>
             <Link href="/admin">
               <Button variant="ghost" className="font-semibold text-primary hover:bg-primary/10">
                 Admin
               </Button>
             </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Simplified */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-8">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1]">
              Hareket için Tasarlandı.
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              50.000'den fazla endüstriyel rulman ürününü özel bayi fiyatlandırması ile erişin. 
              Modern tedarik zinciri için uygulanmış çözümler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/login">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-primary hover:bg-gray-100">
                   Bayi Portalı
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-white text-white bg-transparent hover:bg-white/10">
                İş Ortağı Ol
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Ürün", value: "50k+" },
              { label: "Bayi", value: "1.200+" },
              { label: "Marka", value: "45" },
              { label: "Ülke", value: "12" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-center mb-12 text-foreground">Güvenilen Markalar</h2>
          
          <div className="relative">
            <div
              id="brand-carousel"
              className="flex gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
            >
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-48 h-32 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow snap-start"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex gap-2 justify-center mt-6">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="ozellikler" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-gray-600 text-lg">Yüksek hacimli endüstriyel tedarik için sağlam bir altyapı sunuyoruz.</p>
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
              <Card key={i} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="haberler" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Haberler ve Duyurular</h2>
            <p className="text-gray-600 text-lg">En son güncellemeler ve kampanyalardan haberdar olun</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.id} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">{item.date}</p>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium pt-2">
                    Devamını Oku
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar text-white py-12 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-3 mb-6">
                 <img src={logoBlack} alt="Logo" className="h-8 w-auto bg-white rounded p-1" />
               </div>
               <p className="text-white/60 max-w-sm mb-6">
                 Rulman dağıtım teknolojisinde endüstriye öncülük etmekteyiz. Tedarik zinciriinizi iyileştirmek için bize katılın.
               </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white">Hızlı Bağlantılar</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ürün Kataloğu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bayi Başvurusu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Destek</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white">Yasal</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hizmet Şartları</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Çerez Politikası</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            © 2024 RULMAK B2B Sistemleri. Tüm Hakları Saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}
