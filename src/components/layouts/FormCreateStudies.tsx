import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { StudySave, createStudy, dataStudy } from "../customHooks/studiesMethods";
import { useNavigate } from "react-router-dom";

function FormCreateStudies() {
  const [study, setStudy] = useState<StudySave>({
    nombre: "",
    estado: "",
    institucion: "",
    logoInstitucion: "",
  });
  const [errors, setErrors] = useState<string>("");
  const navigate = useNavigate();
  const [successCreation, setSuccessCreation] = useState(false);

    const submitData = async () => {
      if(study){
      try {
        const newStudy: dataStudy = await createStudy(study);
        if (newStudy.success) {
          setSuccessCreation(true);
        }
      } catch (error) {
        setErrors("Ha ocurrido un error al actualizar los datos");
      }
    }
    };

    if (successCreation) {
      setTimeout(() => {
        navigate("/studies");
      }, 4000);
    }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      submitData();
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
      {errors ?
        <div
          style={{ color: "red", height: "500px" }}
          className="fs-1 my-5 d-flex align-content-center"
        >
          <div className="w-100 text-center">{errors}</div>
        </div>
      : successCreation ? (
        <div className="text-success my-5 fs-1 text-center p-5 success-add">
          Estudio agregado correctamente
        </div>
      ) : (
        <Form
          noValidate
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
                  className="rounded-0 text-center"
                  value={study?.nombre}
                  placeholder="Ingresar nombre del curso"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="text-magenLight text-uppercase mt-3">
                  Estado del curso
                </Form.Label>
                <Form.Select
                  onChange={handleChangeEstado}
                  required
                  className="rounded-0 text-center"
                  defaultValue={study?.estado}
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
                    className="rounded-0 text-center"
                    value={study?.institucion}
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
              required
              className="rounded-0 text-center"
              type="file"
              size="lg"
              onChange={handleChangeLogo}
            />
{
  study && study.logoInstitucion &&
  <div className="d-flex justify-content-center my-4">
  <img
    className="img-fluid"
    style={{ maxHeight: "200px" }}
    src={study.logoInstitucion}
    alt={study.nombre}
  />
</div>
}
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
    </Container>
  );
}

export default FormCreateStudies;
