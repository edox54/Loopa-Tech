import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '../lib/i18nRouter';
import { ShieldCheck, Mail } from 'lucide-react';
import { Seo } from './Seo';
import { Reveal } from './Reveal';

export function PrivacyPolicyView() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <div id="privacy-view" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
      <Seo
        title="Política de Privacidad"
        description="Política de Privacidad de Loopa Technology: qué datos personales recolectamos, cómo los usamos y tus derechos sobre tu información."
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <Reveal className="text-center space-y-4">
          <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Cumplimiento y Privacidad
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
            Política de Privacidad
          </h1>
        </Reveal>

        <section className="space-y-6">
          <p className="text-sm leading-relaxed">
            Dependiendo como interactúes con nuestra página web https://loopa.technology/ recolectamos tu información; seas un usuario, posible cliente que estés interesado en contratar nuestros servicios o agendar un demo. Es por eso que te explicaremos y entenderás como recolectamos, usamos y compartimos información personal. Con tu consentimiento libre, expreso, previo e informado nos autorizas a tratar tus datos de acuerdo con el fin establecido en nuestra política de privacidad. Si por cualquier motivo cambiamos nuestras políticas de privacidad te lo haremos saber.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">¿Por qué procesamos tu información?</h3>
          <p className="text-sm leading-relaxed">
            Procesamos tu información personal con la finalidad de cumplir con la oferta de servicio a la cual nos hemos obligado, y para hacerte conocer ofertas, información comercial y publicitaria nuestra o de servicios relacionados de nuestros aliados.
          </p>

          <h3 id="habeas-data" className="font-display text-lg font-bold text-brand-navy dark:text-white scroll-mt-32">¿Cuáles son tus derechos sobre tu información?</h3>
          <p className="text-sm leading-relaxed">
            Los titulares de datos personales tienen el derecho de información, acceso, rectificación y actualización, eliminación suspensión del tratamiento entre otros. Si quisieras hacer una pregunta, reclamo o requerimiento en relación con nuestra política de privacidad o el ejercicio de cualquiera de los derechos de información antes mencionados, nos puedes contactar a los siguientes al siguiente correo electrónico info@loopa.technology.
          </p>
          <p className="text-sm leading-relaxed">
            Si deseas invocar sus derechos de privacidad para la eliminación completa de sus datos personales, comuníquese con info@loopa.technology. Responderemos a todas las solicitudes de borrado de datos en un plazo de 30 días.
          </p>
          <p className="text-sm leading-relaxed">
            Podrá ejercer estos derechos de forma gratuita mediante el email antes mencionado. Además, a través de tu cuenta, puedes actualizar, eliminar, modificar y/o verificar – en cualquier momento – qué datos personales comunicaste cuando creaste tu cuenta.
          </p>
          <p className="text-sm leading-relaxed">
            Si ya no desea recibir boletines informativos o información sobre nuestros servicios, puedes darse de baja en cualquier momento haciendo clic en el botón «cancelar suscripción» en la parte inferior de cada correo electrónico enviado.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">¿Qué información personal recolectamos de ti y por qué?</h3>
          <p className="text-sm font-bold text-brand-navy dark:text-white">Que recolectamos</p>
          <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
            <li>Información que nos has dado de ti y de tu negocio, como, por ejemplo: tu nombre, apellido, documento de identificación, dirección, correo electrónico, número de teléfono y cualquier otro dato que nos permita identificarte y que te hemos solicitado en cualquiera de las interacciones que tengas con la web.</li>
            <li>Información de como accedes y usas nuestra página web, tu cuenta y nuestra plataforma, la cual incluye información de tu dispositivo (computador, Tablet o celular), browser que usas, dirección IP. Recolectamos esta y otra información de “cookies” o de otros mecanismos directamente, sin perjuicio de ello puedes referirte nuestra política de cookies directamente.</li>
          </ul>
          <p className="text-sm font-bold text-brand-navy dark:text-white">Como lo usamos</p>
          <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
            <li>Para contactarte y ofrecerte nuestros productos o nuevas integraciones, por ejemplo.</li>
            <li>Para poder analizar el uso de la web y proveerte de mejoras continuas en nuestros procesos y funcionalidades.</li>
          </ul>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">¿Cuándo y porque compartimos tu información con terceros?</h3>
          <p className="text-sm leading-relaxed">
            No es fácil hacer lo que hacemos, y para ello trabajamos con una variedad de compañías que nos proveen excelentes servicios para fortalecer nuestra propuesta de valor, por ello a veces compartimos tu información con ellos, bajo estrictos estándares de confidencialidad.
          </p>
          <p className="text-sm leading-relaxed">También lo hacemos para lo siguiente:</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
            <li>Que nos ayude a realizar nuestras actividades de marketing y publicidad.</li>
            <li>Para cumplir con requerimientos legales, entre ellos requerimientos de autoridades judiciales o gubernamentales.</li>
          </ol>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">¿Por cuánto tiempo conservamos tu información?</h3>
          <p className="text-sm leading-relaxed">
            Conservamos tus datos personales durante el tiempo estrictamente necesario para cumplir con la finalidad correspondiente, así como por el plazo que las leyes y regulaciones aplicables. Luego de ese tiempo, esta información puedes ser conservada debidamente anonimizada, para fines estadísticos y de análisis interno.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">¿Cuales son las medidas de seguridad que utilizamos?</h3>
          <p className="text-sm leading-relaxed">
            La protección de tus datos personales es nuestra prioridad, por ello utilizamos los standares acostumbrados por la industra para protegerlos.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">¿Cómo funcionan los cambios a la política de protección de datos?</h3>
          <p className="text-sm leading-relaxed">
            Podremos hacer actualizaciones de este documento, los cuales te notificaremos por medio de los canales digitales o por medio de la web.
          </p>

          <h2 className="font-display text-2xl font-bold text-brand-navy dark:text-white pt-4">Política de cookies</h2>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">¿Qué son las cookies?</h3>
          <p className="text-sm leading-relaxed">
            Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">¿Qué tipos de cookies utiliza esta página web?</h3>
          <p className="text-sm leading-relaxed">Esta página web utiliza los siguientes tipos de cookies:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
            <li><span className="font-bold text-brand-navy dark:text-white">Cookies de análisis:</span> Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.</li>
            <li><span className="font-bold text-brand-navy dark:text-white">Cookies técnicas:</span> Son aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales.</li>
            <li><span className="font-bold text-brand-navy dark:text-white">Cookies de personalización:</span> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma o el tipo de navegador a través del cual se conecta al servicio.</li>
            <li><span className="font-bold text-brand-navy dark:text-white">Cookies publicitarias:</span> Son aquéllas que, bien tratadas por esta web o por terceros, permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos analizar sus hábitos de navegación en Internet y podemos mostrarle publicidad relacionada con su perfil de navegación.</li>
            <li><span className="font-bold text-brand-navy dark:text-white">Cookies de publicidad comportamental:</span> Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Este tipo de cookies almacenan información del comportamiento de los visitantes obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar avisos publicitarios en función del mismo.</li>
          </ul>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Desactivar las cookies</h3>
          <p className="text-sm leading-relaxed">
            Puedes permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Cookies de terceros</h3>
          <p className="text-sm leading-relaxed">
            Esta página web utiliza servicios de terceros para recopilar información con fines estadísticos y de uso de la web. Se usan distintos proveedores para mejorar la publicidad que se incluye en el sitio web. Son utilizadas para orientar la publicidad según el contenido que es relevante para un usuario, mejorando así la calidad de experiencia en el uso del mismo.
          </p>

          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Desactivar las cookies</h3>
          <p className="text-sm leading-relaxed">
            Puedes permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
          </p>

          <p className="text-xs text-brand-navy/65 dark:text-white/65 pt-2">2025, Loopa By SANCHO PRADO ANITA MARIA JACQUELINE</p>
        </section>

        <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-8 space-y-4">
          <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">Contacto de Cumplimiento</h3>
          <p className="text-sm">
            Para solicitudes relacionadas con protección de datos personales, escríbenos directamente:
          </p>
          <a
            href="mailto:info@loopa.technology"
            className="inline-flex items-center space-x-2 text-brand-coral hover:text-brand-navy dark:hover:text-white font-bold text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>info@loopa.technology</span>
          </a>
          <p className="text-sm pt-2">
            ¿Buscas los <Link to="/terminos" className="text-brand-coral hover:text-brand-navy dark:hover:text-white font-bold underline">Términos y Condiciones</Link>?
          </p>
        </div>
      </div>
    </div>
  );
}
