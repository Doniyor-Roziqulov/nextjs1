"use client";
import Hero from "@/components/hero/Hero";
import Homes from "@/components/home/Homes";
import Range from "@/components/range/Range";
import { useState } from "react";

const Home = () => {
    const [limit, setLimit] = useState(8);
    return (
        <>
            <Hero />
            <Range />
            <h2 className="text-[40px] font-bold text-center">Our Products</h2>
            <Homes limit={limit} setLimit={setLimit} />
        </>
    );
};

export default Home;
