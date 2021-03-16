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
