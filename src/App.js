import "./App.css";
import products from "./products";
import main from "./homepagephoto.jpeg";

function App() {
  const productsList = products.map((product) => (
    <div className="column">
      <img src={product.image} alt={product.name} className="productPhoto" />
      <p className="App"> {product.name}</p>
      <p className="App"> {product.price}</p>
    </div>
  ));

  return (
    <div>
      <h1 className="App">Smart Hub</h1>
      <p className="App"> Make your home smarter</p>
      <img src={main} alt="main" className="photo" />
      <br />
      <h2 className="App">Products</h2>
      {productsList}
    </div>
  );
}

export default App;
