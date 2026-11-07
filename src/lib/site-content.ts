import {
  BriefcaseBusiness,
  Building2,
  FileText,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";

export const phoneNumber = "01002477508";
export const internationalPhone = "201002477508";

export const whatsappGreeting = "مرحبًا، أرغب في الاستفسار عن خدمات مكتب المحاماة.";

export function whatsappHref(message: string = whatsappGreeting) {
  return `https://wa.me/${internationalPhone}?text=${encodeURIComponent(message)}`;
}

export const services = [
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
] as const;

export const blogArticles = [
  {
    category: "العقود",
    title: "ما الذي ينبغي مراجعته قبل توقيع العقد؟",
    description:
      "ابدأ بتحديد أطراف العقد والتزامات كل طرف، وتأكد من فهم الشروط والمواعيد قبل التوقيع.",
  },
  {
    category: "الشركات والأعمال",
    title: "تنظيم التعاملات التجارية يبدأ بوثائق واضحة",
    description:
      "التوثيق الجيد للتفاهمات يساعد أصحاب الأعمال على متابعة الالتزامات والرجوع إلى التفاصيل عند الحاجة.",
  },
  {
    category: "إرشادات عامة",
    title: "كيف تستعد لمناقشة استفسارك القانوني؟",
    description:
      "دوّن الوقائع والتواريخ، وجهّز المستندات ذات الصلة، واكتب الأسئلة التي تريد مناقشتها.",
  },
] as const;

export const officePrinciples = [
  {
    number: "01",
    title: "لماذا نحن",
    description:
      "نحرص على الاستماع إلى تفاصيل الموضوع وشرح الخيارات القانونية بلغة واضحة، مع متابعة منظمة لكل خطوة.",
  },
  {
    number: "02",
    title: "رؤيتنا",
    description:
      "أن يكون الوصول إلى الفهم القانوني والمشورة المناسبة خطوة واضحة وميسرة لكل من يتعامل مع المكتب.",
  },
  {
    number: "03",
    title: "هدفنا",
    description:
      "تقديم دعم قانوني عملي يساعد العميل على فهم موقفه واتخاذ قراراته على بينة.",
  },
  {
    number: "04",
    title: "رسالتنا",
    description:
      "التعامل باهتمام ومهنية، وتقديم توضيح قانوني مسؤول يراعي احتياج كل حالة.",
  },
] as const;