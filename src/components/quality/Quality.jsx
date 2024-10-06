import React from "react";
import { lists } from "@/static";
import Image from "next/image";

const Quality = () => {
    const pro = lists.map((e, inx) => (
        <div className="flex items-center gap-x-[10px]" key={inx}>
            <Image src={e.url} alt="img" />
            <div>
                <h3 className="text-[25px] font-semibold">{e.title}</h3>
                <p className="text-xl font-medium text-[#898989]">{e.text}</p>
            </div>
        </div>
    ));
    return (
        <section className="pb-[30px]">
            <div className="py-[100px] bg-[#FAF3EA]">
                <div className="container mx-auto max-w-[1330px] px-5">
                    <div className="flex items-center justify-between">
                        {pro}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;
