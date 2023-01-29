import Canoe from "../images/Canoe.jpg";
import CategoryCard from "./CategoryCard";
import Snow from "../images/Snowboard.jpg";
import Camping from "../images/Camping.jpg";
import Climbing from "../images/Climbing.jpg";
import "./CategoryCard.css";

const Equipment = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Garamond" }}>
        Categories
      </h1>
      <div className="category-card">
        <CategoryCard
          image={Canoe}
          title="Water Gear"
          text="Explore the Water!"
          link="/equipment/water-gear"
        />
        <CategoryCard
          image={Snow}
          title="Snow Gear"
          text="Explore the Snow!"
          link="/equipment/snow-gear"
        />
        <CategoryCard
          image={Camping}
          title="Camping Gear"
          text="Go Camping!"
          link="/equipment/camping-gear"
        />
        <CategoryCard
          image={Climbing}
          title="Climbing Gear"
          text="Go Climbing!"
          link="/equipment/climbing-gear"
        />
      </div>
    </div>
  );
};

export default Equipment;
