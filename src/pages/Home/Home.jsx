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
    const splashShown = localStorage.getItem("splashShown");

    if (splashShown) {
      setShowSplash(true); // Show splash screen if it's not shown before
      const timer = setTimeout(() => {
        setShowSplash(false); // Hide splash screen after 5 seconds
        localStorage.setItem("splashShown", "true");
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
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
