import Filter from "@/components/filter/Filter";
import Product from "@/components/product/Product";
import Products from "@/components/products/Products";
import Quality from "@/components/quality/Quality";
import Shoping from "@/components/shop/Shoping";
import React from "react";

async function getData() {
    const res = await fetch("https://dummyjson.com/products?limit=16");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const Shop = async () => {
    const data = await getData();
    return (
        <>
            <Shoping />
            <Filter />
            <Products data={data} />
            <Product />
            <Quality />
        </>
    );
};

export default Shop;
