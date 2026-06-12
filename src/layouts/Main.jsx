import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import { useTheme } from "../context/ThemeContext";

const Main = () => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme} className="relative min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <NavBar />
      <Outlet />
      <div className="bg-[#2A374A] dark:bg-neutral">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
