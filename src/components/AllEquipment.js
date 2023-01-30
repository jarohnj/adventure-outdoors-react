import { CardGroup } from "react-bootstrap";
import CardLayout from "./CardLayout";
import "./CardLayout.css";


const AllEquipment = ({ filteredEquipmentArray }) => {
    const renderedImages = filteredEquipmentArray.map( (equipment) => {
return <CardLayout key={equipment.id} image={equipment.image} title={equipment.title} text={equipment.text} link={equipment.link} buttonText={equipment.buttonText} />;
    });

    return <CardGroup className="card-layout">{renderedImages}</CardGroup>;
  
};

export default AllEquipment;
