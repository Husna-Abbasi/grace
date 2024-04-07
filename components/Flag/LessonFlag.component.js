import React from 'react';
import Image from "next/image";
import png1 from "../../public/Spanish-Flag-1-1.jpg";
import {FaArrowRight} from "react-icons/fa";
import png2 from "../..//public/American-Flag-1.jpg";

const LessonFlagComponent = () => {
    return (
        <div className="flex gap-2 items-center">
            <div className="flex items-center gap-0.5">
                <Image
                    className="w-8 h-8 rounded-full"
                    src={png1}
                    alt="American Flag"
                />
                <p className="font-semibold text-grey text-sm">English (US) </p>
            </div>
            <FaArrowRight className="text-grey h-2 w-3" />
            <div className="flex items-center gap-1">
                <Image
                    className="w-8 h-8 rounded-full"
                    src={png2}
                    alt="Spanish Flag"
                />
                <p className="font-semibold text-grey text-sm">Spanish (ES)</p>
            </div>
        </div>
    );
};

export default LessonFlagComponent;