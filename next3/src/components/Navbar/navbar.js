"use client";

import { adminNavOptions, navOptions } from "@/utils/navOps";
import { Fragment } from "react";
import ButtonHamburger from "./ButtonHamburger";
import ButtonNav from "./ButtonNav";

const isAdminView = false;
const isAuthUser = true;
const user = {
  role: "admin",
};

function NavItems() {
  return (
    <div
      className="items-center justify-between w-full md:flex md:w-auto"
      id="nav-items"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
        {isAdminView
          ? adminNavOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
              >
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0">
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center cursor-pointer">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Zizi & Ruby
            </span>
          </div>
          <div className="flex md:order-2 gap-2 ">
            {!isAdminView && isAuthUser ? (
              <Fragment>
                <ButtonNav title="Account" />
                <ButtonNav title="Cart" />
              </Fragment>
            ) : null}
            {user?.role === "admin" ? (
              isAdminView ? (
                <ButtonNav title="Client View" />
              ) : (
                <ButtonNav title="Admin View" />
              )
            ) : null}
            {isAuthUser ? (
              <ButtonNav title="Logout" />
            ) : (
              <ButtonNav title="Login" />
            )}
            <ButtonHamburger />
          </div>
          <NavItems />
        </div>
      </nav>
    </>
  );
}
