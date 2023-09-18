import { Card, Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from 'react';
import { getStudies } from "../customHooks/studiesMethods";
import { Study } from './../customHooks/studiesMethods';

function Studies() {
const [studies,setStudies]= useState<Study[]>();

useEffect(()=>{

const fetchData=async()=>{
  const studiesData= await getStudies();

if(studiesData){
  setStudies(studiesData);
}
}

fetchData();
},[]);


  return (
<Container>
{studies ?
    <Row id="Studies" className="d-flex justify-content-center">
{studies && 
studies.map((study)=>(
  <Col key={study.id} xs={12} md={6} lg={4} className="p-1">
  <Card
    className="p-4 bg-magenDark text-secondaryCyan border border-1 border-secondaryCyan h-100"
  >
    <Card.Body>
      <Card.Title className="fs-6 text-uppercase"><img src={`${study.imagen}`} alt={study.curso} className="logo-study me-3"/>{study.institucion}</Card.Title>
      <Card.Text className="fs-5 p-3">
{study.curso}
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-end border-secondary fs-6 text-uppercase">{study.estado}</Card.Footer>
  </Card>
  </Col>
))
}
    </Row>
    :
    <div className="loadingSection">
<div className="loader"></div>
    </div>
}
</Container>
  )
}

export default Studies
