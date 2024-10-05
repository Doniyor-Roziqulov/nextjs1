import React from "react";
import "@/components/hero/Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container mx-auto max-w-[1330px] px-5">
                <div className="pt-[153px] pb-[116px] flex justify-end">
                    <div className="w-[643px] bg-[#FFF3E3] rounded-[10px] pt-[62px] pr-14 pb-9 pl-10">
                        <p className="font-semibold mb-1">New Arrival</p>
                        <h1 className="text-[52px] font-bold leading-[65px] text-[#B88E2F] mb-[17px]">
                            Discover Our New Collection
                        </h1>
                        <p className="text-lg mb-[46px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </p>
                        <button className="text-white font-bold py-[25px] px-[72px] bg-[#B88E2F]">
                            BUY NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
