import React from "react";
import Page from "@/app/(layout)/shop/[id]/page.jsx";

const Detail = ({ params }) => {
    return (
        <div>
            <Page params={params} />
        </div>
    );
};

export default Detail;
