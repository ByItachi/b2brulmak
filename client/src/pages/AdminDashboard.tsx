import { Link } from "wouter";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Users, Package, ShoppingCart, DollarSign, Settings, LogOut } from "lucide-react";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground">Admin Paneli</h2>
            <p className="text-muted-foreground">Sistem yönetimi ve raporlama</p>
          </div>
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <LogOut className="h-4 w-4" /> Çıkış Yap
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Toplam Bayi</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-mono">1.248</div>
              <p className="text-xs text-muted-foreground">+8% bu aydan itibaren</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stok Ürünü</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-mono">50.245</div>
              <p className="text-xs text-muted-foreground">9 marka, 12 ülke</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aylık Satışlar</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-mono">₺2.4M</div>
              <p className="text-xs text-muted-foreground">+15% geçen aydan</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Beklemede</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-mono">23</div>
              <p className="text-xs text-muted-foreground">Bayi onayı/sipariş</p>
            </CardContent>
          </Card>
        </div>

        {/* Management Sections */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle>Bayi Yönetimi</CardTitle>
              </div>
              <CardDescription>Bayi hesapları ve izinleri yönet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">1.248 aktif bayi hesabı</p>
                <Button variant="outline" size="sm" className="w-full">Yönet</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Package className="h-5 w-5" />
                </div>
                <CardTitle>Ürün Kataloğu</CardTitle>
              </div>
              <CardDescription>Ürünleri ve stokları düzenle</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">50.245 ürün stokta</p>
                <Button variant="outline" size="sm" className="w-full">Yönet</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <DollarSign className="h-5 w-5" />
                </div>
                <CardTitle>İndirim Grupları</CardTitle>
              </div>
              <CardDescription>Bayi grup fiyatlandırmasını ayarla</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">3 grup: A (15%), B (10%), C (5%)</p>
                <Button variant="outline" size="sm" className="w-full">Düzenle</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <CardTitle>Siparişler</CardTitle>
              </div>
              <CardDescription>Tüm siparişleri görüntüle ve onayla</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">156 işlemi sipariş</p>
                <Button variant="outline" size="sm" className="w-full">Gözat</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <CardTitle>Raporlar</CardTitle>
              </div>
              <CardDescription>Satış ve analiz raporlarını görüntüle</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Gerçek zamanlı veriler</p>
                <Button variant="outline" size="sm" className="w-full">Rapor Al</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Settings className="h-5 w-5" />
                </div>
                <CardTitle>Sistem Ayarları</CardTitle>
              </div>
              <CardDescription>Genel platform ayarları</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Renkler, e-postalar, vb.</p>
                <Button variant="outline" size="sm" className="w-full">Ayarla</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info Box */}
        <Card className="bg-blue-50 border-blue-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <AlertCircle className="h-5 w-5" />
              Admin Paneli Bilgisi
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-800">
            <p className="mb-3">Bu B2B e-ticaret sistemi, işletmelerinizin tüm yönetim ihtiyaçlarını karşılamak için tasarlanmıştır.</p>
            <ul className="space-y-2 text-sm">
              <li>• 50.000+ ürün ile büyük ölçekli envanter yönetimi</li>
              <li>• Grup bazlı dinamik fiyatlandırma ve indirim yönetimi</li>
              <li>• Çok etiket ve stok kodu desteği</li>
              <li>• ERP entegrasyonu için API hazır</li>
              <li>• Gerçek zamanlı raporlama ve analitik</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
