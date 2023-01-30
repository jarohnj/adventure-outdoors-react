import { Button, Card } from "react-bootstrap";
import { CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import "./CardLayout.css";

const CardLayout = ({ image, title, text, link, buttonText }) => {
  
    return (
          
          <Card  style={{ width: "18rem" }}>
            <CardImg className="img-fluid" variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Link to={link}>
                <Button variant="success">{buttonText}</Button>
              </Link>
            </Card.Body>
          </Card>
    );
};

export default CardLayout;
