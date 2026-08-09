import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import ColdOpen from "./scenes/ColdOpen";
import RawCode from "./scenes/RawCode";
import Architecture from "./scenes/Architecture";
import SystemAlive from "./scenes/SystemAlive";
import Products from "./scenes/Products";
import TechDepth from "./scenes/TechDepth";
import ProblemSolving from "./scenes/ProblemSolving";
import BusinessHuman from "./scenes/BusinessHuman";
import Experience from "./scenes/Experience";
import CurrentFocus from "./scenes/CurrentFocus";
import Contact from "./scenes/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <CustomCursor />
      <Navbar />
      <ScrollProgress />

      <main>
        <ColdOpen />
        <RawCode />
        <Architecture />
        <SystemAlive />
        <Products />
        <TechDepth />
        <ProblemSolving />
        <BusinessHuman />
        <Experience />
        <CurrentFocus />
        <Contact />
      </main>
    </div>
  );
}
