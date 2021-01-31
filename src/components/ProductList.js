import { ListWrapper, Title } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = props.products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        deleteProduct={props.deleteProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Title>Products</Title>
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};
export default ProductList;
