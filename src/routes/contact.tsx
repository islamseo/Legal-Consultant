import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpLeft, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionIntro } from "@/components/section-intro";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { internationalPhone, phoneNumber } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | مكتب محاماة في مصر الجديدة" },
      { name: "description", content: "تواصل مع مكتب المحاماة في مصر الجديدة عبر الهاتف أو واتساب لطلب موعد أو استفسار قانوني." },
      { property: "og:title", content: "تواصل معنا | مكتب المحاماة" },
      { property: "og:description", content: "اتصل أو راسل مكتب المحاماة في مصر الجديدة، القاهرة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <SectionIntro eyebrow="تواصل معنا" title="يسعدنا استقبال استفسارك" description="اتصل بنا أو راسلنا لمناقشة احتياجك القانوني وتحديد وسيلة التواصل المناسبة." actionText="اطلب استشارة" actionTo="/legal-consultation" />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-12">
        <div>
          <p className="mb-3 text-sm font-semibold text-primary">بيانات المكتب</p>
          <h2 className="text-2xl leading-relaxed font-bold">تواصل بالطريقة المناسبة لك</h2>
          <div className="mt-7 border-y border-border">
            <a href={`tel:+${internationalPhone}`} className="flex items-center justify-between gap-5 border-b border-border py-5 transition-colors hover:text-primary">
              <span className="flex items-center gap-3"><Phone aria-hidden="true" className="size-5 text-primary" /> رقم الهاتف</span>
              <span dir="ltr" className="font-semibold">{phoneNumber}</span>
            </a>
            <a href={`https://wa.me/${internationalPhone}`} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-5 border-b border-border py-5 transition-colors hover:text-primary">
              <span className="flex items-center gap-3"><MessageCircle aria-hidden="true" className="size-5 text-primary" /> واتساب</span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold">إرسال رسالة <ArrowUpLeft aria-hidden="true" className="size-4" /></span>
            </a>
            <div className="flex items-start gap-3 py-5">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold">عنوان المكتب</p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">مصر الجديدة، القاهرة، مصر</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted p-6 sm:p-8">
          <h2 className="text-xl font-semibold">ابدأ بالتواصل</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">لحجز استشارة، أرسل رسالة قصيرة تتضمن وسيلة التواصل المناسبة وملخصًا أوليًا لموضوعك.</p>
          <Button asChild size="lg" className="mt-6 h-12 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={`https://wa.me/${internationalPhone}`} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              تواصل عبر واتساب
            </a>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}