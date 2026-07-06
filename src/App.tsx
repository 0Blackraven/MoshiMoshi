import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./components/custom/hero";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export function App() {
  return (
    <main className="realtive min-h-screen w-full overflow-x-hidden">
      <Hero/>
      <section className="h-dvh w-screen bg-amber-50"/>
    </main>
  );
}

export default App
