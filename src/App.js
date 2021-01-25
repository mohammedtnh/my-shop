import { ThemeProvider } from "styled-components";
import { GlobalStyle, ThemeButton } from "./styles";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetails";
import { useState } from "react";
import products from "./products";

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
  const [product, setProduct] = useState(null);

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
  const display = product ? (
    <ProductDetail
      product={product}
      setProduct={setProduct}
      deleteProduct={deleteProduct}
    />
  ) : (
    <ProductList
      products={_products}
      deleteProduct={deleteProduct}
      setProduct={setProduct}
    />
  );

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleCurrentTheme}>
        {currentTheme.toUpperCase()} Theme
      </ThemeButton>
      <Home />
      {display}
    </ThemeProvider>
  );
}

export default App;
