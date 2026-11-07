import { createContext, useContext, type ReactNode } from 'react';
import { useMatches } from '@tanstack/react-router';
import { defaultContent, type SiteContent } from './cms-defaults';
import { services as originalServices } from './site-content';
const ContentContext=createContext<SiteContent | null>(null);
export function ContentProvider({children}:{children:ReactNode}){
  const matches=useMatches();
  const match=[...matches].reverse().find(m=>m.loaderData && typeof m.loaderData==='object' && 'settings' in m.loaderData);
  return <ContentContext.Provider value={match?.loaderData as SiteContent ?? defaultContent}>{children}</ContentContext.Provider>;
}
export function useSiteContent(){return useContext(ContentContext) ?? defaultContent;}
export function siteView(content:SiteContent){return {services:content.services.map((s,i)=>({...s,icon:originalServices[i]?.icon??originalServices[0].icon})),officePrinciples:content.principles,blogArticles:content.articles,phoneNumber:content.settings.phone,internationalPhone:content.settings.phone.startsWith('0')?'2'+content.settings.phone:content.settings.phone.replace(/\D/g,'')};}