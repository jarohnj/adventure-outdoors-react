import Canoe from "../images/Canoe.jpg";
import CardLayout from "./CardLayout";
import Snow from "../images/Snowboard.jpg";
import Camping from "../images/Camping.jpg";
import Climbing from "../images/Climbing.jpg";
import "./CardLayout.css";
import { Row } from "react-bootstrap";

const Equipment = () => {
  return (
    <div>
      <h1 className="h1">Categories</h1>
      <Row xs="auto" md="auto" className="card-layout g-4">
        <CardLayout
          image={Canoe}
          title="Water Gear"
          text="Explore the Water!"
          link="/equipment/water-gear"
          buttonText="Explore!"
        />
        <CardLayout
          image={Snow}
          title="Snow Gear"
          text="Explore the Snow!"
          link="/equipment/snow-gear"
          buttonText="Explore!"
        />
        <CardLayout
          image={Camping}
          title="Camping Gear"
          text="Go Camping!"
          link="/equipment/camping-gear"
          buttonText="Explore!"
        />
        <CardLayout
          image={Climbing}
          title="Climbing Gear"
          text="Go Climbing!"
          link="/equipment/climbing-gear"
          buttonText="Explore!"
        />
      </Row>
    </div>
  );
};

export default Equipment;
