import { Button, Card } from "react-bootstrap";
import { CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCard = ({ image, title, text, link }) => {
  
    return (
    <Card style={{ width: "18rem" }}>
      <CardImg src={image} />
      <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Link to={link}><Button variant="success">Explore!</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
