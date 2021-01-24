import { ListWrapper, Title } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import products from "../products";
import { useState } from "react";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => <ProductItem key={product.id} product={product} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Title>Products</Title>
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};
export default ProductList;
