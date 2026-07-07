import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./components/custom/hero";
import About from "./components/custom/about";
import NavBar from "./components/custom/navBar";
import Features from "./components/custom/features";
import Story from "./components/custom/story";
import Contact from "./components/custom/contact";
import Footer from "./components/custom/footer";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export function App() {
  return (
    <main className="realtive min-h-screen w-full overflow-x-hidden scroll-smooth">
      <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App
