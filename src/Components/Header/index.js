import React, { useState, useEffect } from 'react';
import Logo from "../../assets/logobranco.png";
import { Container, Logo1, SectionContainer, IconMail, IconContainer } from './styled';
import { Link } from 'react-scroll';
import Menu from '../Menu';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container style={{ height: scrolling ? '9%' : '18%' }}>
        <Link to="home" spy={true} smooth={true} duration={500}>
      <Logo1
        style={{
          minWidth: scrolling ? 'auto' : '11%',
          height: scrolling ? '7vh' : '11vh',
        }}
        src={Logo}
        alt="Logotipo"
     /></Link>
      <SectionContainer>
          <Link to="home" spy={true} smooth={true} duration={500}>HOME</Link>
          <Link to="consultas" spy={true} smooth={true} duration={500}>CONSULTAS</Link>
          <Link to="contato" spy={true} smooth={true} duration={500}>CONTATO</Link>
          <Link to="sobre-nos" spy={true} smooth={true} duration={500}>SOBRE NÓS</Link>
      </SectionContainer>
      <IconContainer>
        <Link to="contato" spy={true} smooth={true} duration={500}><IconMail title='Envie um email!'/></Link>
      </IconContainer>

      {windowWidth <= 768 && <Menu />}
    </Container>
  );
}

export default Header;

