import "../App.css";
import ProductItem from "./ProductItem";
import products from "../products";

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <div>
      <h2 className="App">Products</h2>
      {productList}
    </div>
  );
};
export default ProductList;
