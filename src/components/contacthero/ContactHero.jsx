import React from "react";
import houseimg from "../../../images/house.svg";
import Image from "next/image";
import "@/components/shop/Shop.css";

const ContactHero = () => {
    return (
        <section className="pt-[61px] pb-[97px] shop__hero">
            <div className="container mx-auto">
                <div>
                    <Image className="mx-auto" src={houseimg} alt="House" />
                    <h1 className="text-5xl font-medium text-center">
                        Contact
                    </h1>
                    <p className="font-medium text-center">
                        Home {">"} <span className="font-light ">Contact</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
