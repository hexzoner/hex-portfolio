import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LanguageProvider from "../Context/LanguageProvider.tsx";

const MainLayout = () => {
  return (
    <>
      <div className="font-[lato]">
        <LanguageProvider>
          <Navbar />
          <Outlet />
        </LanguageProvider>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
