import { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/images/foto-card.png";

interface dataProject {
  image: string;
  text: string;
}

function CardComponent() {
  const totalData = [
    { image: img1, text: "texto1" },
    { image: img1, text: "texto2" },
    { image: img1, text: "texto3" },
    { image: img1, text: "texto4" },
    { image: img1, text: "texto" },
    { image: img1, text: "texto" },
    { image: img1, text: "texto5" },
    { image: img1, text: "texto6" },
    { image: img1, text: "texto7" },
    { image: img1, text: "texto8" },
  ];
  const partialData = totalData.slice(0, 6);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(partialData);
  const [modalDataByIndex, setModalDataByIndex] = useState<dataProject>();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [areThereMoreCards, setAreThereMoreCards] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);
  useEffect(() => {
    if (totalData.length > 6) {
      setAreThereMoreCards(true);
    }
  }, [totalData.length]);

  useEffect(() => {
    handleShow();
  }, [modalDataByIndex]);

  useEffect(() => {
    if (showAllCards) {
      setData(totalData);
    } else {
      setData(partialData);
    }
  }, [showAllCards]);

  return (
    <>
      <Row className="d-flex justify-content-center position-relative">
        {data.map((dato, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="p-1">
            <Card
              id="Card"
              className="bg-dark text-white"
              onClick={() => {
                setModalDataByIndex(data[index]);
              }}
            >
              <Card.Img src={dato.image} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
        {areThereMoreCards && (
          <div
            className="d-flex justify-content-center align-items-center py-5 position-absolute bottom-0 see-more-button"
            onClick={() => setShowAllCards(!showAllCards)}
          >
            <p className="">{showAllCards ? "Ver menos" : "Ver más"}</p>
          </div>
        )}
      </Row>
      {modalDataByIndex && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <img src={modalDataByIndex.image} className="w-100" alt="" />
            <p className="pt-2">{modalDataByIndex.text}</p>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between px-0">
            <Button
              variant="secondary"
              className="rounded-0 modal-button m-0"
              onClick={handleClose}
            >
              CERRAR
            </Button>
            <Button
              variant="primary"
              className="rounded-0 modal-button m-0"
              onClick={handleClose}
            >
              VER PROYECTO
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default CardComponent;
