import main from "../homepagephoto.jpeg";

const Home = () => {
  return (
    <div>
      <h1 className="App">Smart Hub</h1>
      <p className="App"> Make your home smarter</p>
      <img src={main} alt="main" className="photo" />
      <br />
    </div>
  );
};

export default Home;
