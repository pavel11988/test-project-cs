import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="font-inter font-normal">
      <Header />
      <Hero />
      <About />
    </div>
  );
}
