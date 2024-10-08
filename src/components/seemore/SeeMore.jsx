"use client";
import React from "react";

const SeeMore = ({ limit, setLimit }) => {
    console.log(limit);

    return (
        <div className="pb-[69px] pt-8 flex justify-center">
            <button
                onClick={() => setLimit(limit * 2)}
                className="text-[#B88E2F] block py-3 px-20 border border-[#B88E2F]">
                Show More
            </button>
        </div>
    );
};

export default SeeMore;
