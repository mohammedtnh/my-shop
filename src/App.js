import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

function App() {
  const theme = {
    mainColor: "#000000",
    backgroundColor: "#B9B9B9",
    secondaryColor: "#00AAA9",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
