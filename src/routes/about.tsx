import { getPublishedContent } from "@/lib/cms.functions";
import { contentHead } from "@/lib/cms-defaults";
import { useSiteContent, siteView } from "@/lib/cms-context";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, Compass, Eye, Flag, HandHeart } from "lucide-react";
import { SectionIntro } from "@/components/section-intro";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const principleIcons = [Eye, Compass, Flag, HandHeart] as const;

export const Route = createFileRoute("/about")({
  loader: () => getPublishedContent(),
  head: ({ loaderData }) => contentHead(loaderData, "/about"),
  component: AboutPage,
});

function AboutPage() {
  const content = useSiteContent();
  const { services, officePrinciples, blogArticles, phoneNumber, internationalPhone } = siteView(content);
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <SectionIntro eyebrow={content.text["about_4"]} title={content.text["about_5"]} description={content.text["about_6"]} />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold text-primary">{content.text["about_1"]}</p>
            <h2 className="text-3xl leading-relaxed font-bold">{content.text["about_2"]}</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">{content.text["about_3"]}</p>
            <a href={`https://wa.me/${internationalPhone}`} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              تحدّث معنا
              <ArrowLeft aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {officePrinciples.map(({ number, title, description }, index) => {
              const Icon = principleIcons[index] ?? BadgeCheck;
              return (
                <article key={number} className="border-t border-border py-6">
                  <div className="flex items-center justify-between">
                    <Icon aria-hidden="true" className="size-5 text-primary" />
                    <span className="text-xs text-muted-foreground" dir="ltr">{number}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}