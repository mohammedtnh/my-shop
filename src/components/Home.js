import main from "../homepagephoto.jpeg";
import { Title, Description, ShopImage } from "../styles";

const Home = () => {
  return (
    <div>
      <Title>Smart Hub</Title>
      <Description> Make your home smarter</Description>
      <ShopImage src={main} alt="main" />
      <br />
    </div>
  );
};

export default Home;
