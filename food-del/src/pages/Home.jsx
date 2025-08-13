import React, { useRef, useState } from "react";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import FoodItem from "../components/FoodItem/FoodItem";
import { food_list } from "../assets/assets";

const Home = () => {
  const [category, setCategory] = useState("All");
  const topDishesRef = useRef(null);

  // Filter food items
  const filteredFood = category === "All"
    ? food_list
    : food_list.filter(item => item.food_category === category);

  // Function to scroll to top dishes
  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setTimeout(() => {
      topDishesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Wait for state update
  };

  return (
    <div>
      <ExploreMenu category={category} setCategory={handleCategorySelect} />
      {/* ...other sections... */}
      <div ref={topDishesRef} id="top-dishes">
        <h2>Top Dishes Near You</h2>
        <div className="food-list">
          {filteredFood.map(item => (
            <FoodItem
              key={item.food_id}
              id={item.food_id}
              image={item.food_image}
              name={item.food_name}
              price={item.food_price}
              desc={item.food_desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;