import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Presents = () => (
  <StaticQuery
    query={graphql`
      query {
        art_tea: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tea" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="presents">
        <Container>
          <Grid>
            <div>
              <h2>Geschenke und andere Nettigkeiten</h2>
              <p>
                Bitte nehmt es uns nicht übel, aber wir haben einen mehr als vollständigen Hausstand. <br /><br />
                Bitte spendet doch eine für euch angemessene Summe auf dieses <a href="https://www.paypal.com/paypalme/gametengoldkiste" target="_blank">PayPal-Konto</a>,
                oder drückt uns auf der Feier etwas in die Hand. :)
              </p>
            </div>
            <Art>
              <Img fluid={data.art_tea.childImageSharp.fluid} />
            </Art>
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

export default Presents;
