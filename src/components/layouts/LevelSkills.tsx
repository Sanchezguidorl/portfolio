import { Col, Row } from "react-bootstrap";

function LevelSkills() {
    const tecnologies=[{ tecnology:'Typescript'},{ tecnology:'MongoDB'},
    { tecnology:'Javascript'}, { tecnology:'React'},
    { tecnology:'Express'},{ tecnology:'Sass'},
    { tecnology:'SQL'},{ tecnology:'Bootstrap'}];

  return (
    <Row id="LevelSkills" className="d-flex justify-content-center" >
{tecnologies.map((item,index)=>
      <Col xs={4} md={2} sm={3} key={index} className="p-3">
      <div className="containerTec d-flex justify-content-center align-items-center">
          <p className="m-0 text-uppercase">
            {item.tecnology}
          </p>
      </div>
    </Col>
)
}
    </Row>
  );
}

export default LevelSkills;
