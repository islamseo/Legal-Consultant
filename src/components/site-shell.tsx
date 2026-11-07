import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, MapPin, Phone, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { internationalPhone, phoneNumber } from "@/lib/site-content";

const navigation = [
  { to: "/", title: "الرئيسية" },
  { to: "/services", title: "خدماتنا" },
  { to: "/about", title: "من نحن" },
  { to: "/blog", title: "المدونة" },
  { to: "/legal-consultation", title: "استشارة قانونية" },
  { to: "/contact", title: "تواصل معنا" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="الصفحة الرئيسية">
          <span className="flex size-11 shrink-0 items-center justify-center border border-legal-gold text-legal-gold">
            <Scale aria-hidden="true" className="size-6" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-bold text-foreground sm:text-base">مكتب المحاماة</span>
            <span className="mt-0.5 block text-xs text-muted-foreground">محاماة واستشارات قانونية</span>
          </span>
        </Link>

        <Button asChild size="sm" className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
          <a href={`tel:+${internationalPhone}`} aria-label={`اتصل بنا ${phoneNumber}`}>
            <Phone aria-hidden="true" />
            <span className="hidden sm:inline">اتصل بنا</span>
          </a>
        </Button>
      </div>

      <nav aria-label="التنقل الرئيسي" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-border px-4 py-3 text-xs sm:gap-x-8 sm:px-8 sm:text-sm lg:gap-x-10">
        {navigation.map(({ to, title }) => (
          <Link
            key={to}
            to={to}
            activeProps={{ className: "text-primary" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            activeOptions={{ exact: true }}
            className="shrink-0 whitespace-nowrap font-medium transition-colors"
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-legal-line bg-legal-ink text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
        <div>
          <div className="flex items-center gap-3">
            <Scale aria-hidden="true" className="size-5 text-legal-gold" />
            <span className="font-semibold">مكتب المحاماة والاستشارات القانونية</span>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/65">مصر الجديدة · القاهرة</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/75">
          <a href={`tel:+${internationalPhone}`} dir="ltr" className="inline-flex items-center gap-2 transition-colors hover:text-legal-gold-light">
            <Phone aria-hidden="true" className="size-4" />
            {phoneNumber}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-4" />
            مصر الجديدة، القاهرة
          </span>
          <Link to="/legal-consultation" className="inline-flex items-center gap-1 transition-colors hover:text-legal-gold-light">
            اطلب استشارة
            <ArrowUpLeft aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}