import { getPublishedContent } from "@/lib/cms.functions";
import { contentHead } from "@/lib/cms-defaults";
import { useSiteContent, siteView } from "@/lib/cms-context";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft, BookOpenText } from "lucide-react";
import { SectionIntro } from "@/components/section-intro";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const Route = createFileRoute("/blog")({
  loader: () => getPublishedContent(),
  head: ({ loaderData }) => contentHead(loaderData, "/blog"),
  component: BlogPage,
});

function BlogPage() {
  const content = useSiteContent();
  const { services, officePrinciples, blogArticles, phoneNumber, internationalPhone } = siteView(content);
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <SectionIntro eyebrow={content.text["blog_1"]} title={content.text["blog_2"]} description={content.text["blog_3"]} actionText={content.text["blog_4"]} actionTo="/legal-consultation" />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.filter(a => a.published).map(({ id, image, category, title, description }, index) => (
            <article key={title} className="flex min-h-64 flex-col border-t border-border py-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary">{category}</span>
                <span className="text-muted-foreground" dir="ltr">0{index + 1}</span>
              </div>
              {image ? <img src={image} alt={title} className="mt-5 aspect-video w-full object-cover" /> : <BookOpenText aria-hidden="true" className="mt-8 size-6 text-primary" />}
              <h2 className="mt-5 text-xl leading-relaxed font-semibold">{title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{description}</p>
              <Link to="/blog/$id" params={{ id }} className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
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