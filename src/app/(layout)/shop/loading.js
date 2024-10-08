import React from "react";
import "@/app/(layout)/shop/loading.css";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
};

export default Loading;
