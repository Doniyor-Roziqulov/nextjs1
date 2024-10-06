import Filter from "@/components/filter/Filter";
import Product from "@/components/product/Product";
import Quality from "@/components/quality/Quality";
import Shoping from "@/components/shop/Shoping";
import React from "react";

const Shop = () => {
    return (
        <>
            <Shoping />
            <Filter />
            <Product />
            <Quality />
        </>
    );
};

export default Shop;
