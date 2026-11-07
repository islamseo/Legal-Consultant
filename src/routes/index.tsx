import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownLeft, ArrowLeft, ArrowUpLeft, BadgeCheck, BriefcaseBusiness, Building2, FileText, Landmark, MapPin, MessageCircle, Phone, Scale, ShieldCheck } from "lucide-react";
import officeImage from "@/assets/law-office-heliopolis.jpg";
import { Button } from "@/components/ui/button";

const phoneNumber = "01002477508";
const internationalPhone = "201002477508";

const services = [
  {
    icon: BriefcaseBusiness,
    number: "01",
    title: "القضايا المدنية",
    description: "متابعة النزاعات المدنية والمطالبات والحقوق أمام الجهات المختصة.",
  },
  {
    icon: Building2,
    number: "02",
    title: "الشركات والأعمال",
    description: "استشارات قانونية للأعمال ومراجعة الإجراءات والعلاقات التجارية.",
  },
  {
    icon: FileText,
    number: "03",
    title: "صياغة العقود",
    description: "إعداد العقود ومراجعتها بصياغة واضحة تحفظ الحقوق والالتزامات.",
  },
  {
    icon: Landmark,
    number: "04",
    title: "القضايا العمالية",
    description: "استشارات في علاقات العمل والنزاعات والحقوق العمالية.",
  },
  {
    icon: Scale,
    number: "05",
    title: "الأحوال الشخصية",
    description: "متابعة مسائل الأسرة والأحوال الشخصية بسرية واهتمام.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "استشارات قانونية",
    description: "رأي قانوني أولي وخطوات واضحة لفهم الموقف قبل اتخاذ القرار.",
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
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="الصفحة الرئيسية">
            <span className="flex size-11 shrink-0 items-center justify-center border border-legal-gold text-legal-gold">
              <Scale aria-hidden="true" className="size-6" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold text-foreground sm:text-base">مكتب المحاماة</span>
              <span className="mt-0.5 block text-xs text-muted-foreground">محاماة واستشارات قانونية</span>
            </span>
          </a>

          <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-8 text-sm md:flex">
            <a className="transition-colors hover:text-primary" href="#home">الرئيسية</a>
            <a className="transition-colors hover:text-primary" href="#services">خدماتنا</a>
            <a className="transition-colors hover:text-primary" href="#about">عن المكتب</a>
            <a className="transition-colors hover:text-primary" href="#contact">تواصل معنا</a>
          </nav>

          <Button asChild size="sm" className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={`tel:+${internationalPhone}`}>
              <Phone aria-hidden="true" />
              <span className="hidden sm:inline">اتصل بنا</span>
            </a>
          </Button>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-7xl px-4 pt-5 sm:px-8 sm:pt-8 lg:px-12">
        <div className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-legal-ink sm:min-h-[560px] lg:min-h-[620px]">
          <img
            src={officeImage}
            alt="مكتب محاماة أنيق في مصر الجديدة"
            width={1536}
            height={1152}
            fetchPriority="high"
            className="absolute inset-0 -z-20 size-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-l from-legal-ink/95 via-legal-ink/75 to-legal-ink/10" />

          <div className="max-w-3xl px-6 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-6 inline-flex items-center gap-2 border border-legal-gold/50 px-3 py-2 text-sm text-legal-gold-light">
              <MapPin aria-hidden="true" className="size-4" />
              <span>مصر الجديدة · القاهرة</span>
            </div>
            <h1 className="max-w-2xl text-4xl leading-[1.4] font-bold text-primary-foreground sm:text-5xl sm:leading-[1.35] lg:text-6xl">
              محاماة واستشارات قانونية <span className="text-legal-gold-light">بثقة ووضوح</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-primary-foreground/80 sm:text-lg">
              نساعدك على فهم موقفك القانوني، ومناقشة الخيارات والخطوات المناسبة لاحتياجك.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 gap-2 bg-legal-gold text-legal-ink hover:bg-legal-gold-light">
                <a href={`https://wa.me/${internationalPhone}`} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" />
                  احجز استشارتك
                  <ArrowLeft aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-primary-foreground/35 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="#services">تعرّف على خدماتنا</a>
              </Button>
            </div>
            <a href={`tel:+${internationalPhone}`} className="mt-7 inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-legal-gold-light" dir="ltr">
              <Phone aria-hidden="true" className="size-4" />
              {phoneNumber}
            </a>
          </div>

          <div className="absolute bottom-6 left-6 hidden items-center gap-3 text-xs tracking-[0.08em] text-primary-foreground/70 sm:flex lg:left-10">
            <span className="h-px w-12 bg-legal-gold" />
            <span>LEGAL COUNSEL · HELIOPOLIS</span>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold text-primary">خدماتنا القانونية</p>
            <h2 className="max-w-2xl text-3xl leading-relaxed font-bold sm:text-4xl">دعم قانوني يناسب احتياجك</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            تواصل معنا لعرض موضوعك ومناقشة نوع المساعدة القانونية الملائمة.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, number, title, description }) => (
            <article key={number} className="group border-t border-border py-7 transition-colors hover:border-primary sm:py-8">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-accent">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-xs text-muted-foreground" dir="ltr">{number} / 06</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 min-h-14 text-sm leading-7 text-muted-foreground">{description}</p>
              <a href={`https://wa.me/${internationalPhone}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary">
                استفسر عن الخدمة
                <ArrowUpLeft aria-hidden="true" className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-legal-ink text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
          <div>
            <div className="mb-5 flex items-center gap-3 text-sm font-medium text-legal-gold-light">
              <BadgeCheck aria-hidden="true" className="size-5" />
              <span>اهتمام بموقفك القانوني</span>
            </div>
            <h2 className="max-w-3xl text-3xl leading-relaxed font-bold sm:text-4xl">المعلومة الواضحة أول خطوة نحو قرار أفضل</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/75">
              نبدأ بالاستماع إلى تفاصيل موضوعك، ثم نوضح لك ما يتطلبه من متابعة أو استشارة. سرية التواصل والاهتمام بكل حالة من أساسيات عملنا.
            </p>
          </div>
          <a href="#contact" className="inline-flex min-h-14 items-center justify-center gap-3 border border-legal-gold px-6 text-sm font-semibold text-legal-gold-light transition-colors hover:bg-legal-gold hover:text-legal-ink">
            تحدث معنا عن موضوعك
            <ArrowDownLeft aria-hidden="true" className="size-4" />
          </a>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold text-primary">تواصل معنا</p>
            <h2 className="max-w-xl text-3xl leading-relaxed font-bold sm:text-4xl">ابدأ استشارتك القانونية اليوم</h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-muted-foreground">
              اتصل بنا أو أرسل رسالة لعرض استفسارك وتحديد موعد مناسب للتواصل.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={`tel:+${internationalPhone}`}>
                  <Phone aria-hidden="true" />
                  اتصل الآن
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 gap-2">
                <a href={`https://wa.me/${internationalPhone}`} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" />
                  واتساب
                </a>
              </Button>
            </div>
          </div>
          <div className="border-y border-border">
            <a href={`tel:+${internationalPhone}`} dir="ltr" className="flex items-center justify-between gap-5 border-b border-border py-5 text-left transition-colors hover:text-primary">
              <span className="flex items-center gap-3" dir="rtl"><Phone aria-hidden="true" className="size-5 text-primary" /> رقم الهاتف</span>
              <span className="font-semibold">{phoneNumber}</span>
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
      </section>

      <footer className="border-t border-legal-line bg-legal-ink text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>مكتب المحاماة والاستشارات القانونية</span>
          <span className="text-primary-foreground/60">مصر الجديدة · القاهرة</span>
        </div>
      </footer>
    </main>
  );
}