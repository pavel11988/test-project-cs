import Image from "next/image";

const HeroGallery = () => {
  return (
    <ul className="flex justify-around">
      <li>
        <Image
          src={"/hero_automotive.png"}
          alt={"automotive"}
          width={79}
          height={48}
        />
      </li>
      <li>
        <Image
          src={"/hero_carters.png"}
          alt={"carters"}
          width={138}
          height={48}
        />
      </li>
      <li>
        <Image
          src={"/hero_automotive.png"}
          alt={"automotive"}
          width={79}
          height={48}
        />
      </li>
      <li>
        <Image
          src={"/hero_hanlon.png"}
          alt={"hanlon"}
          width={218}
          height={48}
        />
      </li>
      <li>
        <Image
          src={"/hero_placemakers.png"}
          alt={"automotive"}
          width={175}
          height={48}
        />
      </li>
      <li>
        <Image src={"/hero_regal.png"} alt={"regal"} width={155} height={48} />
      </li>
    </ul>
  );
};

export default HeroGallery;
