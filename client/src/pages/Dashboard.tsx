import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Package, TrendingUp, DollarSign, Clock, AlertCircle } from "lucide-react";
import { MOCK_DEALER } from "@/lib/mockData";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Toplam Sipariş (YTD)</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">1.248</div>
            <p className="text-xs text-muted-foreground">+12% geçen aydan itibaren</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Güncel Bakiye</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-destructive">
               {MOCK_DEALER.currency} {MOCK_DEALER.balance.toLocaleString('tr-TR')}
            </div>
            <p className="text-xs text-muted-foreground">15 gün içinde ödenmeli</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktif İndirim Grubu</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading">Grup {MOCK_DEALER.group}</div>
            <p className="text-xs text-muted-foreground">Standart Bayi Tarifeleri</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Beklemede Olanlar</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">3</div>
            <p className="text-xs text-muted-foreground">Özel sipariş talepleri</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Orders */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Son Siparişler</CardTitle>
              <CardDescription>3 aktif siparişiniz transit halindedir.</CardDescription>
            </div>
            <Link href="/orders">
              <Button variant="ghost" size="sm" className="gap-1 text-primary">Tüm Siparişler <ArrowRight className="h-4 w-4"/></Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "SIP-2024-001", date: "24 Ekim 2024", amount: "1.240,00 ₺", status: "Kargo'da", items: 12 },
                { id: "SIP-2024-002", date: "20 Ekim 2024", amount: "5.320,50 ₺", status: "İşleniyor", items: 45 },
                { id: "SIP-2024-003", date: "18 Ekim 2024", amount: "890,00 ₺", status: "Teslim Edildi", items: 5 },
              ].map((order, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50">
                   <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                        <Package className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-mono font-medium text-sm">{order.id}</p>
                        <p className="text-xs text-muted-foreground">{order.items} ürün • {order.date}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="font-mono font-bold text-sm">{order.amount}</p>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        order.status === "Teslim Edildi" ? "bg-green-100 text-green-700" :
                        order.status === "Kargo'da" ? "bg-blue-100 text-blue-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        {order.status}
                      </span>
                   </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card className="shadow-sm bg-sidebar text-sidebar-foreground border-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Duyurular
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-white/5 rounded border border-white/10">
              <h4 className="font-bold text-sm mb-1 text-primary">Fiyat Güncellemesi</h4>
              <p className="text-xs text-sidebar-foreground/70">
                1 Kasım'dan itibaren SKF ürün hatlarında hammadde maliyetleri sebebiyle %2 fiyat artışı yapılacaktır.
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded border border-white/10">
              <h4 className="font-bold text-sm mb-1 text-green-400">Sistem Bakımı</h4>
              <p className="text-xs text-sidebar-foreground/70">
                Bu Pazar saat 02:00-04:00 arası planlı bakım çalışmaları yapılacaktır.
              </p>
            </div>
            
            <div className="pt-4 mt-auto">
               <Link href="/products">
                 <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                   Yeni Sipariş Oluştur
                 </Button>
               </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
