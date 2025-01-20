import Link from "next/link";
import React from "react";

const navbarItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <div className="h-full w-full  hidden md:block">
      <ul className="flex gap-6 text-2xl font-semibold justify-center items-center h-full ">
        {navbarItems.map(({ name, path }) => (
          <li key={path}><Link href={path}>{name}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
