import { ListWrapper, Title } from "../styles";
import ShopItem from "./ShopItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const ShopList = () => {
  const shops = useSelector((state) => state.shopReducer.shops);
  const [query, setQuery] = useState("");
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loading />;
  const shopList = shops
    .filter((shop) => shop.name.toLowerCase().includes(query))
    .map((shop) => <ShopItem key={shop.id} shop={shop} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Title>Shops</Title>
      <ListWrapper>{shopList}</ListWrapper>
    </div>
  );
};
export default ShopList;
