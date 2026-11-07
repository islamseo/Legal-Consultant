import { describe,it,expect } from 'vitest';
import { defaultContent } from '@/lib/cms-defaults';
import { contentSchema } from '@/lib/cms-validation';
describe('Office CMS rules',()=>{
 it('accepts the confirmed office phone and WhatsApp number',()=>{expect(contentSchema.parse(defaultContent).settings.phone).toBe('01002477508');expect(contentSchema.parse(defaultContent).settings.whatsapp).toBe('201002477508');});
 it('requires at least one slider image',()=>{expect(contentSchema.safeParse({...defaultContent,slides:[]}).success).toBe(false);});
 it('rejects unsafe Facebook links',()=>{expect(contentSchema.safeParse({...defaultContent,settings:{...defaultContent.settings,facebook:'javascript:alert(1)'}}).success).toBe(false);});
 it('rejects unsafe Instagram links',()=>{expect(contentSchema.safeParse({...defaultContent,settings:{...defaultContent.settings,instagram:'https://example.com/'}}).success).toBe(false);});
});
