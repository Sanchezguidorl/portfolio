import { Card, Col, Container, Row } from "react-bootstrap"
import logoUdemy from '../../assets/images/udemy.webp';

function Studies() {
  return (
<Container>
    <Row id="Studies" className="d-flex justify-content-center">
        <Col xs={12} md={6} lg={4} className="p-1">
        <Card
          className="p-4 bg-magenDark text-secondaryCyan border border-1 border-secondaryCyan"
        >
          <Card.Header className="border-secondary">04/09/1978</Card.Header>
          <Card.Body>
            <Card.Title className="fs-6 text-uppercase"><img src={logoUdemy} alt="" className="logo-study me-1"/>Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-end border-secondary fs-6 text-uppercase">finalizado</Card.Footer>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="p-1">
        <Card
          className="p-4 bg-magenDark text-secondaryCyan border border-1 border-secondaryCyan"
        >
          <Card.Header className="border-secondary">04/09/1978</Card.Header>
          <Card.Body>
            <Card.Title className="fs-6 text-uppercase"><img src={logoUdemy} alt="" className="logo-study me-1"/>Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-end border-secondary fs-6 text-uppercase">finalizado</Card.Footer>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="p-1">
        <Card
          className="p-4 bg-magenDark text-secondaryCyan border border-1 border-secondaryCyan"
        >
          <Card.Header className="border-secondary">04/09/1978</Card.Header>
          <Card.Body>
            <Card.Title className="fs-6 text-uppercase"><img src={logoUdemy} alt="" className="logo-study me-1"/>Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-end border-secondary fs-6 text-uppercase">finalizado</Card.Footer>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="p-1">
        <Card
          className="p-4 bg-magenDark text-secondaryCyan border border-1 border-secondaryCyan"
        >
          <Card.Header className="border-secondary">04/09/1978</Card.Header>
          <Card.Body>
            <Card.Title className="fs-6 text-uppercase"><img src={logoUdemy} alt="" className="logo-study me-1"/>Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-end border-secondary fs-6 text-uppercase">finalizado</Card.Footer>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="p-1">
        <Card
          className="p-4 bg-magenDark text-secondaryCyan border border-1 border-secondaryCyan"
        >
          <Card.Header className="border-secondary">04/09/1978</Card.Header>
          <Card.Body>
            <Card.Title className="fs-6 text-uppercase"><img src={logoUdemy} alt="" className="logo-study me-1"/>Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-end border-secondary fs-6 text-uppercase">finalizado</Card.Footer>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="p-1">
        <Card
          className="p-4 bg-magenDark text-secondaryCyan border border-1 border-secondaryCyan"
        >
          <Card.Header className="border-secondary">04/09/1978</Card.Header>
          <Card.Body>
            <Card.Title className="fs-6 text-uppercase"><img src={logoUdemy} alt="" className="logo-study me-1"/>Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-end border-secondary fs-6 text-uppercase">finalizado</Card.Footer>
        </Card>
        </Col>
    </Row>
</Container>
  )
}

export default Studies
