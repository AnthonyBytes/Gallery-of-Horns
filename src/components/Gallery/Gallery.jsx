import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeast from '../HornedBeast/HornedBeast.jsx';
import PropTypes from 'prop-types';

Gallery.propTypes = {
  beasts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      image_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      keyword: PropTypes.string.isRequired,
      horns: PropTypes.number.isRequired,
    })
  ).isRequired,
};



function Gallery(props) {
  return (
    <Container>
      <Row>
        {props.beasts.map((beast) => (
          <Col key={beast._id} xs={12} sm={6} md={4} lg={3}>
            <HornedBeast beast={beast} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;