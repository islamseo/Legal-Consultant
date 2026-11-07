import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, CircleCheck, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionIntro } from "@/components/section-intro";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { internationalPhone, services } from "@/lib/site-content";

export const Route = createFileRoute("/legal-consultation")({
  head: () => ({
    meta: [
      { title: "طلب استشارة قانونية | مصر الجديدة" },
      { name: "description", content: "أرسل طلب استشارة قانونية إلى مكتب المحاماة في مصر الجديدة عبر نموذج آمن يفتح رسالة واتساب لإرسالها بنفسك." },
      { property: "og:title", content: "طلب استشارة قانونية | مكتب المحاماة" },
      { property: "og:description", content: "أرسل تفاصيل استفسارك لمكتب المحاماة عبر واتساب." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/legal-consultation" }],
  }),
  component: LegalConsultationPage,
});

function LegalConsultationPage() {
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();
    const normalizedPhone = phone.replace(/[\s()-]/g, "");

    if (!name || !/^\+?\d{8,15}$/.test(normalizedPhone) || !service || details.length < 10) {
      setError("راجع البيانات المطلوبة ورقم الهاتف، ثم أعد المحاولة.");
      return;
    }

    const message = [
      "طلب استشارة قانونية",
      `الاسم: ${name}`,
      `رقم الهاتف: ${phone}`,
      `نوع الاستشارة: ${service}`,
      `ملخص الموضوع: ${details}`,
    ].join("\n");

    setError("");
    window.open(`https://wa.me/${internationalPhone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <SectionIntro eyebrow="استشارة قانونية" title="أخبرنا بما تحتاج إلى مناقشته" description="املأ بيانات التواصل وملخصًا موجزًا لموضوعك؛ سنجهز رسالة واتساب لتراجعها وترسلها بنفسك." />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.72fr] lg:px-12">
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="consultation-name">الاسم</Label>
              <Input id="consultation-name" name="name" autoComplete="name" placeholder="الاسم الكامل" required maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="consultation-phone">رقم الهاتف</Label>
              <Input id="consultation-phone" name="phone" type="tel" autoComplete="tel" placeholder="01xxxxxxxxx" required maxLength={20} dir="ltr" className="text-left" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="consultation-service">نوع الاستشارة</Label>
            <select id="consultation-service" name="service" required defaultValue="" className="flex h-11 w-full border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <option value="" disabled>اختر الخدمة</option>
              {services.map(({ title }) => <option key={title} value={title}>{title}</option>)}
              <option value="استفسار آخر">استفسار آخر</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="consultation-details">ملخص الموضوع</Label>
            <Textarea id="consultation-details" name="details" placeholder="اكتب ملخصًا موجزًا عن استفسارك" required minLength={10} maxLength={1500} className="min-h-36" />
          </div>
          {error ? <p role="alert" className="text-sm text-destructive">{error}</p> : null}
          <Button type="submit" size="lg" className="h-12 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <MessageCircle aria-hidden="true" />
            متابعة عبر واتساب
            <ArrowLeft aria-hidden="true" />
          </Button>
          <p className="text-xs leading-6 text-muted-foreground">تُفتح رسالة واتساب لمراجعتها وإرسالها يدويًا؛ لا تُحفظ البيانات في هذا الموقع.</p>
        </form>

        <aside className="border-t border-border py-6 lg:border-t-0 lg:border-r lg:py-2 lg:pr-8">
          <div className="flex items-center gap-3 text-sm font-semibold text-primary">
            <CircleCheck aria-hidden="true" className="size-5" />
            نراجع طلبك بعناية
          </div>
          <h2 className="mt-5 text-2xl leading-relaxed font-bold">تواصل مباشر مع المكتب</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">إذا رغبت في الاستفسار هاتفيًا، يمكنك الاتصال مباشرة خلال الأوقات المناسبة لك.</p>
          <a href="tel:+201002477508" dir="ltr" className="mt-6 inline-flex items-center gap-3 border border-border px-4 py-3 font-semibold transition-colors hover:border-primary hover:text-primary">
            <Phone aria-hidden="true" className="size-4" />
            01002477508
          </a>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}