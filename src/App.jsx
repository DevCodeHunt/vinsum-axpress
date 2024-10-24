import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatBot from "./components/ChatBot";
import { ROUTES } from "./utils/routes";
import TrackShipmentModal from "./components/modals/TrackShipmentModal";
import MediaGalleryModal from "./components/modals/MediaGalleryModal";
import { useMediaGalleryStore, useTrackShipmentStore } from "./stores";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Contact = lazy(() => import("./pages/Contact"));
const Career = lazy(() => import("./pages/Career"));
const Franchise = lazy(() => import("./pages/Franchise"));
const MediaCenter = lazy(() => import("./pages/MediaCenter"));
const BlogDetail = lazy(() => import("./pages/BlogDetail/BlogDetail"));

export default function App() {
  const isMediaGalleryOpen = useMediaGalleryStore((state) => state.open);
  const isTrackShipmentOpen = useTrackShipmentStore((state) => state.open);
  return (
    <>
      <ScrollToTop />

      <Suspense>
        <ChatBot />
        <Navbar />
        {isTrackShipmentOpen && <TrackShipmentModal />}
        {isMediaGalleryOpen && <MediaGalleryModal />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.SERVICE} element={<Service />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.CAREER} element={<Career />} />
            <Route path={ROUTES.FRANCHISE} element={<Franchise />} />
            <Route path={ROUTES.MEDIACENTER} element={<MediaCenter />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>

      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
}
