"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  title: string;
  params: string;
};

export default function NavbarItem({ title, params }: Props) {
  const serachParam = useSearchParams();
  const genre = serachParam.get("genre");
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre &&
          genre === params &&
          "underline-offset-8 underline decoration-4 decoration-amber-500 rounded-lg"
        }`}
        href={`/?genre=${params}`}
      >
        {title}
      </Link>
    </div>
  );
}
