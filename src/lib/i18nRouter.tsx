import { forwardRef } from 'react';
import {
  Link as RouterLink,
  useNavigate as useRouterNavigate,
  type LinkProps,
  type NavigateOptions,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ponytail: one place that knows about the /en prefix, instead of every
// navigate()/<Link to> call site across the app having to think about locale.
export function localizePath(to: string, lang: string): string {
  if (lang !== 'en') return to;
  if (!to.startsWith('/') || to.startsWith('/en')) return to; // relative, hash, or already localized
  return to === '/' ? '/en' : `/en${to}`;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, ...rest }, ref) {
  const { i18n } = useTranslation();
  const target = typeof to === 'string' ? localizePath(to, i18n.language) : to;
  return <RouterLink ref={ref} to={target} {...rest} />;
});

export function useNavigate() {
  const navigate = useRouterNavigate();
  const { i18n } = useTranslation();
  return (to: string, options?: NavigateOptions) => navigate(localizePath(to, i18n.language), options);
}
