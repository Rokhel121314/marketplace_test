"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { data: session } = useSession();

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className="w-full flex h-16 items-center justify-between text-gray-200 relative ">
      <div className="brand ps-5">
        <Link href="/">
          <Image
            src="/assets/images/profile.png"
            alt="profile"
            width={37}
            height={37}
          />
        </Link>
      </div>
      <div className="link sm:flex hidden">
        <Link className="mr-7" href="/">
          HOME
        </Link>
        <Link className="mr-7" href="/login">
          LOG IN
        </Link>
        <Link className="mr-7" href="/register">
          REGISTER
        </Link>
        <Link className="mr-7" href="/all-products">
          ALL PRODUCTS
        </Link>
      </div>

      {/* MOBILE VIEW NAVIGATION */}
      <div className="sm:hidden me-5" onClick={toggleNav}>
        {toggle ? (
          <Image src="/assets/images/delete.png" width={30} height={30} />
        ) : (
          <Image src="/assets/images/menu-bar.png" width={30} height={30} />
        )}
      </div>

      {toggle ? (
        <div className="sm:hidden h-[100px] w-[120px] rounded-xl bg-white absolute top-[60px] right-[6vw] flex flex-col justify-evenly items-start">
          <Link className="ms-4" href="/">
            HOME
          </Link>
          <Link className="ms-4" href="/all-products">
            ALL PRODUCTS
          </Link>
          {session ? (
            <button
              className="ms-4  text-gray-200 bg-green-950 px-4 py-1 rounded-2xl"
              onClick={() => {
                signOut();
              }}>
              {session.user?.name}
            </button>
          ) : (
            <button
              className="ms-4  text-gray-200 bg-green-950 px-4 py-1 rounded-2xl"
              onClick={() => {
                signIn();
              }}>
              SIGN IN
            </button>
          )}
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
