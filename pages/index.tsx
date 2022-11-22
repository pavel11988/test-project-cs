import About from "../components/pages/home/About";
import Header from "../components/Header";
import Hero from "../components/pages/home/Hero";

export default function Home() {
  return (
    <div className="font-inter font-normal">
      <Header />
      <Hero />
      <About />
    </div>
  );
}
