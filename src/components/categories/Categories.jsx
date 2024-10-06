import Image from "next/image";
import React from "react";
import img from "../../../images/catimg.png";
import { FiSearch } from "react-icons/fi";

const Categories = () => {
    return (
        <section className="pt-[84px]">
            <div className="container mx-auto max-w-[1330px] px-5">
                <div className="flex justify-between items-start">
                    <Image src={img} alt="img" />
                    <div className="pt-[22px] px-[41px] pb-[61px]">
                        <div className="rounded-[10px] border-[#9F9F9F] border w-[311px] h-[58px] flex items-center justify-between pr-[10px]">
                            <input
                                className="rounded-[10px]  w-[280px] h-[56px]"
                                type="search"
                                name="search"
                                id=""
                            />
                            <FiSearch className="text-2xl" />
                        </div>
                        <h3 className="text-2xl font-medium mt-[43px] ml-9 mb-[33px]">
                            Categories
                        </h3>
                        <div className="text-[#9F9F9F] flex items-center justify-between ml-9 mr-[25px] mb-[46px]">
                            <p>Crafts</p>
                            <p>2</p>
                        </div>
                        <div className="text-[#9F9F9F] flex items-center justify-between ml-9 mr-[25px] mb-[46px]">
                            <p>Design</p>
                            <p>8</p>
                        </div>
                        <div className="text-[#9F9F9F] flex items-center justify-between ml-9 mr-[25px] mb-[46px]">
                            <p>Handmade</p>
                            <p>7</p>
                        </div>
                        <div className="text-[#9F9F9F] flex items-center justify-between ml-9 mr-[25px] mb-[46px]">
                            <p>Interior</p>
                            <p>1</p>
                        </div>
                        <div className="text-[#9F9F9F] flex items-center justify-between ml-9 mr-[25px]">
                            <p>Wood</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
