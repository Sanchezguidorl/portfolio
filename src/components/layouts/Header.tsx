import { Navbar } from "react-bootstrap";
import { MouseEvent } from "react";
import logo from "../../assets/images/capibara-logo.webp";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [headerSticky, setHeaderSticky] = useState(false);
  const navigate = useNavigate();
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

  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId || "");

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
        expand="md"
        className={`bg-magenDark border-bottom border-cyan ${
          headerSticky ? "header-sticky" : ""
        }`}
      >
        <Container className="">
          <Navbar.Brand href="/" className="text-magenLight">
            <img src={logo} className="logo-img-header w-100" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 d-flex justify-content-end">
              <a
                onClick={scrollToSection}
                href={"#Presentation"}
                className="text-magenLight text-uppercase text-decoration-none px-3 py-2 brightness"
              >
                INICIO
              </a>
              <a
                onClick={scrollToSection}
                href={"#Studies"}
                className="text-magenLight text-uppercase text-decoration-none px-3 py-2 brightness"
              >
                ESTUDIOS
              </a>
              <a
                onClick={scrollToSection}
                href={"#Projects"}
                className="text-magenLight text-uppercase text-decoration-none px-3 py-2 brightness"
              >
                PROYECTOS
              </a>
              <a
                onClick={scrollToSection}
                href={"#Presentation"}
                className="text-magenLight text-uppercase text-decoration-none px-3 py-2 brightness"
              >
                SOBRE MI
              </a>
              {localStorage.getItem("token") && (
                <>
                  {" "}
                  <Link
                    to={"studies"}
                    className="text-magenLight text-uppercase text-decoration-none px-3 py-2 brightness"
                  >
                    studies
                  </Link>
                  <Link
                    to={"projects"}
                    className="text-magenLight text-uppercase text-decoration-none px-3 py-2 brightness"
                  >
                    projects
                  </Link>
                </>
              )}
              {localStorage.getItem("token") ? (
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="text-magenLight text-uppercase text-decoration-none px-3 py-2 brightness"
                >
                  Logout
                  <FontAwesomeIcon className="ms-2" icon={faRightFromBracket} />
                </Link>
              ) : (
                <div></div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
