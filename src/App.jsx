import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatBot from "./components/ChatBot";
import { ROUTES } from "./utils/routes";
import TrackShipmentModal from "./components/modals/TrackShipmentModal";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Contact = lazy(() => import("./pages/Contact"));
const Career = lazy(() => import("./pages/Career"));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ChatBot />
      <Navbar />
      <TrackShipmentModal />
      <Suspense>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.SERVICE} element={<Service />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.CAREER} element={<Career />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />

      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
}
