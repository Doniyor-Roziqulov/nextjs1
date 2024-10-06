import React from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaCircle } from "react-icons/fa6";
import { IoIosAlbums } from "react-icons/io";

const Filter = () => {
    return (
        <section className="bg-[#F9F1E7] py-8">
            <div className="container mx-auto max-w-[1330px] px-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-[30px]">
                        <HiAdjustmentsHorizontal className="text-xl" />
                        <p className="text-xl">Filter</p>
                        <div className="w-5 h-5 gap-x-[2px] flex flex-wrap">
                            <FaCircle className="w-2 h-2" />
                            <FaCircle className="w-2 h-2" />
                            <FaCircle className="w-2 h-2" />
                            <FaCircle className="w-2 h-2" />
                        </div>
                        <div className="pr-7 border-r-2 border-[#9F9F9F]">
                            <IoIosAlbums className="text-xl" />
                        </div>
                        <p className="">Showing 1–16 of 32 results</p>
                    </div>
                    <div className="flex items-center gap-x-[30px]">
                        <div className="flex items-center gap-x-[17px]">
                            <p className="text-xl">Shop</p>
                            <input
                                className="text-[#9F9F9F] bg-white w-[55px] h-[55px]"
                                type="number"
                                value="16"
                            />
                        </div>
                        <div className="flex items-center gap-x-[17px]">
                            <p className="text-xl">Short by</p>
                            <select
                                className="text-[#9F9F9F] bg-white list-none py-3 pl-[30px] pr-[86px]"
                                name=""
                                id="">
                                <option value="Default">Default</option>
                                <option value="Default">Default</option>
                                <option value="Default">Default</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Filter;
