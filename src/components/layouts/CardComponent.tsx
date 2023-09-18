import { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import imgClima from "../../assets/images/projets/app-clima.png";
import imgMusculos from "../../assets/images/projets/app-fabrica.png";
import imgStore from "../../assets/images/projets/app-store.png";
import imgTareas from "../../assets/images/projets/app-tareas.png";

//Interface con tipos de dato para objetos project
interface dataProject {
  image: string;
  description: string;
  site: string;
  name: string;
}

function CardComponent() {
  //todos los datos de proyectos
  const totalData = [
    { name:"App del clima",image: imgClima, description: "Proyecto realizado utilizando React, donde se empleó Axios para la integración con una API, la cual proporciona los nombres de localidades argentinas. Esta efectúa una solicitud a otra API que suministra datos climáticos en función a las coordenadas.", site:'https://elegant-custard-649571.netlify.app/' },
    { name:"Fabrica de músculos",image: imgMusculos, description: "Landing page realizada utilizando React para el frontend y la biblioteca express para la administración del contenido alojado en una base de datos mongoDB.", site:'https://visionary-florentine-9c4d59.netlify.app/' },
    { name:"Tienda online" ,image: imgStore, description: "Tienda de productos implementada con React, integrando Sass, Bootstrap y Redux para la capa frontend. Se emplea la biblioteca Axios para consultar una API de productos.", site:'https://incandescent-choux-15deec.netlify.app/' },
    { name:"Lista de tareas",image: imgTareas, description: "Proyecto realizado utilizando React, el cual permite crear, editar, mostrar y completar tareas almacenadas en el localstorage.", site:'https://stunning-crostata-ba4fb5.netlify.app/' }
  ];
  //variable con datos a mostrar en caso de que totalData tenga más de 6 elementos o no
  const partialData = totalData.length>6?totalData.slice(0, 6):totalData;
  const [projects, setProjects] = useState(partialData);
  //estado de botón para mostrar todos los proyectos en caso de existir
  const [showAllCards, setShowAllCards] = useState(false);
  //estado para mostrar el modal
  const [show, setShow] = useState(false);
  //estado que controla los datos del objeto que debe mostrar el modal
  const [modalProjectByIndex, setModalProjectByIndex] = useState<dataProject>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Cambia atrue el estado para mostrar el modal en caso de que modalProjectByIndex tenga datos
  useEffect(() => {
    if(modalProjectByIndex){
    handleShow();
    }
  }, [modalProjectByIndex]);


  //Asigna todos los datos de proyectos al array de proyectos en caso de que showAllCards sea true
  useEffect(() => {
    if (showAllCards) {
      setProjects(totalData);
    } else {
      setProjects(partialData);
    }
  }, [showAllCards]);

  return (
    <>
      <Row className="d-flex justify-content-center position-relative">
        {projects.map((dato, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="p-1 col-card-projects">
            <Card
              id="Card"
              className="bg-dark text-white" 
              onClick={() => {
                setModalProjectByIndex(projects[index]);
              }}
            >
              <img src={dato.image} alt="" className="position-absolute w-100" />
              <Card.ImgOverlay>
                <Card.Title>{dato.name}</Card.Title>
                <Card.Text>
{
  dato.description
}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
        {totalData.length>6 && (
          <div
            className="d-flex justify-content-center align-items-center py-5 position-absolute bottom-0 see-more-button"
            onClick={() => setShowAllCards(!showAllCards)}
          >
            <p className="">{showAllCards ? "Ver menos" : "Ver más"}</p>
          </div>
        )}
      </Row>
      {modalProjectByIndex && (
        <Modal show={show} onHide={handleClose} backdrop='static'>
          <Modal.Header closeButton>
            <Modal.Title>{modalProjectByIndex.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <img src={modalProjectByIndex.image} className="w-100" alt="" />
            <p className="pt-2">{modalProjectByIndex.description}</p>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between px-0">
            <Button
              variant="secondary"
              className="rounded-0 modal-button m-0"
              onClick={handleClose}
            >
              CERRAR
            </Button>
            <a href={modalProjectByIndex.site} target="blank">
            <Button
              variant="primary"
              className="rounded-0 modal-button m-0"
              onClick={handleClose}
            >
              VER PROYECTO
            </Button>
            </a>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default CardComponent;
