import Banner from "../../components/Banner/Banner";
import Priceing from "../../components/Priceing/Priceing";
import Schedule from "../../components/Schedule/Schedule";
import Speaker from "../../components/Speaker/Speaker";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Priceing></Priceing>
      <Schedule></Schedule>
      <Speaker></Speaker>
      <Footer></Footer>
    </div>
  );
};

export default Home;
