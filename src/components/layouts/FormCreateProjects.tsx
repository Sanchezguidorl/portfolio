import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import {
  ProjectSaveI,
  createProject,
  dataProjects,
} from "../customHooks/projectsMethods.js";
import { useNavigate } from "react-router-dom";

function FormCreateProjects() {
  const [successCreation, setSuccessCreation] = useState(false);
  const [errors, setErrors] = useState<string>("");
  const [project, setProject] = useState<ProjectSaveI>({
    nombre: "",
    descripcion: "",
    imagen: "",
    url: "",
  });
  const navigate= useNavigate();

  const saveProject = async () => {
    if (project) {
      try {
        const savedProject: dataProjects = await createProject(project);
        if (savedProject.success) {
          setSuccessCreation(true);
        }else{
          setErrors("Acceso denegado");
        }
      } catch (error) {
        setErrors("Error al agregar datos del proyecto");
      }
    }
  };

  if(successCreation){
    setTimeout(() => {
      navigate("/projects");
    }, 4000);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
      saveProject();
}
  };

  // Manejadores de inputs
  const handleInputNombre = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setProject({ ...project, nombre: value });
  };

  const handleInputDescripcion = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setProject({ ...project, descripcion: value });
  };

  const handleInputUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setProject({ ...project, url: value });
  };

  const handleInpuImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const base64String = event.target.result.toString();
          setProject({ ...project, imagen: base64String });
        }
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Container
      className="px-5"
      style={{ fontFamily: "Raleway", maxWidth: "700px" }}
    >
      {successCreation ? (
        <div className="text-success my-5 fs-1 text-center p-5 success-add">
          Proyecto agregado correctamente
        </div>
      ) : (
        <>
          {" "}
          <h1 className="text-center text-cyanLight">
            Agrega un nuevo proyecto
          </h1>
          {errors ?
          <div className="error-add fs-1 p-5 text-center my-4">{errors}</div>
          :
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="text-magenLight text-uppercase mt-3">
                    Nombre del proyecto
                  </Form.Label>
                  <Form.Control
                    onChange={handleInputNombre}
                    required
                    className="rounded-0 text-center"
                    placeholder="Ingresar nombre del proyecto"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="text-magenLight text-uppercase mt-3">
                    Descripcion
                  </Form.Label>
                  <Form.Control
                    onChange={handleInputDescripcion}
                    required
                    className="rounded-0 text-center"
                    placeholder="Ingresar una descripción"
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-magenLight text-uppercase mt-3">
                    Url
                  </Form.Label>
                  <Form.Control
                    onChange={handleInputUrl}
                    required
                    className="rounded-0 text-center"
                    placeholder="Ingresar la url de alojamiento"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label className="text-magenLight text-uppercase mt-3">
                Captura de la app
              </Form.Label>
              <Form.Control
                onChange={handleInpuImagen}
                required
                className="rounded-0 text-center"
                type="file"
                size="lg"
              />
              {project && project.imagen && (
                <div className="d-flex justify-content-center my-4">
                  <img
                    className="img-fluid"
                    style={{ maxHeight: "200px" }}
                    src={project.imagen}
                    alt={project.nombre}
                  />
                </div>
              )}
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="text-uppercase rounded-0 d-flex mx-auto px-5"
            >
              Submit
            </Button>
          </Form>}
        </>
      )}
    </Container>
  );
}

export default FormCreateProjects;
