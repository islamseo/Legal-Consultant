REVOKE EXECUTE ON FUNCTION public.has_role(uuid,public.app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid,public.app_role) TO authenticated;
REVOKE EXECUTE ON FUNCTION public.assign_office_owner() FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.publish_office_content(integer) FROM anon;
