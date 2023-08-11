"use client";
import { navOptions } from "@/utils/navOps";

const NavItems2 = () => {
  return (
    <div
      className="items-center justify-between w-full md:flex md:w-auto"
      id="nav-items"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
        {navOptions.map((item) => (
          <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavItems2;
