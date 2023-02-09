import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../cardView/card.css';

export const  ViewCard = (props) => {
  return (
    <Card    >
      <Card.Header className='card-header'> { props.time} || category  </Card.Header>
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">duration:{props.commitment}</Card.Subtitle>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Sign up</Button>
      </Card.Body>
      <Card.Footer className="text-muted card-footer"> {props.email} </Card.Footer>
    </Card>
  );
}

 