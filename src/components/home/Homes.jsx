import React from "react";
import SeeMore from "../seemore/SeeMore";
import Products from "../products/Products";

const Homes = async ({ limit, setLimit }) => {
    async function getData() {
        const res = await fetch(
            `https://dummyjson.com/products?limit=${limit}`
        );

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();
    }
    const data = await getData();
    return (
        <div>
            <Products data={data} />
            <SeeMore limit={limit} setLimit={setLimit} />
        </div>
    );
};

export default Homes;
