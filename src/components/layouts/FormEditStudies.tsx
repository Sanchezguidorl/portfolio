import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function FormEditStudies() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget as HTMLFormElement;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      
        setValidated(true);
      };



  return (
    <Container className='px-5' style={{fontFamily:'Raleway', maxWidth:'700px'}}>
        <h1 className='text-center text-cyanLight'>Agrega un nuevo curso</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
<Row>
<Col>
<Form.Group className="mb-3">
        <Form.Label className='text-magenLight text-uppercase mt-3'>Nombre del curso</Form.Label>
        <Form.Control required className='rounded-0 text-center' placeholder="Ingresar nombre del curso" />
      </Form.Group>
</Col>
<Col>
<Form.Group className="mb-3">
        <Form.Label className='text-magenLight text-uppercase mt-3'>Estado del curso</Form.Label>
        <Form.Select required className='rounded-0 text-center' defaultValue=''>
          <option value='' disabled>--Seleccionar un estado--</option>
          <option>En curso</option>
          <option>Finalizado</option>
        </Form.Select>
      </Form.Group>
</Col>
</Row>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label className='text-magenLight text-uppercase mt-3'>Logo de institución</Form.Label>
        <Form.Control required className='rounded-0 text-center' type="file" size="lg" />
      </Form.Group>
      <Button variant="primary" type="submit" className='text-uppercase rounded-0 d-flex mx-auto px-5'>
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default FormEditStudies
