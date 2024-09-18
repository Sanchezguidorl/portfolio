import { Col, Container, Row } from "react-bootstrap";
import devPhoto from "../../assets/images/foto-dev.webp";
import { useEffect, useState } from "react";

function Presentation() {

  const stylesBorderRadius=[
    {borderRadius:"24% 76% 39% 61% / 68% 41% 59% 32%" },
    {borderRadius:"64% 36% 66% 34% / 68% 30% 70% 32%" },
    {borderRadius:"29% 71% 36% 64% / 33% 72% 28% 67%" },
    {borderRadius:"50% 50% 49% 51% / 48% 43% 57% 52%" },
    {borderRadius:"24% 76% 23% 77% / 77% 32% 68% 23%" },
    {borderRadius:"67% 33% 71% 29% / 26% 74% 26% 74%" }
  ]

  const textDescription = [
    "Soy un desarrollador con un enfoque en tecnologías web. Me especializo desde hace más de 2 años en React, con su framework Next.js, y en Node.js implementando Typescript. Busco una oportunidad que me permita expandir mis habilidades en un entorno dinámico.",
    "Mi experiencia abarca tanto las tecnologías del lado del cliente como la lógica del servidor, planificación de proyectos y desarrollo de migraciones.",
  ];
  const [textP, setTextP] = useState(true);
  const [borderRadiusStyle, setBorderRadiusStyle] = useState<{borderRadius: string}>(stylesBorderRadius[0]);
  useEffect(() => {
    setTimeout(() => {
      setTextP(!textP);
    }, 7500);
  }, [textP]);

  useEffect(() => {
    setTimeout(() => {
      setBorderRadiusStyle(stylesBorderRadius[Math.floor(Math.random()*stylesBorderRadius.length)])
    }, 700);
  }, [borderRadiusStyle]);

  useEffect(() => {
    setTimeout(() => {
      setTextP(!textP);
    }, 7500);
  }, [textP]);



  return (
    <Container id="Presentation" className="">
      <Row >
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center align-items-center mb-4 p-4"
        >
          <img src={devPhoto} alt="" className="img-presentation w-100 p-2"
          style={borderRadiusStyle} />
        </Col>
        <Col xs={12} md={8} className="text-magenLight p-0">
          <div className="position-relative">
            <div className="  overflow-hidden d-flex justify-content-center align-items-center bg-magenDark px-4 m-0 position-relative text-presentation border border-2 border-secondaryCyan">
              {textP ? (
                <p className={`mb-0 text-content`}>{textDescription[0]}</p>
              ) : (
                <div className={`mb-0 text-content`}>{textDescription[1]}</div>
              )}
            </div>
            <div className="position-absolute border border-4 border-secondary w-100 h-100 borde-presentation"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Presentation;
