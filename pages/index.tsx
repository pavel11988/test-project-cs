import About from "../components/pages/home/About";
import Hero from "../components/pages/home/Hero";
import Header from "../components/Header";

import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="font-inter font-normal">
      <Header />
      <Hero
        title={data.hero.title}
        main_text={data.hero.main_text}
        teams_text={data.hero.teams_text}
        teams_logos={data.hero.teams_logos}
      />
      <About
        title={data.about.title}
        text={data.about.text}
        trades={data.about.trades}
        about_logos={data.about.about_logos}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/data");
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
