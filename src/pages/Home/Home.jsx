import { useEffect, useState } from "react";
import SplashScreen from "../../components/SplashScreen";
import AboutSection from "./sections/AboutSection";
import AboutSection2 from "./sections/AboutSection2";
import HeroSection from "./sections/HeroSection";
import OfficeSection from "./sections/OfficeSection";
import ServiceSection from "./sections/ServiceSection";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // Hide splash screen after 2 seconds
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AboutSection2 />
      <ServiceSection />
      <OfficeSection />
    </>
  );
};

export default Home;
