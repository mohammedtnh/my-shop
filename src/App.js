import "./App.css";
import main from "./homepagephoto.jpeg";

function App() {
  return (
    <div>
      <h1 className="App">Smart Hub</h1>
      <p className="App"> Make your home smarter</p>
      <img src={main} alt="main" className="photo" />
    </div>
  );
}

export default App;
