"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, setTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <MdLightMode
          className=" cursor-pointer text-xl hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className=" cursor-pointer text-xl hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
