import React from "react";
import Link from "next/link";
import logo from "../../images/logo.svg";
import Image from "next/image";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
    return (
        <header className="py-[30px]">
            <div className="container mx-auto max-w-[1330px] px-5">
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <Image src={logo} alt="Logo" />
                    </Link>
                    <nav className="flex items-center gap-x-[75px]">
                        <Link className="text-base font-medium" href={"/"}>
                            Home
                        </Link>
                        <Link className="text-base font-medium" href={"/about"}>
                            About
                        </Link>
                        <Link className="text-base font-medium" href={"/shop"}>
                            Shop
                        </Link>
                        <Link
                            className="text-base font-medium"
                            href={"/contact"}>
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-x-[45px]">
                        <Link className="text-2xl" href={"/*"}>
                            <MdOutlineManageAccounts />
                        </Link>
                        <Link className="text-2xl" href={"/*"}>
                            <IoSearch />
                        </Link>
                        <Link className="text-2xl" href={"/*"}>
                            <IoIosHeartEmpty />
                        </Link>
                        <Link className="text-2xl" href={"/*"}>
                            <IoCartOutline />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
