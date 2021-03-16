import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Place,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = ['About', 'News', 'Place', 'Attendance', 'Meals', 'Presents', 'FAQ', 'Contact']
const NAV_TITLES = { 'About': 'Allgemein',  'News' : 'Neuigkeiten','Place': 'Ort & Zeit', 'Attendance': 'Teilnahme', 'Meals': 'Buffet', 'Presents': 'Geschenke', 'FAQ': 'FAQ', 'Contact': 'Kontakt' }

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {NAV_TITLES[item]}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;
    

    return (
      <Nav {...this.props}>               
        <Mobile> <StyledContainer>
          <Place>Gameten-Gedöns</Place>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}> <div>☰</div>
            </button>
          </Mobile>

          
          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
