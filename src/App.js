import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

const theme = {
  light: {
    mainColor: "#B9B9B9",
    backgroundColor: "#000000",
    secondaryColor: "#00AAA9",
    red: "#FF0000",
  },
  dark: {
    mainColor: "#000000",
    backgroundColor: "#B9B9B9",
    secondaryColor: "#00AAA9",
    red: "#FF0000",
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
      <NavBar
        currentTheme={currentTheme}
        toggleCurrentTheme={toggleCurrentTheme}
      />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
