import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeast from '../HornedBeast/HornedBeast.jsx';

function Gallery(props) {
  return (
    <Container>
      <Row>
        {props.list.map((beast) => (
          <Col key={beast._id} xs={12} sm={6} md={4} lg={3}>
            <HornedBeast beast={beast} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;