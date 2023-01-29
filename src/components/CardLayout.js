import { Button, Card } from "react-bootstrap";
import { CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Col} from "react-bootstrap";

const CardLayout = ({ image, title, text, link, buttonText }) => {
  
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <CardImg src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Link to={link}>
              <Button variant="success">{buttonText}</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default CardLayout;
