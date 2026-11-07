import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft, BookOpenText } from "lucide-react";
import { SectionIntro } from "@/components/section-intro";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { blogArticles } from "@/lib/site-content";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "المدونة القانونية | إرشادات قانونية مبسطة" },
      { name: "description", content: "مقالات وإرشادات قانونية عامة من مكتب المحاماة في مصر الجديدة." },
      { property: "og:title", content: "المدونة القانونية | مكتب المحاماة" },
      { property: "og:description", content: "مقالات عامة عن العقود والأعمال والاستعداد للاستشارات القانونية." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <SectionIntro eyebrow="المدونة القانونية" title="معرفة قانونية أقرب وأوضح" description="إرشادات عامة تساعدك على الاستعداد لأسئلتك وفهم بعض الخطوات العملية. لا تغني المقالات عن استشارة قانونية تناسب تفاصيل كل حالة." actionText="استشر المكتب" actionTo="/legal-consultation" />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map(({ category, title, description }, index) => (
            <article key={title} className="flex min-h-64 flex-col border-t border-border py-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary">{category}</span>
                <span className="text-muted-foreground" dir="ltr">0{index + 1}</span>
              </div>
              <BookOpenText aria-hidden="true" className="mt-8 size-6 text-primary" />
              <h2 className="mt-5 text-xl leading-relaxed font-semibold">{title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{description}</p>
              <Link to="/legal-consultation" className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
                ناقش استفسارك
                <ArrowUpLeft aria-hidden="true" className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}