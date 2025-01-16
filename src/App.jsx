import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experince";
import Skills from "./components/Skills";

export default function App() {
  return (
    <body className="bg-bgDark">
      <Navbar />
      <main className="container text-textWhite px-5 md:px-8 mx-auto">
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </body>
  );
}
