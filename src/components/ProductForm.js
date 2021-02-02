import { useState } from "react";
import { CreateButtonStyled } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

// Redux Actions
import { createProduct, updateProduct } from "../store/actions";

const ProductForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { productSlug } = useParams();
  const foundProduct = useSelector((state) =>
    state.products.find((product) => product.slug === productSlug)
  );
  const [product, setProduct] = useState(
    foundProduct ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundProduct) dispatch(updateProduct(product));
    else dispatch(createProduct(product));
    history.push("/products");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>{foundProduct ? "Update" : "Create"} Product</h1>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              value={product.name}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              type="number"
              min="1"
              className="form-control"
              name="price"
              onChange={handleChange}
              value={product.price}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
            value={product.description}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            onChange={handleChange}
            value={product.image}
          />
        </div>
        <button type="submit" className="btn btn-info float-right">
          {foundProduct ? "Update" : "Create"}
        </button>
      </form>
    </>
  );
};
export default ProductForm;
