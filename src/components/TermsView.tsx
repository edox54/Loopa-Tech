import { ShieldCheck, Mail } from 'lucide-react';
import { Link } from '../lib/i18nRouter';
import { Seo } from './Seo';
import { Reveal } from './Reveal';

export function TermsView() {
  return (
    <div id="terms-view" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
      <Seo
        title="Términos y Condiciones"
        description="Términos y Condiciones de uso de los servicios de Loopa Technology."
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <Reveal className="text-center space-y-4">
          <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Cumplimiento y Privacidad
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
            Términos y Condiciones
          </h1>
        </Reveal>

        <section className="space-y-6">
          <p className="text-sm leading-relaxed">
            LOOPA provee servicios mediante su plataforma tecnológica que permiten a sus clientes visualizar distintas tendencias en distintas redes sociales sobre determinados productos y servicios. Los Servicios prestados se los realiza mediante la página web y otros accesos que son enviados directamente a los clientes y están sujetos a los siguientes términos y condiciones, los cuales gobernarán nuestra relación contractual.
          </p>
          <p className="text-sm leading-relaxed">
            Por ello, al momento en el cual te has aceptado la propuesta de servicios y al momento en que has utilizado cualquiera de los servicios descritos a continuación, estás aceptando y por lo tal te obligas a los siguientes términos y condiciones (en adelante “Términos y Condiciones”).
          </p>
          <p className="text-sm leading-relaxed">
            LOOPA se reserva el derecho de cambiar o modificar los términos y condiciones, políticas o referencias o el precio en cualquier momento. En caso de que eso suceda, te comunicaremos al correo electrónico que tienes registrado con nosotros o lo comunicaremos mediante notificaciones en nuestra página web o aplicación. Sin embargo, todo plan o paquete prepago se mantendrá vigente hasta su terminación. Si en la comunicación que te hemos enviado no hemos especificado nada, cualquier cambio o modificación será ejecutada al momento de la actualización en la página web o aplicación y el uso continuo de los servicios; tal hecho constituye aceptación expresa de los cambios y por lo tanto estarás obligado por ellos.
          </p>
          <p className="text-sm leading-relaxed">
            En caso de que no estés de acuerdo con los cambios y modificaciones, podrás dejar de usar los servicios y cancelar tu cuenta, en ese caso podrás utilizar cualquier saldo pre-pago que tengas en tu cuenta.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Condiciones generales sobre el uso de Loopa</h3>
          <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
            <li>Para acceder y usar nuestros Servicios, tienes que aceptar nuestro propuesta de servicios y cumplir con el pago ahí detallado.</li>
            <li>Tienes que tener más de 18 años.</li>
            <li>Declaras que los servicios que estás recibiendo de LOOPA son para fines comerciales y mercantiles lícitos exclusivamente, así mismo eres la parte responsable por el uso y fin de la información proporcionada por LOOPA.</li>
            <li>Aceptar que el correo electrónico que has registrado al momento de crearte una cuenta en LOOPA o la que hayas actualizado es la forma principal de comunicación; por ello recibirás nuestras notificaciones o comunicaciones.</li>
            <li>Cualquier violación o incumplimiento a uno o varios de los términos descritos en el presente documento podrán a nuestra sola discreción revocar el acceso a tu cuenta y la terminación de los Servicios que te prestamos, sin derecho a reembolso alguno.</li>
          </ol>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Condiciones generales</h3>
          <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
            <li>Al momento en el que aceptas la propuesta de servicio y se detalle el alcance del mismo en base al plan contratado inicia nuestra relación contractual. Sobre ello en caso de ser necesario se establecerá un mapa de acción y tiempos de entrega, sobre los cuales una vez que se han cumplido tendrás acceso a la pantalla de visualización generada.</li>
            <li>Utilizarás nuestros servicios solo para actividades comerciales legales y autorizadas en el Ecuador, por ello serás responsable por el cumplimiento de toda obligación legal, administrativa, normativa entre otras que sean aplicables. No podrás reproducir, duplicar, copiar, sub-licenciar o explorar de cualquier forma los Servicios de LOOPA, sin nuestra aceptación.</li>
            <li>Nos reservamos el derecho de rechazar, modificar o terminar los Servicios por cualquier razón, inclusive sin notificación alguna.</li>
            <li>De manera expresa declaras conocer y aceptas que LOOPA no será responsable por ningún daño y perjuicio derivado del uso o imposibilidad de uso de los servicios, incluyendo la perdida de data.</li>
            <li>El uso de nuestros Servicios es a tu propio riesgo, por ello la prestación de servicios provistos son “como tal” y en base al “mejor esfuerzo” sin ningún tipo de garantía sobre ellos.</li>
          </ol>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Responsabilidad de terceros</h3>
          <p className="text-sm leading-relaxed">
            Reconoces y aceptas que LOOPA se alimenta de información por medio de conexiones con distintas plataformas de terceros, por ello no somos responsables de cualquier actualización o irrupción en sus servicio, por distintas razones.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Propiedad intelectual y contenido</h3>
          <p className="text-sm leading-relaxed">
            Declaras conocer que todos los derechos de propiedad intelectual, propiedad industrial o cualquier otro, incluyendo la tecnología dentro del programa, visualización y contenido, estructura, características, códigos, métodos de trabajo, sistemas de información, herramientas de desarrollo, know how, metodologías, procesos, tecnologías o algoritmos son de LOOPA. Por ello, no podrás copiar, modificar, alterar, reproducir, adaptar, traducir de ninguna forma.
          </p>
          <p className="text-sm leading-relaxed">
            Adicionalmente no podrás usar ni hacer nada que no ha sido expresamente autorizado. En especial NO podrás transformar, reproducir, difundir, explotar, distribuir, trasmitir por cualquier medio, su tecnología, su servicios y/o sus componentes.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Ley aplicable y jurisdicción</h3>
          <p className="text-sm leading-relaxed">
            Los presentes Términos y Condiciones de Uso, así como nuestra relación se regirán e interpretarán con arreglo la legislación de la República del Ecuador. Toda controversia o diferencia que surja de, relativa a, o que tenga relación con este contrato, será resuelta por un tribunal arbitral del Centro de Arbitraje y Mediación de la Cámara de Comercio de Quito, que se sujetará a lo dispuesto en la Ley de Arbitraje y Mediación y el Reglamento del centro.
          </p>

          <p className="text-xs text-brand-navy/65 dark:text-white/65 pt-2">2025, Loopa By SANCHO PRADO ANITA MARIA JACQUELINE</p>
        </section>

        <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-8 space-y-4">
          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Contacto de Cumplimiento</h3>
          <p className="text-sm">
            Para solicitudes relacionadas con estos términos, escríbenos directamente:
          </p>
          <a
            href="mailto:info@loopa.technology"
            className="inline-flex items-center space-x-2 text-brand-coral hover:text-brand-navy dark:hover:text-white font-bold text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>info@loopa.technology</span>
          </a>
          <p className="text-sm pt-2">
            ¿Buscas la <Link to="/privacidad" className="text-brand-coral hover:text-brand-navy dark:hover:text-white font-bold underline">Política de Privacidad</Link>?
          </p>
        </div>
      </div>
    </div>
  );
}
