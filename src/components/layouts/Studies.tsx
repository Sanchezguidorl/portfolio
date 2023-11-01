import { Card, Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from 'react';
import { dataStudy, getStudies } from "../customHooks/studiesMethods";
import { Study } from './../customHooks/studiesMethods';

function Studies() {
const [studies,setStudies]= useState<Study[]>();

useEffect(()=>{

const fetchData=async()=>{
  const studiesData:dataStudy= await getStudies();

if(studiesData.success){
  const data= studiesData.data || [];
  setStudies(data);
}
}

fetchData();
},[]);


  return (
<Container>
{studies ?
    <Row id="Studies" className="d-flex justify-content-center">
{studies.length>0 && 
studies.map((study)=>(
  <Col key={study._id} xs={12} md={6} lg={4} className="p-1">
  <Card
    className="p-0 bg-magenDark text-secondaryCyan border border-1 border-secondaryCyan h-100 rounded-0"
  >
    <Card.Body>
      <Card.Title className="fs-6 text-uppercase m-0"><img src={`${study.logoInstitucion}`} alt={study.nombre} className="logo-study me-3"/>{study.institucion}</Card.Title>
      <Card.Text className="fs-5 p-3 pb-0">
{study.nombre}
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
