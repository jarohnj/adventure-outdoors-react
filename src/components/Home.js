import SearchBar from "./SearchBar";
import "./SearchBar.css";
import { useEffect, useState } from "react";
import AllEquipment from "./AllEquipment";

const Home = () => {
  const equipmentArray = [
    {
      id: 1,
      image: "images/kayak.webp",
      title: "Super Kayak",
      text: "Explore the waters with this Super Kayak!",
      link: "/reserve",
      buttonText: "Reserve",
    },

    {
      id: 2,
      image: "images/Canoe2.jpg",
      title: "Super Canoe",
      text: "Explore the waters with this Super Canoe!",
      link: "/reserve",
      buttonText: "Reserve",
    },

    {
      id: 3,
      image: "/images/sled.jpg",
      title: "Super Sled",
      text: "Slide down snowy hills with this Super Sled!",
      link: "/reserve",
      buttonText: "Reserve",
    },

    {
      id: 4,
      image: "images/snowboard2.jpg",
      title: "Super Snowboard",
      text: "Board the slopes with this Super Snowboard!",
      link: "/reserve",
      buttonText: "Reserve",
    },

    {
      id: 5,
      image: "images/Skiis.webp",
      title: "Super Skiis",
      text: "Ski the slopes with these Super Skiis",
      link: "/reserve",
      buttonText: "Reserve",
    },

    {
      id: 6,
      image: "images/tent.jpg",
      title: "Super Tent",
      text: "Rest easy in this Super Tent!",
      link: "/reserve",
      buttonText: "Reserve",
    },

    {
      id: 7,
      image: "images/climbing-kit.jpg",
      title: "Super Climbing Kit",
      text: "Get this Super Climbing Kit!",
      link: "/reserve",
      buttonText: "Reserve",
    },
  ];
  const [searchField, setSearchField] = useState("");
  const [equipment, setEquipment] = useState([]);
  const [filteredEquipment, setFilteredEquipment] = useState(equipment);

  useEffect(() => {
    setEquipment(equipmentArray);
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredEquipment = equipment.filter((equipment) => {
      return equipment.title.toLocaleLowerCase().includes(searchField);
    });

    setFilteredEquipment(newFilteredEquipment);
  }, [equipmentArray, searchField]);

  return (
    <div>
      <h1 className="h1">All Equipment</h1>
      <SearchBar
        onChangeHandler={onSearchChange}
        className="search-bar"
        placeholder="Search Equipment"
      />
      <AllEquipment filteredEquipmentArray={filteredEquipment} />
    </div>
  );
};

export default Home;
