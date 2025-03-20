
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import { ThemeProvider } from "../context/ThemeContext";

const Index = () => {
  useEffect(() => {
    // Add scroll animation initialization script
    const initScrollAnimation = () => {
      const scrollElements = document.querySelectorAll(".reveal:not(.active)");
      
      const elementInView = (el: Element, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
          elementTop <=
          (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
      };
      
      const displayScrollElement = (element: Element) => {
        element.classList.add("active");
      };
      
      const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
          if (elementInView(el, 1.25)) {
            displayScrollElement(el);
          }
        });
      };
      
      window.addEventListener("scroll", handleScrollAnimation);
      handleScrollAnimation(); // Check on load
      
      return () => window.removeEventListener("scroll", handleScrollAnimation);
    };
    
    initScrollAnimation();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Pricing />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
