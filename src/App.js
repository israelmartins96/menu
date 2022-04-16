// ***IMPORTS*** //
// React
import React from 'react';
// Stylesheet
import './App.css';
// Menu Data
import menuData from './data-menu';
// Menu Categories Component
import MenuCategories from './MenuCategories';
// Menu Items Component
import MenuItems from './MenuItems';


// All available Menu Categories
const allMenuCategories = ['all', ...new Set( menuData.map( menuItem => menuItem.category ) )];

// ***MAIN COMPONENT*** //
function App() {
  // Initialise array of Menu Items
  const [menuItems, setMenuItems] = React.useState(menuData);
  
  // Initialise array of Menu Categories
  const [menuCategories, setMenuCategories] = React.useState(allMenuCategories);

  // Filters Menu Items by categories
  const filterByCategory = (category) => {
    if (category === 'all') {
      return setMenuItems(menuData);
    }
    const itemsInCategory = menuData.filter( menuItem => menuItem.category === category );
    return setMenuItems(itemsInCategory);
  };
  
  return (
    <div className='container'>
      <main className='menu'>
        <header className='main-heading'>
          <h2 className='heading'>Our Menu</h2>
          <div className='underline'></div>
        </header>
        <MenuCategories categories={ menuCategories } filterByCategory={ filterByCategory } />
        <MenuItems menuItems={ menuItems } />
      </main>
    </div>
  );
}

// ***EXPORT*** //
export default App;
