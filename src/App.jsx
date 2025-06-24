import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import TestimonialsCarousel from "./components/Testemonials";
import StickyContactButton from "./components/Contact";
// import the rest when created: Features, Menu, CTA, Footer

function App() {
  return (
    <div className="bg-white font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Menu></Menu>
      <TestimonialsCarousel></TestimonialsCarousel>
      <CTA></CTA>
      <Footer></Footer>

      <StickyContactButton></StickyContactButton>
    </div>
  );
}

export default App;
