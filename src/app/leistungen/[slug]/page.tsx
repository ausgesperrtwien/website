import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  DoorOpen,
  KeyRound,
  Scissors,
  Wrench,
  RefreshCw,
  Settings,
  ShieldCheck,
  Home,
  Plus,
  Mail,
  AlertTriangle,
  Lightbulb,
  Phone,
  Clock,
  MapPin,
  Euro,
  Check,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

const iconMap: Record<string, React.ElementType> = {
  DoorOpen,
  KeyRound,
  Scissors,
  Wrench,
  RefreshCw,
  Settings,
  ShieldCheck,
  Home,
  Plus,
  Mail,
  AlertTriangle,
  Lightbulb,
};

/* ───────── SEO data per service ───────── */
const serviceData: Record<
  string,
  {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    heroSubtitle: string;
    longDescription: string;
    benefits: string[];
    process: { step: string; text: string }[];
    faq: { q: string; a: string }[];
  }
> = {
  tueroeffnung: {
    metaTitle: "Türöffnung Wien — 24h Aufsperrdienst | Ab 60€ Fixpreis",
    metaDescription:
      "Professionelle Türöffnung in Wien ✓ Beschädigungsfrei ✓ In 15–20 Min vor Ort ✓ Faire Fixpreise ab 60€ ✓ Keine Anfahrtskosten ✓ 24/7 Notdienst. Jetzt anrufen!",
    keywords: [
      "Türöffnung Wien",
      "Tür öffnen lassen Wien",
      "Aufsperrdienst Wien",
      "Wohnungstür öffnen Wien",
      "Tür zugefallen Wien",
      "Schlüsseldienst Türöffnung",
      "beschädigungsfreie Türöffnung",
    ],
    heroSubtitle:
      "Ausgesperrt? Wir öffnen Ihre Tür in Wien schnell, professionell und beschädigungsfrei — in 15 bis 20 Minuten vor Ort.",
    longDescription:
      "Eine zugefallene Tür ist ärgerlich — aber kein Grund zur Panik. Unser professioneller Aufsperrdienst führt Türöffnungen aller Art durch: zugefallene Türen, abgeschlossene Wohnungs- oder Haustüren, Doppelfalztüren, Türen mit Mehrfachverriegelungen und Zusatzschlösser. In den meisten Fällen ist eine beschädigungsfreie Öffnung möglich. Unsere erfahrenen Techniker nutzen professionelles Spezialwerkzeug und verfügen über jahrelange Erfahrung im Bereich Öffnungstechnik. Tag und Nacht, 365 Tage im Jahr.",
    benefits: [
      "Beschädigungsfreie Öffnung in über 95% der Fälle",
      "Fixpreis ab 60€ — vorab am Telefon vereinbart",
      "In 15–20 Minuten bei Ihnen in Wien",
      "Keine Anfahrtskosten",
      "24/7 erreichbar — auch nachts und am Wochenende",
      "Professionelles Spezialwerkzeug",
    ],
    process: [
      { step: "Anruf", text: "Rufen Sie uns an — wir besprechen Ihre Situation und nennen Ihnen den Fixpreis." },
      { step: "Anfahrt", text: "Unser Techniker ist in 15–20 Minuten bei Ihnen vor Ort in Wien." },
      { step: "Türöffnung", text: "Professionelle, beschädigungsfreie Öffnung Ihrer Tür mit Spezialwerkzeug." },
      { step: "Fertig", text: "Sie sind wieder in Ihrer Wohnung — zum vereinbarten Fixpreis, ohne Überraschungen." },
    ],
    faq: [
      { q: "Was kostet eine Türöffnung in Wien?", a: "Bei einer zugefallenen Tür beginnen unsere Preise ab 60€ (Mo–Fr, 8–18 Uhr). Der genaue Fixpreis wird vorab am Telefon vereinbart." },
      { q: "Wird meine Tür bei der Öffnung beschädigt?", a: "In über 95% der Fälle können wir Ihre Tür beschädigungsfrei öffnen. Sollte ausnahmsweise ein anderer Weg nötig sein, besprechen wir das vorher mit Ihnen." },
      { q: "Wie schnell sind Sie bei einer Türöffnung vor Ort?", a: "In der Regel sind wir in 15–20 Minuten bei Ihnen. Die genaue Wartezeit teilen wir Ihnen am Telefon mit." },
    ],
  },
  "schluessel-verloren": {
    metaTitle: "Schlüssel verloren Wien — Soforthilfe 24/7 | Aufsperrdienst",
    metaDescription:
      "Schlüssel verloren in Wien? ✓ Sofortige Türöffnung ✓ Beschädigungsfrei ✓ 15–20 Min Anfahrt ✓ Faire Fixpreise ✓ Zylindertausch vor Ort. Jetzt anrufen!",
    keywords: [
      "Schlüssel verloren Wien",
      "Schlüssel vergessen Wien",
      "ausgesperrt Wien",
      "Schlüsseldienst Schlüssel verloren",
      "Wohnungsschlüssel verloren",
      "Haustürschlüssel verloren Wien",
    ],
    heroSubtitle:
      "Schlüssel verloren oder verlegt? Kein Grund zur Panik — wir öffnen Ihre Tür schnell und sicher.",
    longDescription:
      "Haben Sie Ihren Schlüssel verloren oder verlegt? Das passiert öfter als man denkt. Unsere Spezialisten haben das nötige Werkzeug, um Ihre Tür schnell und ohne Beschädigung zu öffnen. Danach empfehlen wir aus Sicherheitsgründen einen Zylindertausch — denn wenn der Schlüssel in falsche Hände gerät, ist Ihre Wohnung nicht mehr sicher. Auch den Zylindertausch erledigen wir sofort vor Ort mit hochwertigen Markenprodukten.",
    benefits: [
      "Sofortige Türöffnung — auch ohne Schlüssel",
      "Beschädigungsfreie Öffnung",
      "Zylindertausch direkt vor Ort möglich",
      "Hochwertige Marken-Zylinder (EVVA, DOM, ABUS)",
      "Faire Fixpreise — vorab am Telefon",
      "24/7 Notdienst in ganz Wien",
    ],
    process: [
      { step: "Anruf", text: "Schildern Sie uns Ihre Situation — wir beraten Sie sofort am Telefon." },
      { step: "Anfahrt", text: "Unser Techniker macht sich umgehend auf den Weg zu Ihnen." },
      { step: "Öffnung", text: "Ihre Tür wird professionell und beschädigungsfrei geöffnet." },
      { step: "Sicherheit", text: "Auf Wunsch tauschen wir den Zylinder sofort — für Ihre Sicherheit." },
    ],
    faq: [
      { q: "Muss ich das Schloss wechseln, wenn ich meinen Schlüssel verloren habe?", a: "Wir empfehlen es aus Sicherheitsgründen dringend. Wenn der Schlüssel in falsche Hände gerät, ist Ihre Wohnung nicht mehr sicher. Wir tauschen den Zylinder direkt vor Ort." },
      { q: "Was kostet die Türöffnung bei verlorenem Schlüssel?", a: "Die Türöffnung beginnt ab 60€. Ein zusätzlicher Zylindertausch wird vorab mit Ihnen besprochen." },
    ],
  },
  "schluessel-abgebrochen": {
    metaTitle: "Schlüssel abgebrochen Wien — Sofort-Service 24/7",
    metaDescription:
      "Schlüssel abgebrochen in Wien? ✓ Professionelle Entfernung ✓ Schloss meist unbeschädigt ✓ Zylindertausch vor Ort ✓ 15–20 Min da. Jetzt anrufen!",
    keywords: [
      "Schlüssel abgebrochen Wien",
      "abgebrochener Schlüssel entfernen",
      "Schlüssel steckt fest Wien",
      "Schlüsseldienst Schlüssel abgebrochen",
      "Schlüsselbruch Wien",
    ],
    heroSubtitle:
      "Schlüssel abgebrochen? Unser Techniker entfernt den abgebrochenen Schlüssel sicher und professionell.",
    longDescription:
      "Ein abgebrochener Schlüssel ist ärgerlich, aber eine häufige Situation. Unser erfahrener Techniker entfernt den abgebrochenen Schlüsselrest professionell aus dem Schloss — in den meisten Fällen ohne das Schloss zu beschädigen. Sollte ein Zylindertausch notwendig sein, haben wir hochwertige Ersatzteile von Markenherstellern direkt dabei. Innerhalb weniger Minuten ist das Problem gelöst und Ihre Tür funktioniert wieder einwandfrei.",
    benefits: [
      "Professionelle Entfernung des Schlüsselrests",
      "Schloss bleibt in den meisten Fällen unbeschädigt",
      "Ersatzzylinder von Markenherstellern direkt dabei",
      "Schnell erledigt — meist in wenigen Minuten",
      "Faire Fixpreise ohne versteckte Kosten",
      "24/7 Notdienst in Wien",
    ],
    process: [
      { step: "Anruf", text: "Beschreiben Sie kurz die Situation — Schlüssel abgebrochen, steckt im Schloss etc." },
      { step: "Anfahrt", text: "Wir sind in 15–20 Minuten bei Ihnen in Wien." },
      { step: "Entfernung", text: "Der abgebrochene Schlüsselrest wird professionell entfernt." },
      { step: "Prüfung", text: "Wir prüfen das Schloss und tauschen bei Bedarf den Zylinder direkt vor Ort." },
    ],
    faq: [
      { q: "Kann das Schloss beschädigt werden, wenn der Schlüssel abgebrochen ist?", a: "In den meisten Fällen können wir den abgebrochenen Schlüssel entfernen, ohne das Schloss zu beschädigen. Sollte ein Austausch nötig sein, besprechen wir das vorher mit Ihnen." },
      { q: "Haben Sie Ersatzschlösser dabei?", a: "Ja, unsere Techniker führen hochwertige Ersatzzylinder von EVVA, DOM und ABUS mit." },
    ],
  },
  "schloss-defekt": {
    metaTitle: "Schloss defekt Wien — Reparatur & Austausch 24/7",
    metaDescription:
      "Schloss klemmt oder defekt in Wien? ✓ Fachgerechte Reparatur ✓ Schlosstausch vor Ort ✓ Markenprodukte ✓ Faire Fixpreise ✓ 24/7 Notdienst. Jetzt anrufen!",
    keywords: [
      "Schloss defekt Wien",
      "Schloss klemmt Wien",
      "Schloss reparieren Wien",
      "Schlossreparatur Wien",
      "Schloss kaputt Wien",
      "Türschloss defekt",
    ],
    heroSubtitle:
      "Ihr Schloss klemmt, ist schwergängig oder komplett defekt? Wir reparieren oder tauschen es fachgerecht aus.",
    longDescription:
      "Ein defektes oder klemmendes Schloss ist nicht nur lästig, sondern auch ein Sicherheitsrisiko. Unsere Techniker diagnostizieren das Problem direkt vor Ort und bieten Ihnen eine fachgerechte Reparatur oder einen Austausch — zu fairen Preisen, die vorab besprochen werden. Alle Schlösser und Zylinder, die wir verbauen, sind hochwertige Markenprodukte. Ob Ihr Schloss klemmt, sich schwer drehen lässt oder gar nicht mehr funktioniert — wir finden die Lösung.",
    benefits: [
      "Schnelle Diagnose vor Ort",
      "Reparatur oder Austausch — je nach Bedarf",
      "Nur Markenprodukte (EVVA, DOM, ABUS, dormakaba)",
      "Faire Fixpreise — vorab vereinbart",
      "Keine Anfahrtskosten in Wien",
      "24/7 verfügbar",
    ],
    process: [
      { step: "Anruf", text: "Schildern Sie das Problem — wir geben eine erste Einschätzung am Telefon." },
      { step: "Anfahrt", text: "Unser Techniker ist in 15–20 Minuten bei Ihnen." },
      { step: "Diagnose", text: "Das Schloss wird vor Ort inspiziert und die beste Lösung vorgeschlagen." },
      { step: "Reparatur", text: "Fachgerechte Reparatur oder Austausch mit Markenprodukt." },
    ],
    faq: [
      { q: "Kann ein klemmendes Schloss repariert werden?", a: "In vielen Fällen ja — oft hilft eine professionelle Wartung. Wenn das Schloss zu stark verschlissen ist, empfehlen wir einen Austausch." },
      { q: "Was kostet ein Schlossaustausch?", a: "Der Preis hängt vom Schlosstyp und Zylinder ab. Wir nennen Ihnen den Fixpreis vorab am Telefon." },
    ],
  },
  schlosswechsel: {
    metaTitle: "Schlosswechsel Wien — Professionell & Fair | 24/7",
    metaDescription:
      "Schlosswechsel in Wien ✓ Nach Einbruch, Umzug oder Partnertrennung ✓ Markenprodukte ✓ Fixpreise ✓ In 15–20 Min vor Ort ✓ 24/7 Service. Jetzt anrufen!",
    keywords: [
      "Schlosswechsel Wien",
      "Schloss wechseln Wien",
      "Schloss tauschen Wien",
      "Schlosstausch Wien",
      "neues Schloss einbauen Wien",
      "Schloss austauschen lassen Wien",
    ],
    heroSubtitle:
      "Professioneller Schlosswechsel in Wien — nach Einbruch, Umzug oder bei defektem Schloss. Schnell und zu fairen Fixpreisen.",
    longDescription:
      "Ob nach einem Einbruch, einer Partnertrennung, einem Umzug oder bei einem defekten Schloss — ein Schlosswechsel gibt Ihnen Sicherheit zurück. Wir tauschen Ihr Schloss professionell und schnell mit hochwertigen Markenprodukten. Sie erhalten ein neues Schloss mit allen dazugehörigen Schlüsseln. Der genaue Preis wird vorab am Telefon besprochen — ohne versteckte Kosten.",
    benefits: [
      "Schneller Schlosswechsel vor Ort",
      "Hochwertige Markenprodukte",
      "Neue Schlüssel inklusive",
      "Fixpreis — vorab am Telefon vereinbart",
      "Ideal nach Einbruch, Umzug oder Trennung",
      "24/7 verfügbar — auch für Notfälle",
    ],
    process: [
      { step: "Anruf", text: "Beschreiben Sie Ihre Situation und den Grund für den Schlosswechsel." },
      { step: "Beratung", text: "Wir empfehlen das passende Schloss und nennen Ihnen den Fixpreis." },
      { step: "Anfahrt", text: "In 15–20 Minuten ist unser Techniker bei Ihnen in Wien." },
      { step: "Einbau", text: "Das neue Schloss wird fachgerecht eingebaut. Sie erhalten alle neuen Schlüssel." },
    ],
    faq: [
      { q: "Wie schnell kann ein Schlosswechsel durchgeführt werden?", a: "Ein Schlosswechsel dauert in der Regel 15–30 Minuten, je nach Schlosstyp." },
      { q: "Bekomme ich neue Schlüssel?", a: "Ja, selbstverständlich erhalten Sie alle neuen Schlüssel zum neuen Schloss." },
      { q: "Sollte ich nach einem Einbruch das Schloss wechseln?", a: "Unbedingt. Nach einem Einbruch ist ein Schlosswechsel essenziell, um Ihre Wohnung wieder sicher zu machen." },
    ],
  },
  zylindertausch: {
    metaTitle: "Zylindertausch Wien — Markenzylinder | 24/7 Service",
    metaDescription:
      "Zylindertausch in Wien ✓ EVVA, DOM, ABUS, dormakaba ✓ Faire Fixpreise ✓ In 15–20 Min vor Ort ✓ Standard- & Sicherheitszylinder. Jetzt anrufen!",
    keywords: [
      "Zylindertausch Wien",
      "Schließzylinder tauschen Wien",
      "Zylinder wechseln Wien",
      "Profilzylinder tauschen Wien",
      "Türzylinder Wien",
    ],
    heroSubtitle:
      "Wir tauschen Ihren Schließzylinder mit hochwertigen Markenprodukten — schnell, professionell und zu fairen Preisen.",
    longDescription:
      "Ein Zylindertausch ist eine der häufigsten Maßnahmen, um Ihre Wohnung sicherer zu machen. Ob nach Schlüsselverlust, als Upgrade auf einen Sicherheitszylinder oder weil der alte Zylinder defekt ist — wir tauschen Ihren Schließzylinder mit hochwertigen Markenprodukten von EVVA, DOM, ABUS und dormakaba. Unsere Techniker haben verschiedene Zylindertypen direkt dabei und können den Tausch sofort vor Ort durchführen.",
    benefits: [
      "Markenzylinder von EVVA, DOM, ABUS, dormakaba",
      "Standard- und Sicherheitszylinder verfügbar",
      "Einbau direkt vor Ort — kein zweiter Termin nötig",
      "Alle neuen Schlüssel inklusive",
      "Faire Fixpreise — vorab besprochen",
      "24/7 Notdienst in Wien",
    ],
    process: [
      { step: "Anruf", text: "Beschreiben Sie Ihre Tür und was Sie brauchen — wir beraten Sie sofort." },
      { step: "Angebot", text: "Wir nennen Ihnen den Fixpreis für Zylinder und Einbau." },
      { step: "Anfahrt", text: "Unser Techniker kommt mit passenden Zylindern in 15–20 Minuten." },
      { step: "Einbau", text: "Der neue Zylinder wird fachgerecht montiert. Sie bekommen alle neuen Schlüssel." },
    ],
    faq: [
      { q: "Welche Zylindermarken verwenden Sie?", a: "Wir verbauen ausschließlich Markenzylinder von EVVA, DOM, ABUS und dormakaba." },
      { q: "Wie lange dauert ein Zylindertausch?", a: "Ein Zylindertausch ist in der Regel in 10–15 Minuten erledigt." },
    ],
  },
  sicherheitszylinder: {
    metaTitle: "Sicherheitszylinder Wien — EVVA, DOM, ABUS | Einbau 24/7",
    metaDescription:
      "Sicherheitszylinder in Wien einbauen lassen ✓ EVVA, DOM, ABUS ✓ Maximaler Einbruchschutz ✓ Kostenlose Beratung ✓ Faire Preise. Jetzt anrufen!",
    keywords: [
      "Sicherheitszylinder Wien",
      "Sicherheitszylinder einbauen Wien",
      "Einbruchschutz Zylinder Wien",
      "EVVA Zylinder Wien",
      "Schließzylinder Sicherheit Wien",
    ],
    heroSubtitle:
      "Maximaler Einbruchschutz mit Sicherheitszylindern führender Hersteller — fachgerecht eingebaut in Wien.",
    longDescription:
      "Ein Sicherheitszylinder ist die erste und wichtigste Maßnahme gegen Einbruch. Wir installieren Sicherheitszylinder führender Hersteller wie EVVA, DOM und ABUS, die ein Aufbohren, Abbrechen oder Picking praktisch unmöglich machen. Unsere Techniker beraten Sie kostenlos, welcher Zylinder am besten zu Ihrer Tür und Ihren Anforderungen passt — ob für Wohnungstür, Haustür oder Geschäftsräume.",
    benefits: [
      "Sicherheitszylinder von EVVA, DOM und ABUS",
      "Schutz gegen Picking, Bohren und Abbrechen",
      "Kostenlose Beratung vor Ort",
      "Fachgerechte Montage durch Profis",
      "Verschiedene Sicherheitsstufen verfügbar",
      "Auch nachträglicher Einbau problemlos möglich",
    ],
    process: [
      { step: "Beratung", text: "Wir besprechen Ihre Anforderungen und empfehlen den passenden Zylinder." },
      { step: "Angebot", text: "Sie erhalten einen transparenten Fixpreis — ohne versteckte Kosten." },
      { step: "Einbau", text: "Fachgerechte Montage des Sicherheitszylinders vor Ort." },
      { step: "Übergabe", text: "Sie erhalten alle neuen Sicherheitsschlüssel und eine Funktionsprüfung." },
    ],
    faq: [
      { q: "Was ist der Unterschied zwischen einem normalen und einem Sicherheitszylinder?", a: "Ein Sicherheitszylinder bietet Schutz gegen gängige Einbruchsmethoden wie Picking, Bohren und Abbrechen — ein Standardzylinder nicht." },
      { q: "Lohnt sich ein Sicherheitszylinder?", a: "Absolut. Es ist die effektivste und kostengünstigste Maßnahme zum Einbruchschutz." },
    ],
  },
  sicherheitsbeschlaege: {
    metaTitle: "Sicherheitsbeschläge Wien — Einbruchschutz für Türen",
    metaDescription:
      "Sicherheitsbeschläge in Wien montieren lassen ✓ Schutzrosetten ✓ Kernziehschutz ✓ Aufbohrschutz ✓ Fachgerechte Montage ✓ Faire Preise. Jetzt anrufen!",
    keywords: [
      "Sicherheitsbeschläge Wien",
      "Schutzbeschlag Wien",
      "Schutzrosette Wien",
      "Türbeschlag Sicherheit Wien",
      "Einbruchschutz Tür Wien",
    ],
    heroSubtitle:
      "Sicherheitsbeschläge und Schutzrosetten — effektiver Einbruchschutz für Ihre Wohnungs- und Haustür in Wien.",
    longDescription:
      "Sicherheitsbeschläge und Schutzrosetten verhindern das Aufbohren und Abdrehen des Schließzylinders — eine der häufigsten Einbruchsmethoden. Wir montieren hochwertige Sicherheitsbeschläge fachgerecht an Ihrer Wohnungs- oder Haustür. In Kombination mit einem Sicherheitszylinder bieten sie optimalen Schutz gegen Einbruch. Auch ideal als Nachrüstung für bestehende Türen.",
    benefits: [
      "Schutz gegen Aufbohren und Abdrehen des Zylinders",
      "Hochwertige Markenbeschläge",
      "Einfache Nachrüstung an bestehenden Türen",
      "Ideal in Kombination mit Sicherheitszylinder",
      "Fachgerechte Montage durch Profis",
      "Verschiedene Designs verfügbar",
    ],
    process: [
      { step: "Beratung", text: "Wir prüfen Ihre Tür und empfehlen den passenden Beschlag." },
      { step: "Angebot", text: "Transparenter Fixpreis für Material und Montage." },
      { step: "Montage", text: "Fachgerechte Montage des Sicherheitsbeschlags vor Ort." },
      { step: "Prüfung", text: "Funktionsprüfung — Ihre Tür ist jetzt optimal geschützt." },
    ],
    faq: [
      { q: "Was bringt ein Sicherheitsbeschlag?", a: "Er verhindert, dass Einbrecher den Zylinder aufbohren oder abdrehen können — eine der häufigsten Einbruchsmethoden." },
      { q: "Kann ein Sicherheitsbeschlag nachgerüstet werden?", a: "Ja, bei den meisten Türen ist eine Nachrüstung problemlos möglich." },
    ],
  },
  zusatzschloesser: {
    metaTitle: "Zusatzschlösser Wien — Mehr Sicherheit für Ihre Tür",
    metaDescription:
      "Zusatzschlösser in Wien einbauen lassen ✓ Kastenschlösser ✓ Balkenschlösser ✓ Panzerriegel ✓ Fachgerechter Einbau ✓ Faire Preise. Jetzt anrufen!",
    keywords: [
      "Zusatzschloss Wien",
      "Kastenschloss Wien",
      "Balkenschloss Wien",
      "Panzerriegel Wien",
      "Türsicherung Wien",
      "zusätzliche Türsicherung Wien",
    ],
    heroSubtitle:
      "Mehr Sicherheit für Ihre Tür — Einbau von Zusatzschlössern, Kastenschlössern und Balkenschlössern in Wien.",
    longDescription:
      "Zusatzschlösser bieten eine wirksame Ergänzung zum bestehenden Türschloss und erschweren Einbrechern den Zugang erheblich. Wir bauen Kastenschlösser, Balkenschlösser und Panzerriegel fachgerecht ein. Besonders empfehlenswert für Altbauwohnungen, Erdgeschosswohnungen und Eingangstüren ohne Mehrfachverriegelung. Unsere Techniker beraten Sie, welche Lösung für Ihre Tür am besten geeignet ist.",
    benefits: [
      "Kastenschlösser, Balkenschlösser und Panzerriegel",
      "Besonders wirksam bei Altbauwohnungen",
      "Zusätzlicher Schutz zur bestehenden Verriegelung",
      "Fachgerechter Einbau durch Profis",
      "Verschiedene Modelle und Sicherheitsstufen",
      "Faire Preise — vorab besprochen",
    ],
    process: [
      { step: "Beratung", text: "Wir prüfen Ihre Tür und empfehlen das passende Zusatzschloss." },
      { step: "Angebot", text: "Sie erhalten einen transparenten Fixpreis." },
      { step: "Einbau", text: "Fachgerechter Einbau des Zusatzschlosses vor Ort." },
      { step: "Fertig", text: "Ihre Tür ist jetzt deutlich sicherer — mit allen neuen Schlüsseln." },
    ],
    faq: [
      { q: "Welches Zusatzschloss ist das richtige für mich?", a: "Das hängt von Ihrer Tür und der gewünschten Sicherheitsstufe ab. Wir beraten Sie kostenlos und empfehlen die beste Lösung." },
      { q: "Kann man ein Zusatzschloss an jeder Tür einbauen?", a: "Bei den meisten Türen ist ein Einbau möglich. Unsere Techniker prüfen das vor Ort." },
    ],
  },
  postkastenschloss: {
    metaTitle: "Postkastenschloss Wien — Öffnung & Austausch | 24/7",
    metaDescription:
      "Briefkastenschloss in Wien öffnen oder tauschen ✓ Schnell & unkompliziert ✓ Faire Preise ✓ Sofort-Service. Jetzt anrufen!",
    keywords: [
      "Postkastenschloss Wien",
      "Briefkastenschloss Wien",
      "Briefkasten öffnen Wien",
      "Briefkastenschloss tauschen Wien",
      "Postkastenschloss wechseln",
    ],
    heroSubtitle:
      "Briefkastenschloss defekt oder Schlüssel verloren? Wir öffnen und tauschen Ihr Postkastenschloss schnell und unkompliziert.",
    longDescription:
      "Ob der Schlüssel verloren ist oder das Briefkastenschloss defekt — wir helfen sofort. Unsere Techniker öffnen Ihren Briefkasten professionell und tauschen das Schloss bei Bedarf direkt vor Ort aus. Ein einfacher und schneller Service, der keinen zweiten Termin erfordert. Gerade bei Mehrparteienhäusern ist ein funktionierender Briefkasten wichtig.",
    benefits: [
      "Professionelle Öffnung des Briefkastens",
      "Schlosstausch direkt vor Ort",
      "Kein zweiter Termin nötig",
      "Schnell und unkompliziert",
      "Faire Preise — vorab genannt",
      "Auch für Mehrparteienhäuser",
    ],
    process: [
      { step: "Anruf", text: "Beschreiben Sie das Problem — wir nennen Ihnen den Preis." },
      { step: "Termin", text: "Wir kommen zeitnah zu Ihnen." },
      { step: "Öffnung", text: "Professionelle Öffnung des Briefkastens." },
      { step: "Austausch", text: "Bei Bedarf wird das Schloss sofort getauscht — mit neuem Schlüssel." },
    ],
    faq: [
      { q: "Kann man ein Briefkastenschloss einfach tauschen?", a: "Ja, wir tauschen Briefkastenschlösser schnell und unkompliziert direkt vor Ort." },
    ],
  },
  "hilfe-nach-einbruch": {
    metaTitle: "Hilfe nach Einbruch Wien — Sofort-Notdienst 24/7",
    metaDescription:
      "Einbruch in Wien? ✓ Sofortige Erstversorgung ✓ Tür wieder verschließbar ✓ Schlosswechsel vor Ort ✓ Sicherheitsberatung ✓ 24/7 Notdienst. Jetzt anrufen!",
    keywords: [
      "Hilfe nach Einbruch Wien",
      "Einbruch Wien Schlüsseldienst",
      "Tür nach Einbruch reparieren Wien",
      "Schloss nach Einbruch tauschen Wien",
      "Notdienst nach Einbruch Wien",
      "Einbruchschaden Wien",
    ],
    heroSubtitle:
      "Nach einem Einbruch zählt jede Minute — wir machen Ihre Wohnung sofort wieder sicher.",
    longDescription:
      "Ein Einbruch ist ein Schock. Wir verstehen das und reagieren sofort. Unsere Erstversorgung umfasst: Wohnungstüren werden sofort wieder verschließbar gemacht, abgedrehte Schließzylinder ersetzt, aufgebrochene Schlösser getauscht. Unsere Techniker sind geschult, in solchen Situationen schnell und professionell zu handeln. Zusätzlich beraten wir Sie, welche weiteren Sicherheitsmaßnahmen sinnvoll sind, um zukünftige Einbrüche zu verhindern.",
    benefits: [
      "Sofortige Erstversorgung — Tür wieder sicher",
      "Schlosswechsel und Zylindertausch vor Ort",
      "Sicherheitsberatung für zukünftigen Schutz",
      "Einfühlsamer und professioneller Service",
      "Dokumentation für Versicherung möglich",
      "24/7 Notdienst — wir kommen sofort",
    ],
    process: [
      { step: "Notruf", text: "Rufen Sie uns an — wir kommen sofort zu Ihnen nach dem Einbruch." },
      { step: "Sicherung", text: "Ihre Tür wird sofort wieder verschließbar gemacht." },
      { step: "Austausch", text: "Beschädigte Schlösser und Zylinder werden direkt vor Ort getauscht." },
      { step: "Beratung", text: "Wir empfehlen weitere Sicherheitsmaßnahmen für die Zukunft." },
    ],
    faq: [
      { q: "Was soll ich nach einem Einbruch zuerst tun?", a: "Zuerst die Polizei rufen, dann uns anrufen. Wir machen Ihre Tür sofort wieder sicher." },
      { q: "Kann ich die Kosten bei der Versicherung einreichen?", a: "Ja, wir stellen Ihnen eine detaillierte Rechnung aus, die Sie bei Ihrer Versicherung einreichen können." },
    ],
  },
  sicherheitsberatung: {
    metaTitle: "Sicherheitsberatung Wien — Kostenlos vom Experten",
    metaDescription:
      "Kostenlose Sicherheitsberatung in Wien ✓ Einbruchschutz-Tipps ✓ Schlossempfehlung ✓ Schwachstellen-Analyse ✓ Vom Profi. Jetzt Termin vereinbaren!",
    keywords: [
      "Sicherheitsberatung Wien",
      "Einbruchschutz Beratung Wien",
      "Sicherheitscheck Wien",
      "Türsicherheit Beratung Wien",
      "Einbruchschutz Wien",
    ],
    heroSubtitle:
      "Kostenlose Sicherheitsberatung vom Profi — wir zeigen Ihnen, wie Sie Ihre Wohnung in Wien optimal schützen.",
    longDescription:
      "Prävention ist der beste Einbruchschutz. Unsere kostenlose Sicherheitsberatung umfasst eine Analyse Ihrer aktuellen Sicherheitslage, Empfehlungen für Schlösser und Zylinder, sowie praktische Alltagstipps. Von der Wahl des richtigen Schlosses bis zu Verhaltenstipps — wir helfen Ihnen, Einbrechern das Leben schwer zu machen. Vereinbaren Sie einen unverbindlichen Beratungstermin.",
    benefits: [
      "Komplett kostenlos und unverbindlich",
      "Analyse Ihrer aktuellen Tür-Sicherheit",
      "Empfehlungen für Schlösser und Zylinder",
      "Praktische Tipps für den Alltag",
      "Individuelle Beratung für Ihre Situation",
      "Angebot für Sofort-Umsetzung vor Ort",
    ],
    process: [
      { step: "Termin", text: "Vereinbaren Sie einen kostenlosen Beratungstermin." },
      { step: "Analyse", text: "Wir prüfen Ihre Tür, Schlösser und mögliche Schwachstellen." },
      { step: "Empfehlung", text: "Sie erhalten eine individuelle Sicherheitsempfehlung." },
      { step: "Umsetzung", text: "Auf Wunsch setzen wir die Maßnahmen sofort vor Ort um." },
    ],
    faq: [
      { q: "Kostet die Sicherheitsberatung etwas?", a: "Nein, unsere Sicherheitsberatung ist komplett kostenlos und unverbindlich." },
      { q: "Wie lange dauert eine Sicherheitsberatung?", a: "In der Regel 15–30 Minuten. Wir nehmen uns die Zeit, die Sie brauchen." },
    ],
  },
};

