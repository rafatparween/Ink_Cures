import Image from "next/image";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ServiceWeProvide from "./Components/ServiceWeProvide";
import Whyink from "./Components/Whyink";

export default function Home() {
  return(
    <>
      <Navbar/>
      <Banner/>
      <ServiceWeProvide/>
      <Whyink/>
    </>
  );
}
