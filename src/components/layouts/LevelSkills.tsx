import { Col, Row } from "react-bootstrap";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

function LevelSkills() {
    const tecnologies=[{ tecnology:'Typescript', level:68},{ tecnology:'PHP', level:68},
    { tecnology:'Javascript', level:68},{ tecnology:'Java', level:68},
    { tecnology:'Express', level:68},{ tecnology:'Sass', level:68},
    { tecnology:'SQL', level:68},{ tecnology:'Bootstrap', level:68}];

  return (
    <Row id="LevelSkills" className="d-flex justify-content-center" >
{tecnologies.map((item,index)=>
      <Col xs={6} sm={3} key={index} className="p-2 d-flex justify-content-center align-items-center">
      <div className="progressBar">
        <CircularProgressbarWithChildren
          value={item.level}
          text={`${item.level}%`}
          strokeWidth={4}
          styles={buildStyles({
            strokeLinecap: "butt",
          })}
        >
          <p className=" text-uppercase text-magenLight position-absolute progress-bar-p">
            {item.tecnology}
          </p>
        </CircularProgressbarWithChildren>
      </div>
    </Col>
)
}
    </Row>
  );
}

export default LevelSkills;