/* ───────── Static params for build ───────── */
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/* ───────── Metadata ───────── */
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = serviceData[slug];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      locale: "de_AT",
      type: "website",
    },
  };
}

/* ───────── Page ───────── */
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const data = serviceData[slug];
  if (!data) notFound();

  const Icon = iconMap[service.icon];

  /* JSON-LD structured data for SEO */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: data.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      email: COMPANY.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address,
        postalCode: COMPANY.zip,
        addressLocality: COMPANY.city,
        addressCountry: "AT",
      },
      areaServed: {
        "@type": "City",
        name: "Wien",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="pt-[72px]">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-sm text-text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href="/leistungen"
              className="hover:text-primary transition-colors"
            >
              Leistungen
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-text-primary font-medium">
              {service.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <Icon className="h-10 w-10 text-gold-light" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              {service.title} in Wien
            </h1>
            <p className="mt-4 text-lg text-white/80">{data.heroSubtitle}</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CallButton size="lg" />
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="h-4 w-4" />
                <span className="text-sm">In 15–20 Min vor Ort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-border bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 sm:gap-10">
          {[
            { icon: Clock, text: "24/7 Notdienst" },
            { icon: Euro, text: "Faire Fixpreise" },
            { icon: MapPin, text: "Wien & Umgebung" },
            { icon: ShieldCheck, text: "Geprüfter Betrieb" },
          ].map(({ icon: BadgeIcon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-sm text-text-secondary"
            >
              <BadgeIcon className="h-4 w-4 text-primary" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Left: Description + Benefits */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                  {service.title} — Professionell und zuverlässig
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  {data.longDescription}
                </p>
              </SectionReveal>

              {/* Benefits */}
              <SectionReveal delay={0.1}>
                <div className="mt-10">
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    Ihre Vorteile
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {data.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>

              {/* Process */}
              <SectionReveal delay={0.15}>
                <div className="mt-12">
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    So funktioniert's
                  </h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {data.process.map((item, i) => (
                      <div
                        key={item.step}
                        className="rounded-xl border border-border bg-bg-secondary p-5"
                      >
                        <div className="mb-2 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                            {i + 1}
                          </span>
                          <span className="font-heading font-semibold text-text-primary">
                            {item.step}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Right: CTA Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-border bg-bg-secondary p-6">
                  <h3 className="font-heading text-lg font-bold text-text-primary">
                    Jetzt Hilfe holen
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    Rufen Sie uns an — wir sind rund um die Uhr für Sie da.
                    Faire Fixpreise, keine Anfahrtskosten.
                  </p>
                  <div className="mt-5">
                    <CallButton size="md" className="w-full" />
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-text-muted">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5" />
                      <span>24/7 erreichbar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>In 15–20 Min in Wien</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Euro className="h-3.5 w-3.5" />
                      <span>Fixpreise ab 60€</span>
                    </div>
                  </div>
                </div>

                {/* Other services */}
                <div className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="font-heading text-base font-bold text-text-primary">
                    Weitere Leistungen
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {SERVICES.filter((s) => s.slug !== slug)
                      .slice(0, 5)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/leistungen/${s.slug}`}
                            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-text-secondary transition-colors hover:bg-bg-secondary hover:text-primary"
                          >
                            <ArrowRight className="h-3.5 w-3.5" />
                            {s.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <Link
                    href="/leistungen"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                  >
                    Alle Leistungen
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {data.faq.length > 0 && (
        <section className="bg-bg-secondary py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Häufige Fragen zu {service.title}
              </h2>
            </SectionReveal>
            <div className="mt-8 space-y-4">
              {data.faq.map((item, i) => (
                <SectionReveal key={item.q} delay={i * 0.05}>
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="font-heading text-base font-semibold text-text-primary">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {item.a}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {service.title} in Wien gesucht?
          </h2>
          <p className="mt-3 text-white/80">
            Rufen Sie uns jetzt an — wir sind rund um die Uhr für Sie da. Faire
            Fixpreise, keine Anfahrtskosten.
          </p>
          <div className="mt-6">
            <CallButton size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
