import { useEffect } from 'react';

// TODO(env): set these once the client provides real IDs — each script only loads if its var is set.
const GA4_ID = import.meta.env.VITE_GA4_ID || '';
const GTM_ID = import.meta.env.VITE_GTM_ID || '';
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '';

// ponytail: three independent no-ops until env vars land — nothing to configure, nothing to break.
export function Analytics() {
  useEffect(() => {
    const scripts: HTMLElement[] = [];

    if (GA4_ID) {
      const s1 = document.createElement('script');
      s1.async = true;
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
      document.head.appendChild(s1);
      const s2 = document.createElement('script');
      s2.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`;
      document.head.appendChild(s2);
      scripts.push(s1, s2);
    }

    if (GTM_ID) {
      const s = document.createElement('script');
      s.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;
      document.head.appendChild(s);
      scripts.push(s);
    }

    if (META_PIXEL_ID) {
      const s = document.createElement('script');
      s.textContent = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`;
      document.head.appendChild(s);
      scripts.push(s);
    }

    return () => scripts.forEach((s) => s.remove());
  }, []);

  return null;
}
