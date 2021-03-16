import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const meals = [
  {
    title: 'Vorspeisen',
    content: () => (
      <>
        <li> Linsensalat mit Quinoa und Pfirsich <sup>2</sup>  </li>
        <li> Rucola- Strauchtomatensalat mit Balsamico <sup>2</sup>  </li>
        <li> Antipastigemüse della mamma <sup>2</sup>  </li>
        <li> Staudenselleriesalat mit Mango und Cranberries <sup>2</sup>  </li>
        <li> Griechischer Hirtensalat <sup>1</sup>  </li>
        <li> Glutenfreies Brot, kleine Maisbrötchen, gesalzene Butter und Frischkäse <sup>1, 2</sup>  </li>
      </>
    ),
  },
  {
    title: 'Hauptspeisen',
    content: () => (
      <>
        <li> Thai Zitronengrassuppe mit Kokos und Hühnchen </li>
        <li> Rinderhüftstreifen mit Waldpilzen in Kräuterjus </li>
        <li> Putenbraten in Estragonsauce </li>
        <li> Süss-saures Gemüse mit Ananas und Koriander <sup>2</sup> </li>
        <li> Griechisches Gemüse mit Feta überbacken <sup>1</sup>  </li>
        <li> Kleine Backkartoffeln, Duftreis, Kartoffelgratin <sup>1, 2</sup>  </li>
      </>
    ),
  },
  {
    title: 'Desserts',
    content: () => (
      <>
        <li> Mousse au chocolat auf Waldbeerenragout <sup>1</sup>  </li>
        <li> Mango Panna cotta mit Crunch <sup>1</sup>  </li>
        <li> Aufgeschnittene Früchte <sup>2</sup> </li>
        <li> Kokosmousse auf Kirschen <sup>2, lf</sup> </li>
      </>
    ),
  },
];

const Meals = () => (
  <Section id="meals">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Buffet</h1>
      <p>
        Zu Beginn der Veranstaltung um 15:00 Uhr werden wir mit einem Kaffee- und Kuchengedeck starten. Hierfür werden wir noch eine Liste hochladen, in der sich einige fleißige Bäcker*Innen Eintragen können. 
        <p />
        <p>&nbsp;</p>
        <p>
          Zum Abend hin wollen wir euch mit folgendem Buffet verwöhnen (Änderungen vorbehalten):
        </p>

      </p>
      <div>
        {meals.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
      <br />
      <p>
        ⓘ Alle Speisen werden glutenfrei zubereitet!
      </p>
      <p>Legende: Vegetarisch <sup>1</sup>, Vegan <sup>2</sup>, laktosefrei<sup>lf</sup></p>
    </Container>
  </Section>
);

export default Meals;
