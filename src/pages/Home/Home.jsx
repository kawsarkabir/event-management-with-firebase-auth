import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import OurPopularEvent from "../../components/OurPopularEvent/OurPopularEvent";
import Priceing from "../../components/Priceing/Priceing";
import Schedule from "../../components/Schedule/Schedule";
import Speaker from "../../components/Speaker/Speaker";
import Footer from "../Footer/Footer";
import { useState } from "react";

const Home = () => {
  const services = useLoaderData()
  console.log(services);
  const [data, setData] = useState([])

  return (
    <div>
      <Banner></Banner>
      <OurPopularEvent services={services}></OurPopularEvent>
      <Schedule></Schedule>
      <Speaker></Speaker>
      <Priceing></Priceing>
      <Footer></Footer>
    </div>
  );
};

export default Home;
