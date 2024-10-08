import React from "react";
import "@/components/product/Product.css";

const Product = () => {
    return (
        <section className="pb-[85px]">
            <div className="container mx-auto max-w-[1330px] px-5">
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
