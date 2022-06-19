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
                <h3>19.06.2022 - Aktuelle Kuchenliste</h3>
                <br/>
                <p>    
                  Folgende Kuchen/Torten sind schon bestätigt:                  
                <br/>                

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
    <td>noch nicht bekannt</td>
  </tr>
  <tr>
    <td>Ann-Cathrin</td>
    <td/>
    <td>noch nicht bekannt</td>
  </tr>
  <tr>
    <td>Martin</td>
    <td/>
    <td>noch nicht bekannt</td>
  </tr>
  <tr>
    <td>Tim</td>
    <td/>
    <td>Himbeer-Mascarpone-Torte, Espresso-Torte</td>
  </tr>
</tbody>
</table>
                </p> 
                <br/>
                <br/>
              </div>            
              <div>              
                <h3>25.04.2021</h3>
                <p>                
                  <br/>
                  Liebe Gäste, 
                  <br/>                
                  wie ihr sicher schon vermutet habt hat sich die aktuelle Covid-19-Situation leider noch nicht entspannt. Wir haben deshalb beschloßen die Feier um ein ganzes Jahr zu verlegen. 
                  Der neue Termin ist nun der:                   
                  <br/>
                  <br/>
                    <center>
                        <h3>16.07.2022</h3>
                      </center>
                  <br/>
                  <br/>
                  Wir hoffen das sich bis zu diesem Datum alles normalisiert hat und wir ohne Bedenken miteinander feiern und auch einander  wieder nah sein können. Wir halten euch selbstverständlich weiterhin über alle Neuigkeiten auf dem Laufenden und hoffen euch auch abseits der geplanten Feier schon vorher wiederzusehen.
                  <br/>
                  Seit herzlichst gedrückt, von euren Gametlingen Tim und André
                </p> 
                <br/>
                <br/>
              </div>
              <div>              
                <h3>19.01.2021</h3>
                <p>                
                <Art >
                  <Img fluid={data.art_together.childImageSharp.fluid} />
                </Art>
                  <br/>
                  Am 12.1.21 haben wir uns nun getraut. Wir danken allen die da waren oder an uns in jeglicher Form gedacht haben.
                  <br/>                
                  Bleibt Gesund und wir hoffen immernoch auf das Beste im Sommer!
                  <br>
                  </br>                  
                  Eure Mr. und Mr. Vallentin
                </p> 
              </div>
              <br></br>
              <br></br>
              <div>              
                <h3>26.12.2020</h3>
                <p>
                  Wie es leider zu erahnen war, dürfen weiterhin nur wir beide bei der Standesamtlichen Trauung anwesend sein. Aufgrund der aktuellen Präventiv-Maßnahmen werden wir uns auch nur mit unseren Eltern treffen. 
                    <br/>
                    <br/> 
                  Sobald es sich ergibt, feiern wir gerne auch diesen Anlass mit unseren Goldkarten-Teilnehmern. 
                </p> 
                <br/>
                <br/>
                <p> 
                  Wir wünschen euch dennoch frohe Feiertage und einen guten Rutsch ins hoffentlich deutlich bessere Jahr.
                </p>
              </div>
                <br/>
                <br/>
                <div>
                  <h3>05.11.2020</h3>
                  <p>
                    Aktuell dürfen durch Covid-19, nur das Gametenpaar (also nur Tim und André) bei der standesamtlichen Trauung dabei sein. 
                    Wir versuchen es momentan romantisch zu betrachten. 
                  </p> 
                  <br/>
                  <p> 
                    Über eventuelle Änderungen bezüglich des darauf geplanten Imbisses halten wir euch selbstverständlich auf dem Laufenden!                   
                  </p>
                  <br/>
                  <p> 
                    Bleibt gesund und seit herzlich gedrückt!
                  </p>
                </div>
                <br/>
                <br/>
                <div>            
                  <h3>08.07.2020</h3>
                  <p>
                    Die Einladungskarten sind verschickt!  <br></br>
                    Bitte tragt euch sobald wie möglich in die Teilnehmerliste ein! :) 
                  </p>
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
