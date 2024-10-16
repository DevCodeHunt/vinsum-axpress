import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home/Home"));

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Suspense>
      <Toaster />
    </>
  );
}
