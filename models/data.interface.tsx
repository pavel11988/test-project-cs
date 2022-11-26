export interface ImageProps {
  id: string;
  company: string;
  src: string;
  width: number;
  height: number;
}
export interface HeaderProps {
  title: string;
}
export type HeroProps = {
  title: string;
  main_text: string;
  teams_text: string;
  teams_logos: ImageProps[] | null;
};

export interface AboutLogos {
  [key: string]: ImageProps[] | [] | null;
  // social: ImageProps[] | null;
  // radio: ImageProps[] | null;
  // social_vide: ImageProps[] | null;
  // reporting: ImageProps[] | null;
}

export interface AboutProps {
  title: string;
  text: string;
  trades: {
    social: {
      title: string;
      text: string;
    };
    radio: {
      title: string;
      text: string;
    };
    social_video: {
      title: string;
      text: string;
    };
    reporing: {
      title: string;
      text: string;
    };
  };
  about_logos: AboutLogos;
}

export interface HomeProps {
  header: {
    title: string;
  };
  hero: {
    title: string;
    main_text: string;
    teams_text: string;
    teams_logos: ImageProps[] | null | [];
  };
  about: {
    title: string;
    text: string;
    trades: {
      social: {
        title: string;
        text: string;
      };
      radio: {
        title: string;
        text: string;
      };
      social_video: {
        title: string;
        text: string;
      };
      reporing: {
        title: string;
        text: string;
      };
    };
    about_logos: {
      social: ImageProps[] | null | [];
      radio: ImageProps[] | null | [];
      social_vide: ImageProps[] | null | [];
      reporting: ImageProps[] | null | [];
    };
  };
}

export interface AboutTrades {
  [key: string]: {
    id: string;
    name: string;
    title: string;
    text: string;
  };
}

export interface ResponseData {
  home: {
    header: {
      title: string;
    };
    hero: {
      title: string;
      main_text: string;
      teams_text: string;
      tems_logos: ImageProps[] | null | [];
    };
    about: {
      title: string;
      text: string;
      trades: AboutTrades;
      about_logos: {
        social: ImageProps[] | null | [];
        radio: ImageProps[] | null | [];
        social_vide: ImageProps[] | null | [];
        reporting: ImageProps[] | null | [];
      };
    };
  };
}
