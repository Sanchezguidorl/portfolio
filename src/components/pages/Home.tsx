import Carrousel from '../layouts/Carrousel';
import LevelSkills from '../layouts/LevelSkills';
import Presentation from '../layouts/Presentation';
import Studies from './../layouts/Studies';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Projects from './../layouts/Projects';

function Home() {
  return (
<>
<Presentation/>
<h1 className='h1-studies text-uppercase text-center text-magen'>Estudios Realizados</h1>
<Studies/>
<Container className='my-5'>
<Row>
<Col xs={12} lg={5} className='d-flex justify-content-center align-items-center position-relative'>
  <Carrousel/>
  <div className='position-absolute cover-carrousel w-100 h-100'></div>
</Col>
<Col xs={12} lg={7}><LevelSkills/></Col>
</Row>
<h1 className='h1-studies text-uppercase text-center text-magen mt-5'>Mis Proyectos</h1>
<Projects/>
</Container>
</>
  )
}

export default Home
