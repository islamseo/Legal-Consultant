import { getPublishedContent } from "@/lib/cms.functions";
import { contentHead } from "@/lib/cms-defaults";
import { resolveImage } from "@/lib/cms-defaults";
import { useSiteContent, siteView } from "@/lib/cms-context";
import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpLeft, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  loader: () => getPublishedContent(),
  head: ({ loaderData }) => contentHead(loaderData, "/"),
  component: Index,
});

function Index() {
  const content = useSiteContent();
  const { services, officePrinciples, blogArticles, phoneNumber, internationalPhone } = siteView(content);
  const slides = content.slides.map(slide => ({ ...slide, image: resolveImage(slide.image) }));
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[activeSlide] ?? slides[0];
  if (!currentSlide) return null;

  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section aria-roledescription={content.text["index_9"]} aria-label="تعريف بخدمات المكتب" className="mx-auto max-w-7xl px-4 pt-5 sm:px-8 sm:pt-8 lg:px-12">
        <div className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-legal-ink sm:min-h-[560px] lg:min-h-[620px]">
          <img
            key={currentSlide.alt}
            src={currentSlide.image}
            alt={currentSlide.alt}
            width={1536}
            height={1024}
            fetchPriority={activeSlide === 0 ? "high" : "auto"}
            className="absolute inset-0 -z-20 size-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-l from-legal-ink/95 via-legal-ink/75 to-legal-ink/10" />

          <div key={currentSlide.title} className="max-w-3xl px-6 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-6 inline-flex items-center gap-2 border border-legal-gold/50 px-3 py-2 text-sm text-legal-gold-light">
              <BadgeCheck aria-hidden="true" className="size-4" />
              {currentSlide.eyebrow}
            </div>
            <h1 className="max-w-2xl text-3xl leading-[1.45] font-bold text-primary-foreground sm:text-5xl sm:leading-[1.35] lg:text-6xl">
              {currentSlide.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-primary-foreground/80 sm:text-lg">
              {currentSlide.description}
            </p>
            <Button asChild size="lg" className="mt-8 h-12 gap-2 bg-legal-gold text-legal-ink hover:bg-legal-gold-light">
              <Link to={currentSlide.destination}>
                {currentSlide.action}
                <ArrowLeft aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="absolute bottom-5 left-5 flex items-center gap-2 sm:bottom-8 sm:left-8" dir="ltr">
            <Button type="button" variant="outline" size="icon" title={content.text["index_10"]} aria-label="الشريحة السابقة" onClick={() => setActiveSlide((activeSlide + slides.length - 1) % slides.length)} className="border-primary-foreground/35 bg-legal-ink/40 text-primary-foreground hover:bg-legal-ink/75 hover:text-primary-foreground">
              <ChevronLeft aria-hidden="true" />
            </Button>
            <span className="min-w-11 text-center text-sm text-primary-foreground" aria-live="polite">0{activeSlide + 1} / 0{slides.length}</span>
            <Button type="button" variant="outline" size="icon" title={content.text["index_11"]} aria-label="الشريحة التالية" onClick={() => setActiveSlide((activeSlide + 1) % slides.length)} className="border-primary-foreground/35 bg-legal-ink/40 text-primary-foreground hover:bg-legal-ink/75 hover:text-primary-foreground">
              <ChevronRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold text-primary">{content.text["index_1"]}</p>
            <h2 className="max-w-2xl text-3xl leading-relaxed font-bold sm:text-4xl">{content.text["index_2"]}</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary">
            عرض جميع الخدمات
            <ArrowUpLeft aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map(({ icon: Icon, number, title, description }) => (
            <article key={number} className="border-t border-border py-6">
              <Icon aria-hidden="true" className="size-5 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 py-14 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16 lg:px-12">
          <div>
            <p className="mb-3 text-sm font-semibold text-primary">{content.text["index_3"]}</p>
            <h2 className="text-3xl leading-relaxed font-bold">{content.text["index_4"]}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{content.text["index_5"]}</p>
            <Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary">
              تعرف على المكتب
              <ArrowUpLeft aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {officePrinciples.map(({ number, title, description }) => (
              <article key={number} className="border-t border-border py-5">
                <span className="text-xs text-muted-foreground" dir="ltr">{number}</span>
                <h3 className="mt-2 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-12 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <div>
          <h2 className="text-2xl font-bold">{content.text["index_6"]}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{content.text["index_7"]}</p>
        </div>
        <Button asChild size="lg" className="h-12 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/legal-consultation">{content.text["index_8"]}<ArrowLeft aria-hidden="true" /></Link>
        </Button>
      </section>

      <SiteFooter />
    </main>
  );
}