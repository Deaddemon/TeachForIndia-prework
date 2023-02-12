import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

import "../cardView/card.css";

export const ViewCard = (props) => {
  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <div>
      <p> {props.description} </p>
    </div>
  );

  const linkName = readMore ? "Read Less << " : "Read More >> ";
  return (
    <Card className="card-border card">
      <Card.Header className="card-header">
        {" "}
        {props.time} || category{" "}
      </Card.Header>
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          duration:{props.commitment}
        </Card.Subtitle>
        <Card.Text>
          <a
            className="read-more-link"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            <p>{linkName}</p>
          </a>
          {readMore && extraContent}
        </Card.Text>
        <Button variant="primary">Sign up</Button>
      </Card.Body>
      <Card.Footer className="text-muted card-footer">
        {" "}
        {props.email}{" "}
      </Card.Footer>
    </Card>
  );
};
