import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logofooter.svg";
import React from "react";

const Footer = () => {
    return (
        <footer className="pt-12 pb-[38px] border-t">
            <div className="container mx-auto max-w-[1330px] px-5">
                <div className="flex items-start justify-between border-b pb-12">
                    <div>
                        <Link className="mb-[50px] block" href={"/"}>
                            <Image src={logo} alt="Logo" />
                        </Link>
                        <p className="text-[#9F9F9F]">
                            400 University Drive Suite 200 Coral
                            <br />
                            Gables,
                            <br />
                            FL 33134 USA
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <strong className="text-[#9F9F9F] font-medium block mb-[55px]">
                            Links
                        </strong>
                        <Link className="font-medium mb-[46px]" href="/">
                            Home
                        </Link>
                        <Link className="font-medium mb-[46px]" href="/shop">
                            Shop
                        </Link>
                        <Link className="font-medium mb-[46px]" href="/about">
                            About
                        </Link>
                        <Link className="font-medium" href="/contact">
                            Contact
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <strong className="text-[#9F9F9F] font-medium block mb-[55px]">
                            Help
                        </strong>
                        <Link className="font-medium mb-[46px]" href="/**">
                            Payment Options
                        </Link>
                        <Link className="font-medium mb-[46px]" href="/shop**">
                            Returns
                        </Link>
                        <Link className="font-medium" href="/about**">
                            Privacy Policies
                        </Link>
                    </div>
                    <div>
                        <strong className="text-[#9F9F9F] font-medium block mb-[55px]">
                            Newsletter
                        </strong>
                        <form className="flex items-end gap-x-[11px]" action="">
                            <input
                                className="w-[200px] pt-2 pl-1 border-b border-black"
                                type="gmail"
                                placeholder="Enter Your Email Address"
                                required
                            />
                            <button className="text-sm font-medium border-b border-black">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <p className="pt-[35px]">
                        2023 furino. All rights reverved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
