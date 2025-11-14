import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <Button variant="ghost" className="mb-8 -ml-4" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
            Aviso de Privacidad
          </h1>
          <p className="text-muted-foreground text-lg">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-MX", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-12">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Agradecemos que estés en esta página, eso significa que tus datos
              te importan, y quieres conocer el destino de los mismos y quién
              los almacena. Usuarios Top Sales Solutions S.A. de C.V., en
              representación de su marca comercial Relevant (en lo sucesivo,
              identificada como "Relevant"), con domicilio en Heriberto Frías
              1145, Col. Del Valle Centro, 03100, CDMX, México, en atención a la
              Ley Federal de Protección de Datos Personales en Posesión de
              Particulares (la "Ley"), su reglamento y los Lineamientos del
              Aviso de Privacidad, pone a su disposición el presente Aviso de
              Privacidad (el "Aviso").
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El presente aviso está vinculado a los datos personales recabados
              como consecuencia de la prestación de servicios por parte de
              Relevant a los usuarios del sitio de internet{" "}
              <Link
                href="https://www.relevantmx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.relevantmx.com
              </Link>
              , los cuales se describen en nuestros términos y condiciones de
              uso del sitio, disponibles en el mismo (los "Servicios").
            </p>
            <div className="bg-accent/30 rounded-lg p-4 mt-6">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Encargado de Protección de Datos:
                </strong>{" "}
                Le hacemos notar que el C.P. Mónica Cruz Rojas ha sido designado
                como la persona encargada de dar trámite a las solicitudes
                relativas a datos personales y de fomentar la protección de
                datos personales al interior de Relevant, a quien puede ubicar y
                contactar directamente en nuestras oficinas ubicadas en la
                dirección señalada en el párrafo que antecede o en la dirección
                de correo{" "}
                <Link
                  href="mailto:relevant@relevantmx.com"
                  className="text-primary hover:underline"
                >
                  relevant@relevantmx.com
                </Link>
                .
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6">
              Sus datos personales son muy importantes para nosotros y serán
              tratados con base en los principios de licitud, consentimiento,
              información, calidad, finalidad, lealtad, proporcionalidad y
              responsabilidad en términos de la legislación aplicable y se
              utilizarán solamente con las finalidades listadas a continuación.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Finalidades del Tratamiento
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los datos personales que recabamos de usted serán utilizados para:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Incluirle en nuestra base de datos de usuarios</li>
              <li>
                Enviarle las cotizaciones de los servicios prestados por
                Relevant
              </li>
              <li>
                Notificarle de promociones que le puedan ser de su interés
              </li>
              <li>Contactarlo con otros usuarios del sitio</li>
              <li>
                Para, en su caso, emisión del comprobante fiscal correspondiente
              </li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Adicionalmente, utilizaremos sus datos para enviarle nuestro
              boletín de noticias y para temas de inteligencia comercial, diseño
              de productos, seguimiento de nuestros servicios y control de
              calidad.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En caso de no desear recibir nuestro boletín de noticias o que
              utilicemos sus datos para las finalidades señaladas en este
              párrafo, le agradeceremos envíe un correo electrónico a la persona
              encargada de datos personales y también tendrá la opción, cada vez
              que reciba nuestro boletín, de darse de baja del mismo siguiendo
              el proceso establecido al calce del correo electrónico mediante el
              cual le es enviado tal material.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Sobre el Uso de Datos de Campañas Publicitarias
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sobre el uso de los datos obtenidos de campañas de Facebook Ads,
              Facebook Leads, LinkedIn Ads y LinkedIn Leads: Relevant nunca
              compartirá con terceros ni proveedores de servicios los datos de
              usuarios generados a través de este tipo de anuncios. Los datos
              suministrados por usuarios en estos anuncios son de uso interno y
              exclusivo de Relevant y serán utilizados por Relevant para ofrecer
              al usuario soluciones sobre reclutamiento especializado,
              capacitación y consultoría comercial y de negocios, siempre y
              cuando este nos lo permita y acepte los términos aquí descritos.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Datos Personales que Utilizamos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para llevar a cabo las finalidades descritas en el presente Aviso,
              utilizaremos los siguientes datos personales de los cuales usted
              es titular:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Domicilio</li>
              <li>Teléfono de casa</li>
              <li>Teléfono de oficina</li>
              <li>Teléfono celular</li>
              <li>
                Nombre de usuario y contraseña personal (en caso de ser un
                candidato)
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">
                Tarjeta de crédito o débito:
              </strong>{" "}
              número de tarjeta, nombre señalado en la tarjeta, institución
              emisora de la tarjeta, fecha de vencimiento de la tarjeta, código
              de seguridad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Datos de facturación:</strong>{" "}
              Registro Federal de Contribuyentes, domicilio fiscal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le informamos que Relevant no recaba datos sensibles como
              consecuencia de sus servicios.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Transferencias</h2>
            <p className="text-muted-foreground leading-relaxed">
              Relevant transmitirá su información a:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mt-4">
              <li>
                Sus empresas filiales, subsidiarias, socias u otras sociedades
                de nuestro mismo grupo corporativo
              </li>
              <li>
                Las autoridades en caso de ser solicitada en términos de la
                legislación aplicable
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Confidencialidad y Medidas de Seguridad
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              La confidencialidad y la protección de sus datos personales son
              una prioridad para Relevant, por lo que hemos establecido y
              mantenemos medidas de seguridad de carácter técnico, físico y
              administrativo. Entre nuestras medidas de seguridad se incluyen el
              acceso con clave a servidores y plataformas, múltiples capas de
              acceso y encriptación unidireccional de contraseñas. Lo anterior
              para evitar el daño, pérdida, alteración, destrucción y el uso,
              acceso o divulgación indebida.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Derechos ARCO</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Usted, como titular de sus datos personales, tiene derecho a:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>
                Acceder a sus datos personales en posesión de Relevant y conocer
                los detalles del tratamiento de los mismos
              </li>
              <li>
                Rectificarlos en caso de estar desactualizados, ser inexactos o
                estar incompletos
              </li>
              <li>
                Cancelarlos cuando considere que no están siendo utilizados
                conforme a los principios, deberes y obligaciones aplicables
              </li>
              <li>
                Oponerse al tratamiento de los mismos para fines específicos
              </li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Estos derechos se conocen como los "Derechos ARCO".
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Ejercicio de Derechos ARCO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si el ejercicio de Derechos ARCO se hace por escrito, la solicitud
              deberá ser presentada en nuestro domicilio dirigida a la atención
              del encargado de protección de datos personales identificado en
              este aviso, acompañada de la siguiente información y
              documentación:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Datos de identificación del titular de los datos personales y/o
                de su representante legal
              </li>
              <li>
                En el caso de que la solicitud se presente a través de
                representante legal, se deberá acompañar copia del documento con
                el que se acredite ese carácter
              </li>
              <li>
                La descripción de manera clara y precisa de los datos personales
                respecto de los cuales busca ejercer los Derechos ARCO, así como
                del derecho o derechos que desea ejercer
              </li>
              <li>
                La solicitud deberá ser firmada al final del escrito y rubricada
                al calce de cada una de las hojas
              </li>
              <li>
                Domicilio para oír y recibir la contestación de Relevant, y, en
                su caso, futuras comunicaciones y/o notificaciones, o bien su
                deseo de que nuestra contestación y/o futuras notificaciones o
                contestaciones sean enviadas a través de correo electrónico,
                indicando la respectiva cuenta
              </li>
              <li>
                Copia de la identificación oficial vigente del titular de los
                datos personales y, en su caso, de su representante legal
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Revocación del Consentimiento al Tratamiento de los Datos
              Personales
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Usted, como titular de sus datos personales, puede revocar su
              consentimiento para el tratamiento de los mismos conforme al
              procedimiento previsto en la sección anterior "Ejercicio de
              Derechos ARCO", en el entendido que una vez que su solicitud de
              revocación se encuentre a disposición de Relevant, emitiremos
              nuestra contestación en un plazo no mayor a 5 (cinco) días
              hábiles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Opciones para Limitar el Uso o Divulgación de sus Datos Personales
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Usted, como titular de sus datos personales, puede limitar el uso
              o divulgación de los mismos conforme al procedimiento previsto en
              la sección "Ejercicio de Derechos ARCO", en el entendido que una
              vez que su solicitud se encuentre a disposición de Relevant,
              emitiremos nuestra contestación en un plazo no mayor a 5 (cinco)
              días hábiles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Uso de Cookies, Web Beacons y Otras Tecnologías Similares
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Se hace de su conocimiento que Relevant no utiliza mecanismos
              remotos o locales de comunicación electrónica, óptica u otra
              tecnología que nos permitan recabar datos personales.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Cambios al Aviso de Privacidad
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              En cualquier momento Relevant podrá hacer modificaciones, cambios
              y/o actualizaciones al presente Aviso que sean necesarias para
              atender disposiciones legales aplicables, nuestras prácticas de
              privacidad o por otras causas, las cuales haremos de su
              conocimiento mediante publicación en nuestro sitio web{" "}
              <Link
                href="https://www.relevantmx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.relevantmx.com
              </Link>
              . En el Aviso se incluirá la fecha de la última versión del mismo.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Consentimiento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Al proporcionarnos sus datos personales, expresamente reconoce y
              acepta el presente Aviso, por lo que dicho consentimiento nos
              otorga la facultad para que procedamos al tratamiento de los
              mismos en la forma en que se señala en el presente Aviso y con
              estricto apego al mismo, la Ley, su Reglamento y demás legislación
              aplicable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Información de Contacto
            </h2>
            <div className="bg-accent/50 rounded-lg p-6">
              <p className="font-medium mb-4 text-foreground">Relevant</p>
              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">Dirección:</strong>{" "}
                Heriberto Frías 1145, Del Valle Centro, 03100, CDMX, México
              </p>
              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">Email:</strong>{" "}
                <Link
                  href="mailto:relevant@relevantmx.com"
                  className="text-primary hover:underline"
                >
                  relevant@relevantmx.com
                </Link>
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">
                  Teléfono del servicio al cliente:
                </strong>{" "}
                <Link
                  href="tel:+5537847797"
                  className="text-primary hover:underline"
                >
                  (55) 3784 7797
                </Link>
              </p>
              <p className="text-sm text-muted-foreground mt-4 pt-4 border-t">
                Los usuarios que deseen dejar de recibir nuestros boletines
                pueden hacer clic en el enlace cancelar suscripción, que está
                integrado en el pie de página de todos los correos electrónicos
                enviados por Relevant para no recibir futuros mensajes.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
