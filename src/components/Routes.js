import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetails";
import ProductForm from "./ProductForm";
import { Route, Switch } from "react-router";
import ShopDetail from "./ShopDetails";
import ShopList from "./ShopList";
import { useSelector } from "react-redux";
const Routes = () => {
  const products = useSelector((state) => state.productReducer.products);

  return (
    <Switch>
      <Route
        path={["/shops/:shopId/products/new", "/products/:productSlug/edit"]}
      >
        <ProductForm />
      </Route>
      <Route path="/products/:productSlug">
        <ProductDetail />
      </Route>
      <Route path="/products">
        <ProductList products={products} />
      </Route>
      <Route path="/shops/:shopSlug">
        <ShopDetail />
      </Route>
      <Route path="/shops">
        <ShopList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
