import { getPublishedContent } from "@/lib/cms.functions";
import { contentHead } from "@/lib/cms-defaults";
import { useSiteContent, siteView } from "@/lib/cms-context";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { SectionIntro } from "@/components/section-intro";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const Route = createFileRoute("/services")({
  loader: () => getPublishedContent(),
  head: ({ loaderData }) => contentHead(loaderData, "/services"),
  component: ServicesPage,
});

function ServicesPage() {
  const content = useSiteContent();
  const { services, officePrinciples, blogArticles, phoneNumber, internationalPhone } = siteView(content);
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <SectionIntro eyebrow={content.text["services_1"]} title={content.text["services_2"]} description={content.text["services_3"]} actionText={content.text["services_4"]} actionTo="/legal-consultation" />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, number, title, description }) => (
            <article key={number} className="group border-t border-border py-7 transition-colors hover:border-primary sm:py-8">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-accent">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-xs text-muted-foreground" dir="ltr">{number} / {services.length}</span>
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