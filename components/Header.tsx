import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black flex justify-center">
      <div className=" h-[72px] w-[1511px] pl-[34px] pr-[63px] pt-[10px] pb-[10px] flex items-center">
        <Link
          href="/#"
          className="mr-[346px] uppercase text-text_white text-[32px] font-extrabold "
        >
          Test site
        </Link>
        <Link
          href="/#"
          className="mr-[400px] text-text_white font-normal  hover:opacity-50 duration-200"
        >
          Learn more
        </Link>
        <div className="font-normal text-text_white flex justify-center items-center">
          <Link
            href="/login"
            className="mr-[32px] text-[18px] hover:opacity-50 duration-200"
          >
            Login
          </Link>
          <div className="w-[145px] h-[46px] mr-[32px] text-[15px] bg-background_orange rounded-full flex justify-center items-center hover:opacity-50 duration-200">
            <Link href="/register">Create Account</Link>
          </div>
          <div className="w-[123px] h-[46px] flex justify-center border-[1px] border-white rounded-full items-center hover:opacity-50 duration-200">
            <Link href="/#" className="text-[16px]">
              Main site
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
