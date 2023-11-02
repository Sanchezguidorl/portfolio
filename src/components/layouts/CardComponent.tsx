import { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  ProjectI,
  dataProjects,
  getProjects,
} from "../customHooks/projectsMethods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGlobe } from "@fortawesome/free-solid-svg-icons";

function CardComponent() {
  const [allProjects, setAllProjects] = useState<ProjectI[]>();
  const [projects, setProjects] = useState<ProjectI[]>();
  const [errors, setErrors] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showAllCards, setShowAllCards] = useState<boolean>(false);
  //estado para mostrar el modal
  const [show, setShow] = useState(false);
  //estado que controla los datos del objeto que debe mostrar el modal
  const [modalProjectByIndex, setModalProjectByIndex] = useState<ProjectI|null>(null);

  const handleClose = () =>{ setShow(false); setModalProjectByIndex(null)};
  const handleShow = () => setShow(true);

  const fetchProjects = async () => {
    try {
      const projectsData: dataProjects = await getProjects();
      if (projectsData.success && Array.isArray(projectsData.data)) {
        setAllProjects(projectsData.data);
        setLoading(false);
      }
    } catch (error) {
      setErrors(
        "Ocurrió un error y no se pudieron recuperar los datos de los proyectos"
      );
    }
  };
  
  useEffect(() => {
    fetchProjects();
  }, []);

  //Cambia a true el estado para mostrar el modal en caso de que modalProjectByIndex tenga datos
    if (modalProjectByIndex!==null && show===false) {
      handleShow();
    }


  useEffect(() => {
    if (allProjects) {
      setProjects(
        allProjects.length > 6 ? allProjects?.slice(0, 6) : allProjects
      );
    }
  }, [allProjects]);

  const handleShowAllProjects = () => {
    if (showAllCards) {
      setProjects(
        allProjects && allProjects.length > 6
          ? allProjects?.slice(0, 6)
          : allProjects
      );
    } else {
      setProjects(
        allProjects && allProjects.length > 6
          ? allProjects
          : allProjects?.slice(0, 6)
      );
    }
    setShowAllCards(!showAllCards);
  };
  return (
    <>
      {errors ? (
        <div className="error-add fs-2 justify-content-center d-flex align-items-center text-center mt-4">
          {errors}
        </div>
      ) : loading ? (
        <div className="loadingSection w-100 mt-4">
          <div className="loader"></div>
        </div>
      ) : (
        <Row className="d-flex justify-content-center position-relative">
          {projects &&
            projects.map((project) => (
              <Col
                key={project._id}
                xs={12}
                md={6}
                lg={4}
                className="p-1 py-2 col-card-projects"
              >
                <Card id="Card" className="bg-dark text-white">
                  <img
                    src={project.imagen}
                    alt=""
                    className="position-absolute w-100"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>{project.nombre}</Card.Title>
                    <Card.Text>{project.descripcion}</Card.Text>
                  </Card.ImgOverlay>
                  <div className="border-overflow"></div>
                  <div className="cardButtonsOverlay">
                    <a
                      onClick={() => {
                        setModalProjectByIndex(project);
                      }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </a>
                    <a href={project.url} target="blank">
                      {" "}
                      <FontAwesomeIcon icon={faGlobe} />
                    </a>
                  </div>
                </Card>
              </Col>
            ))}
          {allProjects && allProjects.length > 6 && (
            <div
              className="d-flex justify-content-center align-items-center py-3 position-absolute bottom-0 see-more-button"
              onClick={handleShowAllProjects}
            >
              <p className="">{showAllCards ? "Ver menos" : "Ver más"}</p>
            </div>
          )}
        </Row>
      )}
      {modalProjectByIndex && (
        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>{modalProjectByIndex.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <img src={modalProjectByIndex.imagen} className="w-100" alt="" />
            <p className="pt-2">{modalProjectByIndex.descripcion}</p>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between px-0">
            <Button
              variant="secondary"
              className="rounded-0 modal-button m-0"
              onClick={handleClose}
            >
              CERRAR
            </Button>
            <a href={modalProjectByIndex.url} target="blank">
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
