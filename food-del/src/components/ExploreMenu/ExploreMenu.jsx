// import React, { useContext } from 'react';
// import './ExploreMenu.css';
// import { StoreContext } from '../../Context/StoreContext';
// import { useNavigate } from 'react-router-dom';

// const ExploreMenu = ({ category, setCategory }) => {
//   const { menu_list } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const handleClick = (menuName) => {
//     setCategory(prev => prev === menuName ? "All" : menuName);
//     navigate(`/menu/${menuName.toLowerCase()}`);
//   };

//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our menu</h1>
//       <p className='explore-menu-text'>
//         Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
//       </p>
//       <div className="explore-menu-list">
//         {menu_list.map((item, index) => (
//           <div onClick={() => handleClick(item.menu_name)} key={index} className='explore-menu-list-item'>
//             <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt={item.menu_name} />
//             <p>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default ExploreMenu;

import React, { useContext } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list, setSearchTerm } = useContext(StoreContext); // ⬅ get setSearchTerm from context
  const navigate = useNavigate();

  const handleClick = (menuName) => {
    // Change category
    setCategory(prev => prev === menuName ? "All" : menuName);
    
    // Clear search box
    setSearchTerm(""); // ⬅ reset search term

    // Navigate to category page
    navigate(`/menu/${menuName.toLowerCase()}`);
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div 
            onClick={() => handleClick(item.menu_name)} 
            key={index} 
            className='explore-menu-list-item'
          >
            <img 
              src={item.menu_image} 
              className={category === item.menu_name ? "active" : ""} 
              alt={item.menu_name} 
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
