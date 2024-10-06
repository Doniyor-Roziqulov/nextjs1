import React from "react";
import img1 from "../../../images/range1.png";
import img2 from "../../../images/range2.png";
import img3 from "../../../images/range3.png";
import Image from "next/image";

const Range = () => {
    return (
        <section className="pt-[58px]">
            <div className="container mx-auto max-w-[1330px] px-5 pb-14">
                <h2 className="text-3xl font-bold text-center">
                    Browse The Range
                </h2>
                <p className="text-xl text-center text-[#666666] mb-[62px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center justify-between">
                    <div>
                        <Image src={img1} alt="img" />
                        <h3 className="text-2xl font-semibold mt-6 text-center">
                            Dining
                        </h3>
                    </div>
                    <div>
                        <Image src={img2} alt="img" />
                        <h3 className="text-2xl font-semibold mt-6 text-center">
                            Living
                        </h3>
                    </div>
                    <div>
                        <Image src={img3} alt="img" />
                        <h3 className="text-2xl font-semibold mt-6 text-center">
                            Bedroom
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Range;
