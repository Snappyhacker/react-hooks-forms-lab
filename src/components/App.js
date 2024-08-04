import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      {/* Use the Header component and pass necessary props */}
      <Header isDarkMode={isDarkMode} onDarkModeClick={toggleDarkMode} />
      {/* Pass the initial items to the ShoppingList component */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
