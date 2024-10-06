import React from "react";
import { products } from "@/static";
import Image from "next/image";
import "@/components/product/Product.css";
import { IoMdShare } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

const Product = () => {
    const pro = products.map((e, inx) => (
        <div key={inx} className="w-[285px] relative pro__box">
            <Image alt="img" src={e.url} />
            <div className="px-4 pt-4 pb-[30px] bg-[#F4F5F7]">
                <h3 className=" text-2xl font-semibold mb-2">{e.title}</h3>
                <p className="font-medium text-[#898989] mb-2">{e.text}</p>
                <div className="flex items-center justify-between">
                    <p className="text-xl font-semibold">{e.price}</p>
                    <del className="text-[#B0B0B0]">{e.oldPrice}</del>
                </div>
            </div>
            <div
                style={{ backgroundColor: e.color }}
                className={`w-12 h-12 rounded-full flex items-center justify-center absolute top-6 right-6`}>
                <p className="text-white">{e.discount}</p>
            </div>
            <div className="pro__inner absolute w-full h-full bg-[#000b] z-20 top-0 left-0 flex flex-col gap-y-6 items-center justify-center">
                <button className="text-[#B88E2F] font-semibold py-3 px-[55px] bg-white">
                    Add to cart
                </button>
                <div className="flex gap-x-5 items-center">
                    <button className="flex items-center gap-x-[2px] font-semibold text-white">
                        <IoMdShare className="text-xl" />
                        Share
                    </button>
                    <button className="flex items-center gap-x-[2px] font-semibold text-white">
                        <IoGitCompareOutline className="text-xl" />
                        Compare
                    </button>
                    <button className="flex items-center gap-x-[2px] font-semibold text-white">
                        <IoIosHeartEmpty className="text-xl" />
                        Like
                    </button>
                </div>
            </div>
        </div>
    ));
    return (
        <section className="pt-[63px] pb-[85px]">
            <div className="container mx-auto max-w-[1330px] px-5">
                <div className="flex justify-between gap-y-10 flex-wrap">
                    {pro}
                    {pro}
                    {pro}
                    {pro}
                </div>
                <div className="flex pt-[70px] justify-center">
                    <div className="flex items-center gap-x-[38px]">
                        <button className="w-[60px] h-[60px] rounded-[10px] transition-all hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7] text-xl">
                            1
                        </button>
                        <button className="w-[60px] h-[60px] rounded-[10px] transition-all hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7] text-xl">
                            2
                        </button>
                        <button className="w-[60px] h-[60px] rounded-[10px] transition-all hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7] text-xl">
                            3
                        </button>
                        <button className="w-[98px] h-[60px] rounded-[10px] transition-all hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7] text-xl">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
