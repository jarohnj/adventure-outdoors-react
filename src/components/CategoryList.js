import CardLayout from "./CardLayout";
import "./CardLayout.css";
import { Row } from "react-bootstrap";

const CategoryList = () => {
  return (
    <div>
      <h1 className="h1">All Categories</h1>
      <Row xs="auto" md="auto" style={{columnCount: 4}} className="card-layout g-4">
        <CardLayout
          image="images/Canoe.jpg"
          title="Water Gear"
          text="Explore the Water!"
          link="/categories/water-gear"
          buttonText="Explore!"
        />
        <CardLayout
          image="images/Snowboard.jpg"
          title="Snow Gear"
          text="Explore the Snow!"
          link="/categories/snow-gear"
          buttonText="Explore!"
        />
        <CardLayout
          image="images/Camping.jpg"
          title="Camping Gear"
          text="Go Camping!"
          link="/categories/camping-gear"
          buttonText="Explore!"
        />
        <CardLayout
          image="images/Climbing.jpg"
          title="Climbing Gear"
          text="Go Climbing!"
          link="/categories/climbing-gear"
          buttonText="Explore!"
        />
      </Row>
    </div>
  );
};

export default CategoryList;
