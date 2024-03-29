import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_kiss: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "kiss" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_kiss.childImageSharp.fluid} />
            </Art>
            <div align="left">
            <h3>09.09.2022</h3>
                <br/>
                <h3>Lieber Spät als Nie - Fotos!</h3>
                <p>
                <br/>                
                Wir danken allen Teilnehmern von ganzem Herzen für diesen zauberhaften Tag! Wir hoffen Ihr hattet genauso viel Spaß wie wir! 
                Um halb vier Uhr morgens sind wir auf unsere Couch gefallen und haben den Tag nochmal revue passieren lassen und konnten gar nicht glauben - wie toll alles war!                
                <br/>
                <br/>
                Ein gewaltiges Dankeschön müssen wir hier nochmal an unsere Gametlinge Julia, Martin und Franzi aussprechen. Ohne euch Drei wäre dieser Tag niemals so gut abgelaufen, sei es das Programm, die Gästebetreuung oder das Catering!
                <br/>
                <br/>
                Auch ein großes Dankeschön wollen wir an Daniel ausrichten, welcher uns mit so vielen, tollen Bildern gesegnet hat. Den Link dazu findet Ihr <a href="https://www.picdrop.com/danielhinzgucker/qXq8pnLnUT">Hier!</a> 
                <br/>
                <br/>
                Wir hoffen euch alle in verschiedensten Konstellationen wiederzusehen und wir haben uns schon darauf geeinigt - Wir werden dies in ähnlicher Weise mal wiederholen - Es hat einfach zu viel Spaß gemacht!
                <br/>
                <br/>
                Fühlt euch ganz innig gedrückt - Tim und André
                </p>
            </div>
            <div>
              <h2>Es findet statt - am 16.07.2022!</h2>
              <p>
                In nicht mal einem Monat geht es los. Wir werden uns bei allen Beteiligten über die üblichen Kommunikationskanäle melden und bitten um eine zeitnah und eine verbindliche Rückmeldung!                
              </p>
              <p>
                Wir benötigen übrigens noch fleißige Kuchen-/Tortenbäcker*innen! Bitte gebt uns Bescheid ob ihr uns dabei unterstützen könnt und wollt! Insgesamt bräuchten wir wahrscheinlich 13 Kuchen/Torten.
              </p>
              <br/>
            </div>
            <br/>
            <div>
              <h2>Wir sagen Ja</h2>
              <h2>(war auch überfällig)</h2>
              <p>
                Wir laden euch herzlich zu unserer Hochzeitsfeier ein. Die Trauung wird vorher im kleinen Kreis stattfinden. 
                Hier findet ihr alles Wissenswerte über diese Veranstaltung und wir freuen uns, bald mit euch persönlich zu feiern!
              </p>
              <br/>
              <pc>
              ⓘ Wir empfehlen ein Lesezeichen zu setzen, da wir die Seite ggf. aktualisieren um euch auf dem Laufenden halten und regelmäßig die News zu prüfen! :) 
              </pc>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
    props.inverse &&
    `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;


export default About;
