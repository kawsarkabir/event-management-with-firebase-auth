import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import OurPopularEvent from "../../components/OurPopularEvent/OurPopularEvent";
import Priceing from "../../components/Priceing/Priceing";
import Schedule from "../../components/Schedule/Schedule";
import Speaker from "../../components/Speaker/Speaker";
import Footer from "../Footer/Footer";

const Home = () => {
  const eventData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <OurPopularEvent eventData={eventData}></OurPopularEvent>
      <Schedule></Schedule>
      <Speaker></Speaker>
      <Priceing></Priceing>
      <Footer></Footer>
    </div>
  );
};

export default Home;
