import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Place = () => (
  <StaticQuery
    query={graphql`
      query {
        art_island: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "island" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="place">
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_island.childImageSharp.fluid} />
            </Art>
            <div align="left">
              <h2>Ort & Zeit</h2>
              <div align="left">
                <h3>Wann?</h3>
                <p>26.06.2021<br /><br />
                14:00 Uhr s.t. bis Open-End
                <br></br>
                s.t. steht für sine tempore = also nicht ab, sondern um! Bitte seid pünktlich :)
                </p>
                <br />
                <br />
                <h3>Wo?</h3>
                <p>
                  Insel der Jugend <br />
                Alt-Treptow 6<br />
                12435 Berlin<br />

                 >> Siehe hier <a href="https://www.google.com/maps/place/Insel+der+Jugend/@52.4872202,13.4630464,14z/data=!3m1!4b1!4m5!3m4!1s0x47a84f1f115ef22d:0x7e1c145eb641cb36!8m2!3d52.487222!4d13.480556" target="_blank">Google Maps</a>
                  <br />
                  <br />
                Parkplatz ist direkt vor Ort vorhanden
                </p>
                <br /><br />
                <h3>Öffentliche Anbindung</h3>
                <br></br>
                <p>Zu Fuß:</p>
                <p>vom S-Bhf Plänterwald (1,2 km) </p>
                <p>&nbsp;</p>
                <p>vom S-Bhf Treptower Park (2,1 km)</p>
              </div>
            </div>
          </Grid>
        </Container>
      </Section >
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
  max-width: 600px;
  width: 100%;
`;

export default Place;
