import React from 'react';

import { Section, Container } from '@components/global';


const Contact = () => (
  <Section id="contact">
    <Container>
        <h1 style={{ marginBottom: 40 }}>Kontakt</h1>
        <p>        
            Für Nachfragen, Vorschläge und Anmeldung für Programmpunkte stehen euch vier tolle Menschen aus unserem Freundeskreis zur Verfügung. 
            Schreibt einfach eine Nachricht an: 
        </p>
        <br></br>
        <pc>
            <a href= "mailto:gameten.gedoens@gmail.com">gameten.gedoens@gmail.com</a>
        </pc>
        <br></br>
        <br></br>
        <p>
            Bitte habt Verständnis, wenn die Beantwortung von Anfragen etwas dauern kann. 
            Wir selber werden die Nachrichten nicht lesen um uns die Überraschung nicht zu nehmen.
        </p>
    </Container>
  </Section>
);

export default Contact;
