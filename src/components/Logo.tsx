import { useTranslation } from 'react-i18next';

// Logo PNGs are alpha masks, so the colour comes from theme tokens: dark ink on bone,
// original light tones on navy. The original peach artwork was ~1.3:1 on the bone background.
const mask = (src: string) => ({
  WebkitMaskImage: `url(${src})`,
  maskImage: `url(${src})`,
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
});

export function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const { t } = useTranslation();
  const lg = size === 'lg';

  return (
    <span className={`flex items-center ${lg ? 'gap-3' : 'gap-2 lg:gap-3'}`} role="img" aria-label={`Loopa Technology — ${t('brand.tagline')}`}>
      <span
        className={`${lg ? 'h-16 w-[47px]' : 'h-11 w-[32px] lg:h-14 lg:w-[41px]'} shrink-0 bg-brand-coral-ink dark:bg-brand-coral`}
        style={mask('/logo-icon.png')}
      />
      <span className={`flex flex-col ${lg ? 'gap-1.5' : 'gap-1 lg:gap-1.5'}`}>
        <span
          className={`${lg ? 'h-7 w-[132px]' : 'h-5 w-[94px] lg:h-6 lg:w-[113px]'} bg-brand-navy dark:bg-white`}
          style={mask('/logo-wordmark.png')}
        />
        <span className={`${lg ? 'text-sm' : 'text-[10px] lg:text-xs'} font-semibold leading-none text-brand-coral whitespace-nowrap`}>
          {t('brand.tagline')}
        </span>
      </span>
    </span>
  );
}
