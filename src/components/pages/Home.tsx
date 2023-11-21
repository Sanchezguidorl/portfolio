import Carrousel from '../layouts/Carrousel';
import LevelSkills from '../layouts/LevelSkills';
import Presentation from '../layouts/Presentation';
import Studies from './../layouts/Studies';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Projects from './../layouts/Projects';
import DownloadCV from '../layouts/DownloadCV';

function Home() {
  return (
<>
<Presentation/>
<Container>
<h2 className='headerText text-uppercase text-center my-5'>Mis Proyectos</h2>
<Projects/>
<Row id='Skills'>
<Col xs={12} lg={5} className='d-flex justify-content-center align-items-center position-relative'>
  <Carrousel/>
  <div className='position-absolute cover-carrousel w-100 h-100'></div>
</Col>
<Col xs={12} lg={7} className='d-flex align-items-center'><LevelSkills/></Col>
</Row>
</Container>
<h2 className='headerText text-uppercase text-center'>Estudios Realizados</h2>
<Studies/>
<DownloadCV/>
</>
  )
}

export default Home
