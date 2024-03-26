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
    "Soy un desarrollador web con experiencia en el desarrollo de aplicaciones web modernas. Tengo más de 2 años de experiencia en el desarrollo web en proyectos personales y estoy en búsqueda de mi primera experiencia formal en el mundo IT.",
    " He trabajado en el desarrollo de aplicaciones web con un enfoque en la usabilidad y la accesibilidad utilizando tecnologías web como HTML, CSS, JavaScript, PHP, SQL, React y Next.js . También domino bases de datos MySQL y MongoDB. Soy un profesional con capacidad de aprendizaje continuo y adaptabilidad a nuevas tecnologías.",
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
            <div className="overflow-hidden d-flex justify-content-center align-items-center bg-magenDark p-4 m-0 position-relative text-presentation border border-2 border-secondaryCyan">
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
