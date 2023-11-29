import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HornedBeast(props) {
  const [favorites, setFavorites] = useState(0);

  function vote() {
    setFavorites(favorites + 1);
    console.log(props.beast.title, 'has a favorite');
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.beast.image_url} alt={props.beast.title} title={props.beast.title} />
      <Card.Body>
        <Card.Title>
          {props.beast.title}{' '}
          <span role="img" aria-label="heart">
            ❤️ {favorites}
          </span>
        </Card.Title>
        <Card.Text>{props.beast.description}</Card.Text>
        <Button onClick={vote} variant="primary">
          Favorite
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HornedBeast;