import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';
import { defaultContent, type SiteContent } from './cms-defaults';

export const getPublishedContent = createServerFn({method:'GET'}).handler(async () => {
  const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
  const url = process.env['SUPABASE_URL'];
  if (!key || !url) throw new Error('Content configuration unavailable');
  const client = createClient<Database>(url,key,{auth:{persistSession:false,autoRefreshToken:false},global:{fetch:(input,init)=>{const h=new Headers(init?.headers); if(key.startsWith('sb_') && h.get('Authorization')===`Bearer ${key}`) h.delete('Authorization');h.set('apikey',key);return fetch(input,{...init,headers:h});}}});
  const {data,error}=await client.from('site_documents').select('content').eq('id','published').maybeSingle();
  if(error) throw error;
  const content = data ? data.content as unknown as SiteContent : defaultContent;
  // Private uploads are exposed only when referenced by published content.
  const paths = [...content.slides.map(s=>s.image), ...content.articles.map(a=>a.image)].filter(p=>p.startsWith('media:'));
  if(paths.length){
    const {supabaseAdmin}=await import('@/integrations/supabase/client.server');
    const {data:links,error:linkError}=await supabaseAdmin.storage.from('site-media').createSignedUrls(paths.map(p=>p.slice(6)),3600);
    if(linkError) throw linkError;
    const urls=new Map(links?.map((link,i)=>[paths[i],link.signedUrl?.replace(process.env['SUPABASE_URL'] ?? '', import.meta.env['VITE_SUPABASE_URL'])]));
    return {...content,slides:content.slides.map(s=>({...s,image:urls.get(s.image)??s.image})),articles:content.articles.filter(a=>a.published).map(a=>({...a,image:urls.get(a.image)??a.image}))};
  }
  return {...content,articles:content.articles.filter(a=>a.published)};
});