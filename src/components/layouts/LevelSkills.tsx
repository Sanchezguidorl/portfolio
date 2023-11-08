import { Col, Row } from "react-bootstrap";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

function LevelSkills() {
    const tecnologies=[{ tecnology:'Typescript', level:68},{ tecnology:'PHP', level:40},
    { tecnology:'Javascript', level:80}, { tecnology:'React', level:75},
    { tecnology:'Express', level:55},{ tecnology:'Sass', level:80},
    { tecnology:'SQL', level:80},{ tecnology:'Bootstrap', level:70}];

  return (
    <Row id="LevelSkills" className="d-flex justify-content-center" >
{tecnologies.map((item,index)=>
      <Col xs={4} md={2} sm={3} key={index} className="p-1 d-flex justify-content-center align-items-center">
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
