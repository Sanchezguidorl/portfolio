import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import {
  ProjectI,
  dataProjects,
  getProjectById,
  updateProject,
} from "../customHooks/projectsMethods.js";
import { useNavigate, useParams } from "react-router-dom";

function FormEditProjects() {
  const [loading, setLoading] = useState<boolean>(true);
  const [successCreation, setSuccessCreation] = useState(false);
  const [errors, setErrors] = useState<string>("");
  const [project, setProject] = useState<ProjectI>();
  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.id;

  const getCurrentProject = async () => {
    try {
      if (projectId) {
        const projectData = await getProjectById(projectId);
        
        if (projectData.success) {
          const data = projectData.data as ProjectI;
          setProject(data);
        }else{
            setErrors(
                "No se pudieron conseguir los datos del proyecto indicado. Verificar 'id' proporcionado"
              );
        }

        setLoading(false);
      }
    } catch (error) {
      setErrors(
        "No se pudieron conseguir los datos del proyecto indicado. Verificar 'id' proporcionado"
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentProject();
  }, []);

  const saveProject = async () => {
    if (project) {
      try {
          const savedProject: dataProjects = await updateProject(project);
        if (savedProject.success) {
          setSuccessCreation(true);
        } else {
          setErrors("Acceso denegado");
        }
        setLoading(false);
      } catch (error) {
        setErrors("Error al agregar datos del proyecto");
        
      }
    }
  };

  if (successCreation) {
setTimeout(() => {
    navigate("/projects");
}, 4000);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
        setLoading(true);
        saveProject();
    }
  };

  // Manejadores de inputs
  const handleInputNombre = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if(project){
        setProject({ ...project, nombre: value });
    }
  };

  const handleInputDescripcion = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if(project){
    setProject({ ...project, descripcion: value });
    }  
};

  const handleInputUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if(project){
    setProject({ ...project, url: value });
    }  
};

  const handleInpuImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const base64String = event.target.result.toString();
          if(project){
          setProject({ ...project, imagen: base64String });
          }
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
      {errors ? (
        <div className="error-add fs-2 justify-content-center d-flex align-items-center text-center mt-4">
          {errors}
        </div>
      ) : loading ? (
        <div className="loadingSection w-100 mt-4">
          <div className="loader"></div>
        </div>
      ) : successCreation ? (
        <div className="text-success my-5 fs-1 text-center p-5 success-add">
          Proyecto actualizado correctamente
        </div>
      ) : (
        <>
          <h1 className="text-center text-cyanLight">
            Actualizar el proyecto
          </h1>
          {project && (
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
                      value={project.nombre}
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
                      value={project.descripcion}
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
                      value={project.url}
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
            </Form>
          )}
        </>
      )}
    </Container>
  );
}

export default FormEditProjects;
