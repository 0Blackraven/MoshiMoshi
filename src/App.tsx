import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./components/custom/hero";
import About from "./components/custom/about";
import NavBar from "./components/custom/navBar";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export function App() {
  return (
    <main className="realtive min-h-screen w-full overflow-x-hidden">
      <NavBar/>
      <Hero/>
      <About/>
    </main>
  );
}

export default App
