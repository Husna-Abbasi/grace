import React from "react";

const ProgressBar = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex gap-0.5">
                <button className="bg-green-400 text-white px-2 rounded-xl text-sm w-14">25%</button>
                <button className="bg-Fblue text-white px-2 rounded-xl text-sm w-16">35%</button>
                <button className="bg-gray-300 text-white px-2 rounded-xl text-sm w-28">40%</button>
            </div>
            <div className="flex gap-2">
                <div className="text-center text-xs text-green-400">Beginner</div>
                <div className="text-center text-xs text-Fblue">Intermediate</div>
                <div className="text-center text-xs text-gray-300">Undetermined</div>
            </div>
        </div>
    );
};

export default ProgressBar;
