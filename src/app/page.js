import Hero from "@/components/hero/Hero";
import Product from "@/components/product/Product";
import Range from "@/components/range/Range";

export default function Home() {
    return (
        <>
            <Hero />
            <Range />
            <h2 className="text-[40px] font-bold text-center">Our Products</h2>
            <Product />
        </>
    );
}
