import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Was sind denn bitte Gameten?',
    content: () => (
      <>
      Gamet ist ein Begriff aus der Biologie und bedeutet auf altgriechisch „Ehemann“, hierbei handelt es sich um Keimzellen zur Fortpflanzung. <br />
      Da es bei dieser Hochzeit keine 'Braut' gibt, sehen wir uns selbst nicht als 'Bräutigame'.
      </>
    ),
  },

  {
    title: 'Wo kann ich schlafen?',
    content: () => (
      <>
        Tretet einfach mit uns in Kontakt, wir haben einige Schlafplätze innerhalb der Familie anzubieten. <br />
        Ansonsten gibt es auch günstige Hostels und Hotels in Friedrichshain, z.B. das <a href="https://www.google.com/travel/hotels/Berlin/entity/ChgI0_m7ubW43-DOARoLL2cvMXRnbHhfenEQAQ?g2lb=2502548%2C4258168%2C4260007%2C4270442%2C4274032%2C4305595%2C4306835%2C4317915%2C4328159%2C4358983%2C4364503%2C4366684%2C4367954%2C4371334%2C4381263%2C4386665%2C4395590%2C4397706%2C4398672%2C4399105%2C4270859%2C4284970%2C4291517%2C4316256%2C4356900&hl=de&gl=de&un=1&ap=SAEqKAoSCc2HtDvLPEpAEbcfCSbE5SpAEhIJwJnwvLdHSkARtx9F6t8UK0AwAlq3AwoFCJYBEAAiA0VVUioWCgcI5A8QBxgbEgcI5A8QBxgcGAEoALABAGgBigEoChIJboXv9s42SkARtx-VVlfSKkASEgm_2K18qExKQBG3Hw3fjjArQJoBCBIGQmVybGluogESCggvbS8wMTU2cRIGQmVybGluqgE1CgIIIRIECBUYARIECA0YARIECGcYARICCFUSAggPEgIIWxIDCJQCEgIILxICCFoSAghUGAKqAQYKAghiGACqARMKAggSEgMImwESAghoEgIIaRgBqgEKCgIIFBICCBsYAaoBEgoCCBwSAghzEgIINhICCCkYAaoBCgoCCCUSAgh1GAGqARoKAggREgIIKhICCEASAgg4EgIIVxICCAIYAaoBKAoCCC4SAwiAARICCDsSAghWEgIIPRIDCIEBEgIIAxICCAwSAggnGAGqAREKAwiuARIDCLMBEgMIsgEYAaoBBwoDCKcBGACqARYKAwipARIDCKsBEgMIqgESAwisARgBqgEGCgIIRhgAqgEPCgIIUBIDCIQBEgIITxgBqgEMCgMIowESAwikARgBqgEHCgMI_QEYAMIBAhADkgECIAFoAA&q=ibis%20hotel%20berlin&rp=ogEGQmVybGluOAFAAUgD&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&hrf=CgUIlgEQACIDRVVSKhYKBwjkDxAHGBsSBwjkDxAHGBwYASgAsAEAaAGKASgKEgnNh7Q7yzxKQBG3HwkmxOUqQBISCcCZ8Ly3R0pAEbcfRerfFCtAmgEIEgZCZXJsaW6iARIKCC9tLzAxNTZxEgZCZXJsaW6qATUKAgghEgQIFRgBEgQIDRgBEgQIZxgBEgIIVRICCA8SAghbEgMIlAISAggvEgIIWhICCFQYAqoBBgoCCGIYAKoBEwoCCBISAwibARICCGgSAghpGAGqAQoKAggUEgIIGxgBqgESCgIIHBICCHMSAgg2EgIIKRgBqgEKCgIIJRICCHUYAaoBGgoCCBESAggqEgIIQBICCDgSAghXEgIIAhgBqgEoCgIILhIDCIABEgIIOxICCFYSAgg9EgMIgQESAggDEgIIDBICCCcYAaoBEQoDCK4BEgMIswESAwiyARgBqgEHCgMIpwEYAKoBFgoDCKkBEgMIqwESAwiqARIDCKwBGAGqAQYKAghGGACqAQ8KAghQEgMIhAESAghPGAGqAQwKAwijARIDCKQBGAGqAQcKAwj9ARgAwgECEAOSAQIgAQ" target="_blank">Ibis Hotel</a>.
      </>
    ),
  },
  {
    title: 'Was soll ich anziehen?',
    content: () => (
      <>Es muss kein Anzug oder Kleid sein, aber über eine leicht festliche Garderobe würden wir uns sehr freuen.
      Ein Profi-Fotograf wird anwesend sein und angemessen viele Bilder von uns und unseren Gästen machen.
      </>
    ),
  },
  {
    title: 'Darf ich Fotos machen?',
    content: () => (
      <>Ihr könnt natürlich Schnappschüsse mit euren Handys und Kameras machen, aber wir bitten euch lieber mit euren Augen den Tag zu genießen.
      </>
    ),
  }, 
  {
    title: 'Darf ich für euch ein Programm veranstalten?',
    content: () => (
      <>Definitiv - Ja! Wer Musik, ein Theaterstück aufführen oder ein Spiel spielen möchte, ist herzlich dazu eingeladen, etwas vorzubereiten.
        <br /><br /> Bitte sprecht euch hierbei mit unseren <a href= "mailto:gameten.gedoens@gmail.com">Gametlingen</a> ab, welche den Gesamtablauf der Veranstaltung im Auge behalten. 
        <br /><br />
        ⓘ Wir möchten an unserem Ehrentag nicht vorgeführt werden - Sämtliche traditionellen Hochzeitsspiele, 
        wie Herzen mit der Nagelscheere ausschneiden, würden uns nicht gefallen.
      </>
    ),
  },
  {
    title: 'Darf ich die Vogelhochzeit oder eine selbst umgedichtete Variation zum Besten geben?',
    content: () => (
      <>
        Nein! ----------- Niemand möchte dieses Lied in Verbindung mit Hochzeiten mehr hören!
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Offene Fragen</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
