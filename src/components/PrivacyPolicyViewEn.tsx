import { Link } from '../lib/i18nRouter';
import { ShieldCheck, Mail } from 'lucide-react';
import { Seo } from './Seo';
import { Reveal } from './Reveal';

const H3 = 'font-display text-lg font-bold text-brand-navy dark:text-white';
const P = 'text-sm leading-relaxed';
const B = 'font-bold text-brand-navy dark:text-white';

// English translation of PrivacyPolicyView. The Spanish text is the legally binding version.
export function PrivacyPolicyViewEn() {
  return (
    <div id="privacy-view" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
      <Seo
        title="Privacy Policy"
        description="Loopa Technology Privacy Policy: what personal data we collect, how we use it and your rights over your information."
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <Reveal className="text-center space-y-4">
          <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Compliance and Privacy
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
            Privacy Policy
          </h1>
        </Reveal>

        <section className="space-y-6">
          <p className="text-xs italic text-brand-navy/65 dark:text-white/65">
            This English version is provided for convenience only. In case of any discrepancy, the{' '}
            <a href="/privacidad" lang="es" className="underline hover:text-brand-coral">Spanish version</a> prevails.
          </p>
          <p className={P}>
            Depending on how you interact with our website https://loopa.technology/, we collect your information, whether you are a user or a prospective client interested in hiring our services or booking a demo. That is why we explain how we collect, use and share personal information. With your free, express, prior and informed consent, you authorize us to process your data for the purpose set out in our privacy policy. If for any reason we change our privacy policy, we will let you know.
          </p>

          <h3 className={H3}>Why do we process your information?</h3>
          <p className={P}>
            We process your personal information in order to fulfill the service offer we have committed to, and to inform you of offers and commercial and advertising information, whether ours or about related services from our partners.
          </p>

          <h3 id="habeas-data" className={`${H3} scroll-mt-32`}>What are your rights over your information?</h3>
          <p className={P}>
            Data subjects have the rights of information, access, rectification and updating, deletion and suspension of processing, among others. If you wish to ask a question, file a complaint or make a request regarding our privacy policy or the exercise of any of the rights mentioned above, you can contact us at info@loopa.technology.
          </p>
          <p className={P}>
            If you wish to exercise your privacy rights for the complete deletion of your personal data, contact info@loopa.technology. We will respond to all data deletion requests within 30 days.
          </p>
          <p className={P}>
            You may exercise these rights free of charge through the email address above. In addition, through your account you can update, delete, modify and/or check, at any time, the personal data you provided when you created your account.
          </p>
          <p className={P}>
            If you no longer wish to receive newsletters or information about our services, you can unsubscribe at any time by clicking the “unsubscribe” button at the bottom of every email we send.
          </p>

          <h3 className={H3}>What personal information do we collect from you and why?</h3>
          <p className={`text-sm ${B}`}>What we collect</p>
          <ul className={`list-disc pl-5 space-y-2 ${P}`}>
            <li>Information you have given us about yourself and your business, for example: your first and last name, identification document, address, email, phone number and any other data that allows us to identify you and that we have requested in any of your interactions with the website.</li>
            <li>Information about how you access and use our website, your account and our platform, including information about your device (computer, tablet or phone), the browser you use and your IP address. We collect this and other information directly through “cookies” or other mechanisms; you can also refer directly to our cookie policy.</li>
          </ul>
          <p className={`text-sm ${B}`}>How we use it</p>
          <ul className={`list-disc pl-5 space-y-2 ${P}`}>
            <li>To contact you and offer you our products or new integrations, for example.</li>
            <li>To analyze the use of the website and continuously improve our processes and features.</li>
          </ul>

          <h3 className={H3}>When and why do we share your information with third parties?</h3>
          <p className={P}>
            What we do is not easy, and to do it we work with a variety of companies that provide excellent services to strengthen our value proposition. For that reason, we sometimes share your information with them, under strict confidentiality standards.
          </p>
          <p className={P}>We also do so for the following:</p>
          <ol className={`list-decimal pl-5 space-y-2 ${P}`}>
            <li>To help us carry out our marketing and advertising activities.</li>
            <li>To comply with legal requirements, including requests from judicial or government authorities.</li>
          </ol>

          <h3 className={H3}>How long do we keep your information?</h3>
          <p className={P}>
            We keep your personal data for the time strictly necessary to fulfill the corresponding purpose, as well as for the period required by applicable laws and regulations. After that time, this information may be kept, duly anonymized, for statistical and internal analysis purposes.
          </p>

          <h3 className={H3}>What security measures do we use?</h3>
          <p className={P}>
            Protecting your personal data is our priority, which is why we use industry-standard practices to protect it.
          </p>

          <h3 className={H3}>How do changes to the data protection policy work?</h3>
          <p className={P}>
            We may update this document, and we will notify you of any updates through our digital channels or the website.
          </p>

          <h2 id="cookies" className="font-display text-2xl font-bold text-brand-navy dark:text-white pt-4 scroll-mt-32">Cookie policy</h2>

          <h3 className={H3}>What are cookies?</h3>
          <p className={P}>
            A cookie is a file that is downloaded to your computer when you visit certain web pages. Among other things, cookies allow a website to store and retrieve information about the browsing habits of a user or their device and, depending on the information they contain and how you use your device, they can be used to recognize the user.
          </p>

          <h3 className={H3}>What types of cookies does this website use?</h3>
          <p className={P}>This website uses the following types of cookies:</p>
          <ul className={`list-disc pl-5 space-y-2 ${P}`}>
            <li><span className={B}>Analytics cookies:</span> Cookies processed by us or by third parties that allow us to quantify the number of users and thus measure and statistically analyze how users use the service offered. To do so, your browsing on our website is analyzed in order to improve the products or services we offer you.</li>
            <li><span className={B}>Technical cookies:</span> Cookies that allow the user to browse a website, platform or application and use the different options or services in it, for example controlling traffic and data communication, identifying the session, accessing restricted areas, remembering the items in an order, completing the purchase process of an order, applying to register for or take part in an event, using security features while browsing, storing content for broadcasting video or sound, or sharing content through social networks.</li>
            <li><span className={B}>Personalization cookies:</span> Cookies that allow the user to access the service with certain predefined general features based on a set of criteria on the user's device, such as the language or the type of browser used to connect to the service.</li>
            <li><span className={B}>Advertising cookies:</span> Cookies processed by this website or by third parties that allow the advertising space on the website to be managed as efficiently as possible, adapting the content of the ad to the content of the requested service or to how you use our website. To do so, we may analyze your browsing habits on the Internet and show you advertising related to your browsing profile.</li>
            <li><span className={B}>Behavioral advertising cookies:</span> Cookies that allow the advertising space that the publisher may have included on a website, application or platform from which the requested service is provided to be managed as efficiently as possible. These cookies store information about visitor behavior obtained through continuous observation of their browsing habits, which makes it possible to build a specific profile to display advertising based on it.</li>
          </ul>

          <h3 className={H3}>Disabling cookies</h3>
          <p className={P}>
            You can allow, block or delete the cookies installed on your device by configuring the options of the browser installed on your computer.
          </p>

          <h3 className={H3}>Third-party cookies</h3>
          <p className={P}>
            This website uses third-party services to collect information for statistical purposes and on website usage. Different providers are used to improve the advertising included on the website. They are used to target advertising according to content that is relevant to a user, thus improving the quality of their experience.
          </p>

          <h3 className={H3}>Disabling cookies</h3>
          <p className={P}>
            You can allow, block or delete the cookies installed on your device by configuring the options of the browser installed on your computer.
          </p>

          <p className="text-xs text-brand-navy/65 dark:text-white/65 pt-2">2025, Loopa By SANCHO PRADO ANITA MARIA JACQUELINE</p>
        </section>

        <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-8 space-y-4">
          <h3 className={H3}>Compliance contact</h3>
          <p className="text-sm">For requests related to personal data protection, write to us directly:</p>
          <a
            href="mailto:info@loopa.technology"
            className="inline-flex items-center space-x-2 text-brand-coral hover:text-brand-navy dark:hover:text-white font-bold text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>info@loopa.technology</span>
          </a>
          <p className="text-sm pt-2">
            Looking for the <Link to="/terminos" className="text-brand-coral hover:text-brand-navy dark:hover:text-white font-bold underline">Terms and Conditions</Link>?
          </p>
        </div>
      </div>
    </div>
  );
}
