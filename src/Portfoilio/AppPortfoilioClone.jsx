// Components
import About from "./about/About";
import Contact from "./contact/Contact";
import Experiense from "./experiense/Experiense";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Portfoilio from "./portfoilio/Portfoilio";
import Servises from "./servises/Servises";
import Testimonitals from "./testimonials/Testimonitals";
// styles
import "./AppClone.scss";

function AppPortfoilioClone() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experiense />
      <Servises />
      <Portfoilio />
      <Testimonitals />
      <Contact />
      <Footer />
    </>
  );
}

export default AppPortfoilioClone;
