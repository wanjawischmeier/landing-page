import { useState, useRef, useEffect } from 'react';

const sections = [
  {
    title: 'Wer wir sind und was wir machen',
    content: (
      <p className="text-dark-text">
        Wir sind eine Gruppe von Menschen aus unterschiedlichen Kontexten in der Bewegung die sich zusammengeschlossen haben, um linkes Wissen zu sammeln und für alle emanzipatorischen Bewegungen zugänglich zu machen.
        Wir alle haben eigenes individuelles Wissen, aber teilen die Idee, Wissenshierarchien abzubauen, voneinander zu lernen und Wissen für alle zugänglich zu machen.
        <br></br><br></br>
        One Struggle - One Fight!
        <br></br><br></br>
        Wir verstehen uns als Teil von emanzipatorischen Bewegungen, die auf eine sozial-ökologische Transformation und die Überwindung von patriarchalen, kolonialen und kapitalistischen Ausbeutungsstrukturen ausgerichtet sind.
        Wir versuchen einen zentralen Ort für Wissen zu schaffen. Wissen, das uns hilft, den Kapitalismus zu überwinden und eine alternative Form des Zusammenlebens zu finden.
        <br></br><br></br>
        Dazu gehöhen einfaches Faktenwissen, Skills, How-Tos und vieles mehr. Dieses Wissen existiert, allerdings verstreut über zahllose Städte und Gruppen verteilt. Dies soll ein Ort sein, um dieses Wissen zu sammeln, archivieren und verfügbar zu machen.
      </p>
    ),
  },
  {
    title: 'Mitmachen',
    content: (
      <p className="text-dark-text">
        Du teilst unsere Vision und willst helfen, Wissen zugänglich zu machen und Hierarchien abzubauen? Dann mach dir einen Account und teile dein Wissen!
        Oder willst du auch bei den internen Prozessen dabei sein, bei der Entwicklung der Systeme helfen und neue Features implementieren? Dann schreib uns doch unter:
        <br></br>
        <a href="mailto:movementwiki@systemli.org" className="text-primary-500">movementwiki@systemli.org</a>
        <br></br><br></br>
        Du kannst auch ohne technische Kentnisse mitmachen und dein eigenes, individuelles Wissen einbringen und neues lernen!
      </p>
    ),
  },
  {
    title: 'Moderation',
    content: (
        <p className="text-dark-text">
            Wir haben festgelegt, dass Inhalte die sich auf Gewalt gegen Menschen oder Sachen beziehen, dazu anleiten oder aufrufen, von uns gelöscht werden.
            Das tun wir vor allem zu unserer eigenen und der Sicherheit der Menschen, die das einpflegen 
            (Alle Aktivitäten auf dieser Seite sind völlig öffentlich - inklusive Nutzername der Personen -  wir loggen jedoch keine IP-Adressen).
            Über Lock-Ons, Barrikadenbau, Sitzblockaden und ähnliches was Teil zivilen Ungehorsams ist, sind wir noch unschlüssig, behalten uns aber vor, 
            das mit in die Kriterien aufzunehmen und im Einzelfall zu entscheiden.
        </p>
    ),
  },
];

function AccordionSection({ title, content, expanded, onClick }) {
  const ref = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (expanded && ref.current) {
      setHeight(ref.current.scrollHeight + 'px');
    } else {
      setHeight('0px');
    }
  }, [expanded]);

  return (
    <div className="mb-2">
      <button
        className={`
          w-full text-left text-xl font-semibold py-2 px-2 rounded transition-colors 
          duration-150
          ${expanded ? 'bg-dark-card text-dark-text shadow-2xl' : 'bg-dark-grid text-dark-text/75'}
          hover:bg-dark-card hover:text-white hover:shadow-2xs
          focus:outline-none
        `}
        onClick={onClick}
        aria-expanded={expanded}
        style={{ transitionProperty: 'background, color, box-shadow, transform' }}
      >
        {title}
      </button>
      <div
        className="overflow-hidden transition-all duration-150"
        style={{ maxHeight: height }}
      >
        <div ref={ref} className="px-4 py-2 pb-6">
          {content}
        </div>
      </div>
    </div>
  );
}

export default function AboutUs({ mode }) {
  const [openIndex, setOpenIndex] = useState(0);

  const isMobile = mode === "mobile";

  return (
    <div
      className={
        isMobile
          ? "bg-dark-grid h-full w-full flex flex-col p-6" // Fill all space, no padding or width constraints
          : "bg-dark-grid shadow-2xl p-6 max-w-[80%] max-h-[80%] min-w-[400px] h-full flex flex-col"
      }
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-dark-text">Über uns</h2>
      <div
        className={isMobile ? "overflow-y-auto flex-1" : "overflow-y-auto flex-1 pr-2"}
        style={isMobile ? {} : { maxHeight: "60vh" }}
      >
        {sections.map((section, idx) => (
          <AccordionSection
            key={section.title}
            title={section.title}
            content={section.content}
            expanded={openIndex === idx}
            onClick={() => setOpenIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
