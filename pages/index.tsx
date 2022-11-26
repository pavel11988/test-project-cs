import About from "../components/pages/home/About";
import Header from "../components/Header";
import Hero from "../components/pages/home/Hero";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/home");
  const { data } = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data,
    },
  };
};

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { home } = data;
  return (
    <div className="font-inter font-normal">
      <Header data={home.header} />
      <Hero data={home.hero} />
      <About data={home.about} />
    </div>
  );
}
