"use client";

import { Fragment, useContext } from "react";
import ButtonNav from "./ButtonNav";
import ButtonHamburger from "./ButtonHamburger";
import NavItems2 from "./NavItems2";
import NavItems1 from "./NavItems1";
import { GlobalContext } from "../context/globalContext";
import CommonModal from "./CommonModal";

const isAdminView = false;
const isAuthUser = true;
const user = {
  role: "admin",
};

export default function Navbar() {
  const { showNavModal, setShowNavModal } = useContext(GlobalContext);
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
            <ButtonHamburger onClick={() => setShowNavModal(true)} />
          </div>
          {isAdminView ? <NavItems1 /> : <NavItems2 />}
        </div>
      </nav>
      <CommonModal
        showModalTitle={false}
        mainContent={<NavItems2 />}
        show={showNavModal}
        setShow={setShowNavModal}
      />
    </>
  );
}
