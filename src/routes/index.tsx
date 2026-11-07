import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpLeft, BadgeCheck, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import officeImage from "@/assets/law-office-heliopolis.jpg";
import consultationImage from "@/assets/legal-consultation-room.jpg";
import libraryImage from "@/assets/legal-library.jpg";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { internationalPhone, officePrinciples, services } from "@/lib/site-content";

const slides = [
  {
    image: officeImage,
    alt: "مكتب محاماة في مصر الجديدة",
    eyebrow: "مكتب محاماة في مصر الجديدة",
    title: "استشارات قانونية بثقة ووضوح",
    description: "نساعدك على فهم موقفك القانوني ومناقشة الخيارات والخطوات المناسبة لاحتياجك.",
    action: "احجز استشارتك",
    destination: "/legal-consultation" as const,
  },
  {
    image: consultationImage,
    alt: "مساحة مخصصة للحديث ومناقشة الاستفسارات القانونية",
    eyebrow: "اهتمام بكل استفسار",
    title: "استمع أولًا، ثم اختر خطوتك",
    description: "نبدأ بفهم تفاصيل موضوعك، ونوضح لك ما يحتاج إلى استشارة أو متابعة قانونية.",
    action: "من نحن",
    destination: "/about" as const,
  },
  {
    image: libraryImage,
    alt: "كتب قانونية وميزان العدالة في مكتبة المكتب",
    eyebrow: "خدمات قانونية متنوعة",
    title: "دعم قانوني يناسب احتياجك",
    description: "من مراجعة العقود إلى الاستشارات، ناقش احتياجك مع مكتبنا في مصر الجديدة.",
    action: "اكتشف خدماتنا",
    destination: "/services" as const,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "محامي واستشارات قانونية في مصر الجديدة | مكتب محاماة" },
      {
        name: "description",
        content: "مكتب محاماة واستشارات قانونية في مصر الجديدة، القاهرة. تواصل مباشرة لحجز استشارة عبر الهاتف أو واتساب: 01002477508.",
      },
      { property: "og:title", content: "محامي واستشارات قانونية في مصر الجديدة" },
      {
        property: "og:description",
        content: "استشارات ومتابعة قانونية في مصر الجديدة. اتصل أو أرسل رسالة واتساب على 01002477508.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide] ?? slides[0];
  if (!currentSlide) return null;

  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section aria-roledescription="عارض شرائح" aria-label="تعريف بخدمات المكتب" className="mx-auto max-w-7xl px-4 pt-5 sm:px-8 sm:pt-8 lg:px-12">
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
            <Button type="button" variant="outline" size="icon" title="الشريحة السابقة" aria-label="الشريحة السابقة" onClick={() => setActiveSlide((activeSlide + slides.length - 1) % slides.length)} className="border-primary-foreground/35 bg-legal-ink/40 text-primary-foreground hover:bg-legal-ink/75 hover:text-primary-foreground">
              <ChevronLeft aria-hidden="true" />
            </Button>
            <span className="min-w-11 text-center text-sm text-primary-foreground" aria-live="polite">0{activeSlide + 1} / 0{slides.length}</span>
            <Button type="button" variant="outline" size="icon" title="الشريحة التالية" aria-label="الشريحة التالية" onClick={() => setActiveSlide((activeSlide + 1) % slides.length)} className="border-primary-foreground/35 bg-legal-ink/40 text-primary-foreground hover:bg-legal-ink/75 hover:text-primary-foreground">
              <ChevronRight aria-hidden="true" />
            </Button>
          </div>
          <a href={`https://wa.me/${internationalPhone}`} target="_blank" rel="noreferrer" className="absolute bottom-8 right-8 hidden items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-legal-gold-light sm:flex">
            <MessageCircle aria-hidden="true" className="size-4" />
            تواصل عبر واتساب
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold text-primary">خدماتنا القانونية</p>
            <h2 className="max-w-2xl text-3xl leading-relaxed font-bold sm:text-4xl">دعم قانوني يناسب احتياجك</h2>
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
            <p className="mb-3 text-sm font-semibold text-primary">من نحن</p>
            <h2 className="text-3xl leading-relaxed font-bold">المعلومة الواضحة أول خطوة نحو قرار أفضل</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">نهتم بفهم تفاصيل موضوعك وتوضيح الخطوات القانونية الممكنة، باهتمام وسرية في التواصل.</p>
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
          <h2 className="text-2xl font-bold">هل لديك استفسار قانوني؟</h2>
          <p className="mt-2 text-sm text-muted-foreground">تواصل معنا لمناقشة احتياجك.</p>
        </div>
        <Button asChild size="lg" className="h-12 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/legal-consultation">اطلب استشارة <ArrowLeft aria-hidden="true" /></Link>
        </Button>
      </section>

      <SiteFooter />
    </main>
  );
}