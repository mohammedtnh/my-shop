import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router";

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
      <Switch>
        <Route path={["/products/new", "/products/:productSlug/edit"]}>
          <ProductForm />
        </Route>
        <Route path="/products/:productSlug">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
