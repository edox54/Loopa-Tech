import { useEffect } from 'react';

// TODO(env): set VITE_MERCATELY_WIDGET_ID once the WhatsApp-connected widget is provisioned.
const MERCATELY_WIDGET_ID = import.meta.env.VITE_MERCATELY_WIDGET_ID || '';

// ponytail: no-op until the env var is set — nothing to render, nothing to break.
export function MercatelyChat() {
  useEffect(() => {
    if (!MERCATELY_WIDGET_ID) return;

    const script = document.createElement('script');
    script.src = 'https://widget.mercately.com/widget.js';
    script.async = true;
    script.setAttribute('data-widget-id', MERCATELY_WIDGET_ID);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
