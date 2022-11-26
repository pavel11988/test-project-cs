import Link from "next/link";
import { FC } from "react";
import Button from "./Button";

const Header: FC = () => {
  return (
    <header className="bg-background_black flex justify-center">
      <div className="h-20 w-378 pl-8 pr-16 px-2.5 flex items-center">
        <Link
          href="/#"
          className="mr-80 uppercase text-text_white text-3xl font-extrabold "
        >
          Test Site
        </Link>
        <Link
          href="/#"
          className="mr-96 text-text_white font-normal  hover:opacity-50 duration-200"
        >
          Learn more
        </Link>

        <div className="font-normal text-text_white flex justify-center items-center">
          <Link
            href="/login"
            className="mr-8 text-lg hover:opacity-50 duration-200"
          >
            Login
          </Link>

          <Button
            text={"Create Account"}
            href={"/register"}
            styles={
              "w-36 h-11 mr-8 text-base bg-background_orange rounded-full flex justify-center items-center hover:opacity-50 duration-200"
            }
          />
          <Button
            text={"Main site"}
            href={"/#"}
            styles={
              "w-32 h-11 text-base flex justify-center border-1 border-white rounded-full items-center hover:opacity-50 duration-200"
            }
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
