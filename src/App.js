import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetails";
import { useState } from "react";
import products from "./products";
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
  const [_products, setProducts] = useState(products);

  const deleteProduct = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:productSlug">
          <ProductDetail products={products} deleteProduct={deleteProduct} />
        </Route>
        <Route path="/products">
          <ProductList products={_products} deleteProduct={deleteProduct} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
