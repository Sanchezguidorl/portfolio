import { Navbar } from "react-bootstrap";
import { MouseEvent } from 'react';
import logo from "../../assets/images/capibara-logo.png";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";

function Header() {
  const [headerSticky, setHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setHeaderSticky(true);
      } else {
        setHeaderSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId || '');

    if (targetElement) {
      const offset = 160;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {headerSticky && <div style={{ height: "120px" }}></div>}
      <Navbar
        id="Header"
        collapseOnSelect
        expand="lg"
        className={`bg-magenDark border-bottom border-cyan ${
          headerSticky ? "header-sticky" : ""
        }`}
      >
        <Container className="">
          <Navbar.Brand href="#home" className="text-magenLight">
            <img src={logo} className="logo-img-header w-100" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-flex justify-content-end"
          >
            <Nav className="">
              <a
                onClick={scrollToSection}
                href={"#Presentation"}
                className="text-magenLight fs-6 text-uppercase text-decoration-none px-3 py-2 brightness"
              >
                INICIO
              </a>
              <a
                onClick={scrollToSection}
                href={"#Studies"}
                className="text-magenLight fs-6 text-uppercase text-decoration-none px-3 py-2 brightness"
              >
                ESTUDIOS
              </a>
              <a
                onClick={scrollToSection}
                href={"#Projects"}
                className="text-magenLight fs-6 text-uppercase text-decoration-none px-3 py-2 brightness"
              >
                PROYECTOS
              </a>
              <a
                onClick={scrollToSection}
                href={"#Presentation"}
                className="text-magenLight fs-6 text-uppercase text-decoration-none px-3 py-2 brightness"
              >
                SOBRE MI
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
