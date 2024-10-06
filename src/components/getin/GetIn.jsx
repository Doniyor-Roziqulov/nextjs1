import React from "react";
import { BiSolidMap } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const GetIn = () => {
    return (
        <section className="pt-[98px] pb-[63px]">
            <div className="container mx-auto max-w-[1330px] px-5">
                <h2 className="text-4xl font-semibold mb-2 text-center">
                    Get In Touch With Us
                </h2>
                <p className="text-[#9F9F9F] text-center mb-[14px]">
                    For More Information About Our Product & Services. Please
                    Feel Free To Drop Us <br /> An Email. Our Staff Always Be
                    There To Help You Out. Do Not Hesitate!
                </p>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-y-[42px] pl-[54px] pt-[114px] pr-[75px]">
                        <div className="flex items-start gap-x-[30px]">
                            <BiSolidMap className="text-2xl" />
                            <div>
                                <strong className="text-2xl font-medium block">
                                    Address
                                </strong>
                                <a
                                    href="https://maps.app.goo.gl/UnJnHTM4DRNAecX26"
                                    target="_blank">
                                    236 5th SE Avenue, New <br /> York NY10000,
                                    United <br /> States
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-[30px]">
                            <FaPhoneAlt className="text-2xl" />
                            <div>
                                <strong className="text-2xl font-medium block">
                                    Phone
                                </strong>
                                <div className="flex items-center">
                                    <p>Mobile:</p>
                                    <a href="tel:+845466789">+(84) 546-6789</a>
                                </div>
                                <div className="flex items-center">
                                    <p> Hotline:</p>
                                    <a href="tel:+844566789">+(84) 456-6789</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-[30px]">
                            <MdOutlineAccessTimeFilled className="text-2xl" />
                            <div>
                                <strong className="text-2xl font-medium block">
                                    Working Time
                                </strong>
                                <div>
                                    Monday-Friday:{" "}
                                    <time datetime="09:00">9:00</time> - <br />
                                    <time datetime="22:00">22:00</time>
                                    <br /> Saturday-Sunday:{" "}
                                    <time datetime="09:00">9:00</time> - <br />
                                    <time datetime="21:00">21:00</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[119px] pr-[52px]">
                        <form action="">
                            <div>
                                <p className="font-medium mb-[22px]">
                                    Your name
                                </p>
                                <input
                                    className="py-[22px] rounded-[10px] border mb-9 border-[#9F9F9F] pl-[30px] w-[528px]"
                                    type="text"
                                    required
                                    placeholder="Abc"
                                />
                            </div>
                            <div>
                                <p className="font-medium mb-[22px]">
                                    Email address
                                </p>
                                <input
                                    className="py-[22px] rounded-[10px] border mb-9 border-[#9F9F9F] pl-[30px] w-[528px]"
                                    type="email"
                                    required
                                    placeholder="Abc@def.com"
                                />
                            </div>
                            <div>
                                <p className="font-medium mb-[22px]">Subject</p>
                                <input
                                    className="py-[22px] rounded-[10px] mb-9 border border-[#9F9F9F] pl-[30px] w-[528px]"
                                    type="text"
                                    required
                                    placeholder="This is an optional"
                                />
                            </div>
                            <div className="mb-[49px]">
                                <p className="font-medium mb-[22px]">Message</p>

                                <textarea
                                    className="py-[22px] rounded-[10px] border border-[#9F9F9F] pl-[30px] w-[528px]"
                                    name="text"
                                    id=""
                                    placeholder="Hi! i’d like to ask about"></textarea>
                            </div>
                            <button className="text-white py-[14px] rounded px-[89px] bg-[#B88E2F]">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetIn;
