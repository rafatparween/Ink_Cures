import Image from "next/image";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ServiceWeProvide from "./Components/ServiceWeProvide";
import Whyink from "./Components/Whyink";
import StatsSection from "./Components/StatsSection";
import ImageSlider from "./Components/ImageSlider";
import PrinterCategories from "./Components/PrinterCategories";
import Testimonials from "./Components/Testimonials";
import Blog from "./Components/Blog";
import FixItSection from "./Components/FixItSection";
import Footer from "./Components/Footer";

export default function Home() {
  return(
    <>
      <Navbar/>
      <Banner/>
      <ServiceWeProvide/>
      <Whyink/>
      <StatsSection/>
      <ImageSlider/>
      <PrinterCategories/>
      <Testimonials/>
      <Blog/>
      <FixItSection/>
    </>

    
  );
}
