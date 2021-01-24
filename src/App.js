import { ThemeProvider } from "styled-components";
import { GlobalStyle, ThemeButton } from "./styles";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#B9B9B9", // main font color
    backgroundColor: "#000000", // main background color
    secondaryColor: "#00AAA9",
  },
  dark: {
    mainColor: "#000000", // main font color
    backgroundColor: "#B9B9B9", // main background color
    secondaryColor: "#00AAA9",
  },
};

function App() {
  const [currentTheme, setTheme] = useState("light");

  const toggleCurrentTheme = () => {
    if (currentTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleCurrentTheme}>
        {currentTheme.toUpperCase()} Theme
      </ThemeButton>
      <Home />
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
