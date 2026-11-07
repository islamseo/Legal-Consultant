import raw from './cms-default-content.json';
import office from '@/assets/law-office-heliopolis.jpg';
import consultation from '@/assets/legal-consultation-room.jpg';
import library from '@/assets/legal-library.jpg';
export type SiteContent = typeof raw;
export const defaultContent: SiteContent = raw;
export function resolveImage(image: string) { return ({office, consultation, library} as Record<string,string>)[image] ?? image; }
export function contentHead(content: SiteContent | undefined, path: string) {
  const seo = (content ?? defaultContent).seo[path as keyof typeof raw.seo] ?? raw.seo['/'];
  const image = path === '/' ? content?.slides[0]?.image : undefined;
  return { meta: [{title:seo.title},{name:'description',content:seo.description},{property:'og:title',content:seo.title},{property:'og:description',content:seo.description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}, ...(image?.startsWith('https://') ? [{property:'og:image',content:image},{name:'twitter:image',content:image}] : [])] };
}