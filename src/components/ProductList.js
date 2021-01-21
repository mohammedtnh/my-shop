import { ListWrapper, Title } from "../styles";
import ProductItem from "./ProductItem";
import products from "../products";

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <div>
      <Title>Products</Title>
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};
export default ProductList;
