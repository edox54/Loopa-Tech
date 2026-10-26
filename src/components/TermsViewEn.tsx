import { ShieldCheck, Mail } from 'lucide-react';
import { Link } from '../lib/i18nRouter';
import { Seo } from './Seo';
import { Reveal } from './Reveal';

// English translation of TermsView. The Spanish text is the legally binding version.
export function TermsViewEn() {
  return (
    <div id="terms-view" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
      <Seo
        title="Terms and Conditions"
        description="Terms and Conditions governing the use of the Loopa Technology website, platform and services."
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <Reveal className="text-center space-y-4">
          <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Compliance and Privacy
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
            Terms and Conditions
          </h1>
        </Reveal>

        <section className="space-y-6">
          <p className="text-xs italic text-brand-navy/65 dark:text-white/65">
            This English version is provided for convenience only. In case of any discrepancy, the{' '}
            <a href="/terminos" lang="es" className="underline hover:text-brand-coral">Spanish version</a> prevails.
          </p>
          <p className="text-sm leading-relaxed">
            LOOPA provides services through its technology platform that allow its clients to view different trends across different social networks regarding certain products and services. The Services are delivered through the website and other access points sent directly to clients, and are subject to the following terms and conditions, which will govern our contractual relationship.
          </p>
          <p className="text-sm leading-relaxed">
            Therefore, once you have accepted the service proposal and once you have used any of the services described below, you accept and are bound by the following terms and conditions (hereinafter the “Terms and Conditions”).
          </p>
          <p className="text-sm leading-relaxed">
            LOOPA reserves the right to change or modify the terms and conditions, policies, references or price at any time. If that happens, we will notify you at the email address you have registered with us or through notifications on our website or application. However, any prepaid plan or package will remain in force until it ends. If our communication does not specify otherwise, any change or modification will take effect when the website or application is updated, and your continued use of the services constitutes express acceptance of the changes, by which you will be bound.
          </p>
          <p className="text-sm leading-relaxed">
            If you do not agree with the changes and modifications, you may stop using the services and cancel your account, in which case you may use any prepaid balance remaining in your account.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">General conditions for using Loopa</h3>
          <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
            <li>To access and use our Services, you must accept our service proposal and make the payment detailed in it.</li>
            <li>You must be over 18 years of age.</li>
            <li>You declare that the services you receive from LOOPA are exclusively for lawful commercial and business purposes, and that you are responsible for the use and purpose of the information provided by LOOPA.</li>
            <li>You accept that the email address you registered when creating your LOOPA account, or any updated one, is the main channel of communication, through which you will receive our notifications and communications.</li>
            <li>Any violation or breach of one or more of the terms described in this document may, at our sole discretion, result in revocation of access to your account and termination of the Services we provide to you, without any right to a refund.</li>
          </ol>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">General conditions</h3>
          <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
            <li>Our contractual relationship begins when you accept the service proposal and its scope is detailed according to the contracted plan. Where necessary, an action map and delivery times will be set; once they are met, you will have access to the generated dashboard.</li>
            <li>You will use our services only for legal and authorized commercial activities in Ecuador, and you will therefore be responsible for complying with every applicable legal, administrative, regulatory or other obligation. You may not reproduce, duplicate, copy, sublicense or exploit the LOOPA Services in any way without our approval.</li>
            <li>We reserve the right to refuse, modify or terminate the Services for any reason, even without notice.</li>
            <li>You expressly acknowledge and accept that LOOPA will not be liable for any damage or loss arising from the use of, or inability to use, the services, including loss of data.</li>
            <li>You use our Services at your own risk; the services are therefore provided “as is” and on a “best effort” basis, without any kind of warranty.</li>
          </ol>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Third-party liability</h3>
          <p className="text-sm leading-relaxed">
            You acknowledge and accept that LOOPA is fed with information through connections to various third-party platforms; we are therefore not responsible for any update to or interruption of their services, for whatever reason.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Intellectual property and content</h3>
          <p className="text-sm leading-relaxed">
            You acknowledge that all intellectual property, industrial property and any other rights, including the technology within the program, dashboards and content, structure, features, code, working methods, information systems, development tools, know-how, methodologies, processes, technologies or algorithms, belong to LOOPA. You may therefore not copy, modify, alter, reproduce, adapt or translate them in any way.
          </p>
          <p className="text-sm leading-relaxed">
            In addition, you may not use or do anything that has not been expressly authorized. In particular, you may NOT transform, reproduce, disseminate, exploit, distribute or transmit by any means its technology, its services and/or their components.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Governing law and jurisdiction</h3>
          <p className="text-sm leading-relaxed">
            These Terms and Conditions of Use, as well as our relationship, will be governed by and interpreted in accordance with the laws of the Republic of Ecuador. Any dispute or difference arising from, relating to or connected with this agreement will be resolved by an arbitral tribunal of the Arbitration and Mediation Center of the Quito Chamber of Commerce, subject to the Arbitration and Mediation Law and the Center's rules.
          </p>

          <p className="text-xs text-brand-navy/65 dark:text-white/65 pt-2">2025, Loopa By SANCHO PRADO ANITA MARIA JACQUELINE</p>
        </section>

        <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-8 space-y-4">
          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Compliance contact</h3>
          <p className="text-sm">For requests related to these terms, write to us directly:</p>
          <a
            href="mailto:info@loopa.technology"
            className="inline-flex items-center space-x-2 text-brand-coral hover:text-brand-navy dark:hover:text-white font-bold text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>info@loopa.technology</span>
          </a>
          <p className="text-sm pt-2">
            Looking for the <Link to="/privacidad" className="text-brand-coral hover:text-brand-navy dark:hover:text-white font-bold underline">Privacy Policy</Link>?
          </p>
        </div>
      </div>
    </div>
  );
}
