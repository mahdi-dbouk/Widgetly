import React from "react";

const Navbar = () => {
    return <div className="h-12 w-auto flex flex-row justify-start items-center px-5 gap-1 shadow-md">
        <div className="bg-green-500 rounded-full h-4 w-4"></div>
        <span className="font-bold text-xl">Widgetly</span>
    </div>
}

export default Navbar;