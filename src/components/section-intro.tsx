import { useSiteContent, siteView } from "@/lib/cms-context";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  actionText?: string;
  actionTo?: "/services" | "/about" | "/contact" | "/blog" | "/legal-consultation";
}

export function SectionIntro({ eyebrow, title, description, actionText, actionTo }: SectionIntroProps) {
  const content = useSiteContent();
  return (
    <section className="overflow-hidden bg-legal-ink text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mb-6 inline-flex items-center gap-2 border border-legal-gold/50 px-3 py-2 text-sm text-legal-gold-light">
          <MapPin aria-hidden="true" className="size-4" />
          مصر الجديدة · القاهرة
        </div>
        <p className="mb-3 text-sm font-semibold text-legal-gold-light">{eyebrow}</p>
        <h1 className="max-w-3xl text-3xl leading-relaxed font-bold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/75 sm:text-lg">{description}</p>
        {actionText && actionTo ? (
          <Button asChild size="lg" className="mt-8 h-12 gap-2 bg-legal-gold text-legal-ink hover:bg-legal-gold-light">
            <Link to={actionTo}>
              {actionText}
              <ArrowLeft aria-hidden="true" />
            </Link>
          </Button>
        ) : null}
      </div>
    </section>
  );
}