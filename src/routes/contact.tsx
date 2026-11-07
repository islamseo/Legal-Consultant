import { getPublishedContent } from "@/lib/cms.functions";
import { contentHead } from "@/lib/cms-defaults";
import { useSiteContent, siteView } from "@/lib/cms-context";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpLeft, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionIntro } from "@/components/section-intro";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  loader: () => getPublishedContent(),
  head: ({ loaderData }) => contentHead(loaderData, "/contact"),
  component: ContactPage,
});

function ContactPage() {
  const content = useSiteContent();
  const { services, officePrinciples, blogArticles, phoneNumber, internationalPhone } = siteView(content);
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <SectionIntro eyebrow={content.text["contact_10"]} title={content.text["contact_11"]} description={content.text["contact_12"]} actionText={content.text["contact_13"]} actionTo="/legal-consultation" />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-12">
        <div>
          <p className="mb-3 text-sm font-semibold text-primary">{content.text["contact_1"]}</p>
          <h2 className="text-2xl leading-relaxed font-bold">{content.text["contact_2"]}</h2>
          <div className="mt-7 border-y border-border">
            <a href={`tel:+${internationalPhone}`} className="flex items-center justify-between gap-5 border-b border-border py-5 transition-colors hover:text-primary">
              <span className="flex items-center gap-3"><Phone aria-hidden="true" className="size-5 text-primary" />{content.text["contact_3"]}</span>
              <span dir="ltr" className="font-semibold">{phoneNumber}</span>
            </a>
            <a href={`https://wa.me/${internationalPhone}`} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-5 border-b border-border py-5 transition-colors hover:text-primary">
              <span className="flex items-center gap-3"><MessageCircle aria-hidden="true" className="size-5 text-primary" />{content.text["contact_4"]}</span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold">{content.text["contact_5"]}<ArrowUpLeft aria-hidden="true" className="size-4" /></span>
            </a>
            <div className="flex items-start gap-3 py-5">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold">{content.text["contact_6"]}</p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{content.settings.address}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted p-6 sm:p-8">
          <h2 className="text-xl font-semibold">{content.text["contact_8"]}</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{content.text["contact_9"]}</p>
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