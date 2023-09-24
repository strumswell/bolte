import Footer from "@/components/footer";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <NextSeo
        title="Philipp Bolte | Privacy"
        description="I am Philipp, a software engineer working at Spherity on Web3 and SSI solutions."
      />
      <main className="flex flex-col pt-5 justify-center max-w-screen-xl mx-auto">
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-700/80">
          <Link className="flex gap-3 hover:text-zinc-500" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="text-xl font-semibold">Back</span>
          </Link>
          <h3 className="text-3xl font-semibold mt-4">Datenschutzerklärung</h3>
          <p className="text-2xl font-semibold">Allgemeiner Hinweis und Pflichtinformationen</p>
          <p className="text-xl font-semibold mt-4">Benennung der verantwortlichen Stelle</p>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <ul>
            <li>Philipp Bolte</li>
            <li>Hauptstrasse 123</li>
            <li>04275 Leipzig</li>
          </ul>
          <p>
            Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
          </p>
          <h4 className="text-xl font-semibold mt-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
          <p>
            Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf
            Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung
            per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
            unberührt.
          </p>
          <h4 className="text-xl font-semibold mt-4">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h4>
          <p>
            Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der
            Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der
            folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:
            https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
          </p>
          <h4 className="text-xl font-semibold mt-4">Recht auf Datenübertragbarkeit</h4>
          <p>
            Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
            automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem
            maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>
          <h4 className="text-xl font-semibold mt-4">Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h4>
          <p>
            Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft
            über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der
            Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich
            und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum
            aufgeführten Kontaktmöglichkeiten an uns wenden.
          </p>
          <h4 className="text-xl font-semibold mt-4">SSL- bzw. TLS-Verschlüsselung</h4>
          <p>
            Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als
            Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
            über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an
            der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
          </p>
        </div>
        <Footer />
      </main>
    </>
  );
}
