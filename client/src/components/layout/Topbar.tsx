import { Phone, Mail, MapPin } from "lucide-react";

export function Topbar() {
  return (
    <div className="bg-sidebar text-white py-2 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+905010624041" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              +90 501 062 40 41
            </a>
            <a href="mailto:info@rulmak.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors hidden md:flex">
              <Mail className="h-4 w-4" />
              info@rulmak.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="h-4 w-4" />
            <span>İstanbul, Türkiye</span>
          </div>
        </div>
      </div>
    </div>
  );
}
