import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { SectionIntro } from "@/components/section-intro";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { internationalPhone, services } from "@/lib/site-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "الخدمات القانونية | محاماة في مصر الجديدة" },
      { name: "description", content: "تعرّف على مجالات الخدمات القانونية والاستشارات التي يقدمها مكتب المحاماة في مصر الجديدة." },
      { property: "og:title", content: "الخدمات القانونية | مكتب المحاماة" },
      { property: "og:description", content: "مجالات المحاماة والاستشارات القانونية في مصر الجديدة، القاهرة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <SectionIntro eyebrow="خدماتنا" title="خدمات قانونية لمواقف مختلفة" description="تعرّف على مجالات الدعم القانوني، وتواصل معنا لمناقشة تفاصيل موضوعك وتحديد نوع المساعدة المناسب." actionText="اطلب استشارة" actionTo="/legal-consultation" />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, number, title, description }) => (
            <article key={number} className="group border-t border-border py-7 transition-colors hover:border-primary sm:py-8">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-accent">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-xs text-muted-foreground" dir="ltr">{number} / 06</span>
              </div>
              <h2 className="mt-6 text-xl font-semibold">{title}</h2>
              <p className="mt-3 min-h-14 text-sm leading-7 text-muted-foreground">{description}</p>
              <Link to="/legal-consultation" className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
                اطلب استشارة عن الخدمة
                <ArrowUpLeft aria-hidden="true" className="size-4" />
              </Link>
            </article>
          ))}
        </div>
        <a href={`https://wa.me/${internationalPhone}`} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 border border-border px-5 py-3 text-sm transition-colors hover:border-primary hover:text-primary">
          تواصل مباشرة عبر واتساب
          <ArrowUpLeft aria-hidden="true" className="size-4" />
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}