import React, { useState } from 'react';
import { HamburgerButton, MenuItems, SectionContainer, IconMenu, IconCloseMenu } from './styled';
import { Link } from 'react-scroll';


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
<HamburgerButton onClick={toggleMenu}>
  {isOpen ? <IconCloseMenu /> : <IconMenu />}
</HamburgerButton>
      <MenuItems style={{ width: isOpen ? '50%' : '0' }}>
        <SectionContainer>
          <Link to="home" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
          <Link to="consultas" spy={true} smooth={true} duration={500}>
            CONSULTAS
          </Link>
          <Link to="contato" spy={true} smooth={true} duration={500}>
            CONTATO
          </Link>
          <Link to="sobre-nos" spy={true} smooth={true} duration={500}>
            SOBRE NÓS
          </Link>
        </SectionContainer>
      </MenuItems>
    </div>
  );
};

export default HamburgerMenu;
