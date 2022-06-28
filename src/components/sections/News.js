import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Container } from '@components/global';

const News = () => (

  <StaticQuery
  query={graphql`
    query {
      art_together: file(
        sourceInstanceName: { eq: "art" }
        name: { eq: "together" }
      ) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
  render={data => (
    <Section id="news">
          <Container>
          <Grid>
            <div>
            <h2>Neuigkeiten</h2>
            <div>              
                <h3>28.06.2022</h3>
                <br/>
                <h3>Kleine Bitte an alle Eltern mit Kindern</h3>
                <p>
                <br/>                
                Wir würden gerne in einem separaten Raum (hier ist auch eine der Bars) eine Spielecke für die Kleinen einrichten, wo Sie am Abend bei Bedarf auch schlafen können. Die Bar und die Tür zum Raum sind dann am Abend selbstverständlich geschlossen. Zu diesem Zweck würden wir euch Eltern bitten eine überschaubare Menge an Spielzeugen und Kinderbettchen bei Bedarf mitzubringen.
                </p>
                <br/>
                <h3>Aktuelle Kuchenliste</h3>
                <p>    
                  Folgende Kuchen/Torten sind schon bestätigt:                  
                <br/>                
                <br/>

                <table>
                  <thead>
                    <tr>
                      <th>Bäcker:innen</th>
                      <th>ㅤㅤㅤㅤㅤㅤ</th>
                      <th>Kuchen/Torte(n)</th>
                    </tr>
                  </thead>
                  <tbody ali >
                    <tr>
                      <td>Lisa V.</td>
                      <td/>
                      <td>Bananenkuchen mit Schokostückchen</td>    
                    </tr>
                    <tr>
                      <td>Tamara</td>
                      <td/>
                      <td>glutenfreier Käse-Mandarinen Kuchen</td>
                    </tr>
                    <tr>
                      <td>Julia</td>
                      <td/>
                      <td>veganer Butterkuchen</td>
                    </tr>
                    <tr>
                      <td>Ann-Cathrin</td>
                      <td/>
                      <td>Marzipan-Blaubeer Torte</td>
                    </tr>
                    <tr>
                      <td>Martin</td>
                      <td/>
                      <td>veganer Schokokuchen</td>
                    </tr>
                    <tr>
                      <td>Tim</td>
                      <td/>
                      <td>Himbeer-Mascarpone-Torte, Espresso-Torte</td>
                    </tr>
                    <tr>
                      <td>Lana</td>
                      <td/>
                      <td>Karamel Cheesecake</td>
                    </tr>
                    <tr>
                      <td>Sarah</td>
                      <td/>
                      <td>Mandarinenkuchen</td>
                    </tr>
                    <tr>
                      <td>Roswitha</td>
                      <td/>
                      <td>Nusskuchen</td>
                    </tr>
                  </tbody>
                </table>
              </p> 
              <br/>
              <br/>
            </div>                          
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


export default News;
