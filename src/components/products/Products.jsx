"use client";
import Image from "next/image";
import React from "react";
import { IoMdShare } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import "@/components/product/Product.css";
import Link from "next/link";

const Products = ({ data }) => {
    return (
        <section className="pt-[63px]">
            <div className="container mx-auto max-w-[1330px] px-5">
                <div className="flex justify-start gap-x-10 gap-y-10 flex-wrap">
                    {data?.products?.map((el) => (
                        <div
                            key={el.id}
                            className="w-[285px] relative pro__box">
                            <Image
                                className="object-contain w-[285px] h-[301px]"
                                src={el.images[0]}
                                width="285"
                                height="301"
                                alt="img"
                            />
                            <div className="px-4 pt-4 pb-[30px] bg-[#F4F5F7]">
                                <h3 className=" text-2xl font-semibold mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
                                    {el.title}
                                </h3>
                                <p className="font-medium text-[#898989] mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
                                    {el.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-semibold">
                                        Rp {el.price}
                                    </p>
                                    <del className="text-[#B0B0B0]">
                                        Rp {el.discountPercentage}
                                    </del>
                                </div>
                            </div>
                            <div
                                className={`w-12 h-12 rounded-full flex bg-[#2EC1AC] items-center justify-center absolute top-6 right-6`}>
                                <p className="text-white">{el.rating}</p>
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
                                    <Link
                                        href={`/shop/${el.id}`}
                                        className="flex items-center gap-x-[2px] font-semibold text-white">
                                        <IoGitCompareOutline className="text-xl" />
                                        Compare
                                    </Link>
                                    <button className="flex items-center gap-x-[2px] font-semibold text-white">
                                        <IoIosHeartEmpty className="text-xl" />
                                        Like
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
