const ProductItem = (props) => {
  const product = props.product;
  return (
    <div className="column">
      <img src={product.image} alt={product.name} className="productPhoto" />
      <p className="App"> {product.name}</p>
      <p className="App"> {product.price} BHD</p>
    </div>
  );
};

export default ProductItem;
