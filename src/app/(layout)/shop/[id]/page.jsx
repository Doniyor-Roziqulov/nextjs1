import Image from "next/image";
import React from "react";

const Detail = async ({ params }) => {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
    const data = await response.json();
    console.log(data.images.length);

    return (
        <section className="pt-9 pb-20">
            <div className="container mx-auto max-w-[1330px] px-5">
                <div className="flex items-start justify-between">
                    <div className="w-1/2 flex gap-x-[30px]">
                        {data?.images?.length > 1 ? (
                            <div className="flex flex-col gap-y-5">
                                <Image
                                    className="object-contain w-20 h-20 bg-[#F9F1E7] rounded-[10px]"
                                    src={data?.images[0]}
                                    alt="photo"
                                    width="80"
                                    height="80"
                                />
                                <Image
                                    className="object-contain w-20 h-20 bg-[#F9F1E7] rounded-[10px]"
                                    src={data?.images[1]}
                                    alt="photo"
                                    width="80"
                                    height="80"
                                />
                                <Image
                                    className="object-contain w-20 h-20 bg-[#F9F1E7] rounded-[10px]"
                                    src={data?.images[2]}
                                    alt="photo"
                                    width="80"
                                    height="80"
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="bg-[#F9F1E7] w-[423px] h-[500px] rounded-[10px]">
                            <Image
                                className="object-contain w-[423px] h-[500px]"
                                width="423"
                                height="500"
                                src={data?.images[0]}
                                alt="photo"
                            />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="w-[424px]">
                            <h3 className="text-[42px]">{data?.title}</h3>
                            <p className="text-2xl text-[#9F9F9F] mb-4 font-medium">
                                Rs. {data?.price}
                            </p>
                            <p className="text-[13px] mb-[22px]">
                                {data?.description}
                            </p>
                            <p>{data?.brand}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;
