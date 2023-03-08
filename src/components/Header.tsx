import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div
      className=" flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6
    "
    >
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div>
        <Link href="www.imdb.com">
          <h2 className=" text-2xl">
            <span className=" font-bold py-1 px-2 bg-amber-500 rounded-lg">
              IMDb
            </span>
            <span className=" text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
