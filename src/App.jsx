import { useEffect, useState } from "react";
import { ThemeProvider } from "./Contexts/ThemeContext";

import { Outlet } from "react-router-dom";
import Navbar from "./LayoutElements/Navbar";

function App() {
  const [thememode, setThememode] = useState("light");

  const darktheme = () => {
    setThememode("dark");
  };
  const lighttheme = () => {
    setThememode("light");
  };

  const changeTheme = () => {
    if (thememode === "light") {
      darktheme();
    } else {
      lighttheme();
    }
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(thememode);
  }, [thememode]);

  return (
    <ThemeProvider value={{ changeTheme, darktheme, lighttheme, thememode }}>
      {/* <Navbar changeTheme={changeTheme} /> */}
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
