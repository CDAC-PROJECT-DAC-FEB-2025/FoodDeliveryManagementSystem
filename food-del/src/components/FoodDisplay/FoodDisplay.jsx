// import React, { useContext } from "react";
// import "./FoodDisplay.css";
// import { useParams } from "react-router-dom";
// import FoodItem from "../FoodItem/FoodItem";
// import { StoreContext } from "../../Context/StoreContext";

// const FoodDisplay = () => {
//   const { category } = useParams(); // URL se category lo
//   const { food_list = [], searchTerm = "" } = useContext(StoreContext);

//   const filteredFood = food_list.filter((item) => {
//     const name = item.food_name || item.name || "";
//     const matchesSearch = name.toLowerCase().includes(searchTerm.trim().toLowerCase());
//     const matchesCategory = category?.toLowerCase() === "all"
//       ? true
//       : item.category?.toLowerCase() === category?.toLowerCase();
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="food-display" id="food-display">
//       <h2>{category ? `${category} Dishes` : "Top dishes near you"}</h2>
//       <div className="food-display-list">
//         {filteredFood.length > 0 ? (
//           filteredFood.map((item) => (
//             <FoodItem
//               key={item.food_id}
//               image={item.food_image}
//               name={item.food_name || item.name}
//               desc={item.food_desc}
//               price={item.food_price}
//               id={item.food_id}
//             />
//           ))
//         ) : (
//           <p>No food found for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;

import React, { useContext } from "react";
import "./FoodDisplay.css";
import { useParams } from "react-router-dom";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../Context/StoreContext";

const FoodDisplay = () => {
  const { category } = useParams();
  const { food_list = [], searchTerm = "" } = useContext(StoreContext);

  const filteredFood = food_list.filter((item) => {
    const name = item.food_name || item.name || "";
    const matchesSearch = name
      .toLowerCase()
      .startsWith(searchTerm.trim().toLowerCase());
    const matchesCategory =
      !category || category.toLowerCase() === "all"
        ? true
        : item.category?.toLowerCase() === category?.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="food-display" id="food-display">
      <h2>{category ? `${category} Dishes` : "Top dishes near you"}</h2>
      <div className="food-display-list">
        {filteredFood.length > 0 ? (
          filteredFood.map((item) => (
            <FoodItem
              key={item.food_id}
              image={item.food_image}
              name={item.food_name || item.name}
              desc={item.food_desc}
              price={item.food_price}
              id={item.food_id}
            />
          ))
        ) : (
          <p>No food found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
