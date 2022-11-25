import Image from "next/image";

interface Props {
  category: string;
}

const AboutGallery = ({ category }: Props) => {
  if (!category || category !== "radio") {
    return <p>No data</p>;
  }
  if (category === "radio") {
    return (
      <div className="flex">
        <ul className="mt-20 flex flex-col [&>*]:m-3">
          <li>
            <Image
              src={"/radio_gold.png"}
              alt={"gold"}
              width={168}
              height={168}
            />
          </li>
          <li>
            <Image
              src={"/radio_newstalk.png"}
              alt={"newstalk"}
              width={168}
              height={168}
            />
          </li>
          <li>
            <Image
              src={"/radio_hits.png"}
              alt={"hits"}
              width={168}
              height={168}
            />
          </li>
          <li>
            <Image
              src={"/radio_flava.png"}
              alt={"flava"}
              width={168}
              height={168}
            />
          </li>
        </ul>
        <ul className="flex flex-col [&>*]:m-3">
          <li>
            <Image
              src={"/radio_huaraki.png"}
              alt={"huaraki"}
              width={168}
              height={168}
            />
          </li>
          <li>
            <Image src={"/radio_zm.png"} alt={"zm"} width={168} height={168} />
          </li>
          <li>
            <Image
              src={"/radio_coast.png"}
              alt={"coast"}
              width={168}
              height={168}
            />
          </li>
          <li>
            <Image
              src={"/radio_iheart.png"}
              alt={"iheard"}
              width={168}
              height={168}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default AboutGallery;
