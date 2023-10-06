import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
  Study,
  dataStudy,
  getStudiesById,
  updateStudy,
} from "../customHooks/studiesMethods";

function FormEditStudies() {
  const [validated, setValidated] = useState(false);
  const [study, setStudy] = useState<Study | undefined>(undefined);
  const [errors, setErrors] = useState<string>("");
  const queryParam = useParams();
  const idStudy = queryParam.id;
  const [successUpdate, setSuccessUpdate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      if (idStudy) {
        try {
          const studyData: dataStudy = await getStudiesById(idStudy);
          if (
            studyData.success &&
            !Array.isArray(studyData.data) &&
            studyData.data !== null
          ) {
            setStudy(studyData.data);
          } else {
            setErrors("No se han encontrado estudios con el id enviado");
          }
        } catch (error) {
          setErrors("Error en la búsqueda de datos");
        }
      }
    };
    fetchData();
  }, [idStudy]);

  useEffect(() => {
    if (successUpdate) {
      setTimeout(() => {
        navigate("/studies");
      }, 4000);
    }
  }, [successUpdate]);

  useEffect(() => {
    const submitData = async () => {
      try {
        const updatedStudy: dataStudy = await updateStudy(study!);
        if (updatedStudy.success) {
          setSuccessUpdate(true);
        }
      } catch (error) {
        setErrors("Ha ocurrido un error al actualizar los datos");
      }
    };

    if (validated && study) {
      submitData();
    }
  }, [validated, study]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
    }
  };

  const handleChangeNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nombre = e.target.value;
    if (study) {
      const updatedStudy = { ...study, nombre: nombre };
      setStudy(updatedStudy);
    }
  };

  const handleChangeInstitucion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const institucion = e.target.value;
    if (study) {
      const updatedStudy = { ...study, institucion: institucion };
      setStudy(updatedStudy);
    }
  };

  const handleChangeEstado = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const estado = e.target.value;
    if (study) {
      const updatedStudy = { ...study, estado: estado };
      setStudy(updatedStudy);
    }
  };

  const handleChangeLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const base64String = event.target.result.toString();
          if (study) {
            const updatedStudy = { ...study, logoInstitucion: base64String };
            setStudy(updatedStudy);
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
      <h1 className="text-center text-cyanLight mt-5">Agrega un nuevo curso</h1>
      {errors ? (
        <div
          style={{ color: "red", height: "500px" }}
          className="fs-1 my-5 d-flex align-content-center"
        >
          <div className="w-100 text-center">{errors}</div>
        </div>
      ) : successUpdate ? (
        <div className="text-success my-5 fs-1 text-center p-5 success-add">
          Estudio actualizado correctamente
        </div>
      ) : (
        study && (
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            method="POST"
          >
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="text-magenLight text-uppercase mt-3">
                    Nombre del curso
                  </Form.Label>
                  <Form.Control
                    onChange={handleChangeNombre}
                    required
                    name="nombre"
                    className="rounded-0 text-center"
                    value={study.nombre}
                    placeholder="Ingresar nombre del curso"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label
                    className="text-magenLight text-uppercase mt-3"
                    for="estado"
                  >
                    Estado del curso
                  </Form.Label>
                  <Form.Select
                    id="estado"
                    onChange={handleChangeEstado}
                    required
                    name="estado"
                    className="rounded-0 text-center"
                    defaultValue={study.estado}
                  >
                    <option value="" disabled>
                      --Seleccionar un estado--
                    </option>
                    <option value="En curso">En curso</option>
                    <option value="Finalizado">Finalizado</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-magenLight text-uppercase mt-3">
                      Nombre de la institucion
                    </Form.Label>
                    <Form.Control
                      onChange={handleChangeInstitucion}
                      required
                      name="institucion"
                      className="rounded-0 text-center"
                      value={study.institucion}
                      placeholder="Ingresar nombre de la institucion"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Row>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label className="text-magenLight text-uppercase mt-3">
                Logo de institución
              </Form.Label>
              <Form.Control
                className="rounded-0 text-center"
                type="file"
                size="lg"
                name="logoInstitucion"
                onChange={handleChangeLogo}
              />
              <div className="d-flex justify-content-center my-4">
                <img
                  className="img-fluid"
                  style={{ maxHeight: "200px" }}
                  src={study.logoInstitucion}
                  alt={study.nombre}
                />
              </div>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="text-uppercase rounded-0 d-flex mx-auto px-5"
            >
              Submit
            </Button>
          </Form>
        )
      )}
    </Container>
  );
}

export default FormEditStudies;
