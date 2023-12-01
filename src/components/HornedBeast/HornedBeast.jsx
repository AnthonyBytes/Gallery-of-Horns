import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

function HornedBeast(props) {
  const [favorites, setFavorites] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  function vote() {
    setFavorites(favorites + 1);
    console.log(props.beast.title, 'has a favorite');
  }

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ marginBottom: '20px', width: '18rem' }}>
        <Card.Img
          variant="top"
          src={props.beast.image_url}
          alt={props.beast.title}
          title={props.beast.title}
          onClick={handleShowModal}
          style={{ cursor: 'pointer' }}
        />
        <Card.Body>
          <Card.Title>
            {props.beast.title}{' '}
          </Card.Title>
          <Card.Text>{props.beast.description}</Card.Text>
          <Button onClick={vote} variant="primary">
            ❤️ {favorites}
          </Button>
        </Card.Body>

        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{props.beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={props.beast.image_url} alt={props.beast.title} style={{ width: '100%' }} />
            <p>{props.beast.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </Col>
  );
}

export default HornedBeast;

