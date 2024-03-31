import React from 'react';
import Image from "next/image";
import {FaCircleCheck} from "react-icons/fa6";
/**
 * Featured content card component.
 * @param {string} imageSrc - Image source for the card.
 * @param {string} title - Title of the featured content.
 * @param {string} description - Description of the featured content.
 * @param {Array} links - List of links with objects containing url and text.
 * @returns {JSX.Element}
 */
const FeaturedContentCardComponent = ({imageSrc, title, description, links }) => {
    return (
            <div className="w-auto flex justify-center items-center bg-white flex-col md:flex-row">
                <div className="w-auto md:w-[50%] p-6">
                    <Image src={imageSrc} alt="Flag" className="rounded-lg"/>
                </div>
                <div className="spanishRight p-6 flex gap-4 flex-col ">
                    <h1 className="text-2xl font-bold text-[#5d85ad]">
                        {title}
                    </h1>
                    <p className="mb-3 text-sm font-thin text-black flex-wrap">
                        {description}
                    </p>
                    <div className="spanishlink flex flex-col gap-4">
                        {links.map((link, index) => (
                            <div className="flex items-center gap-3" key={index}>
                                <FaCircleCheck className="text-[#5d85ad] text-sm" />
                                <a
                                    href={link.url}
                                    className="text-[#0074e2] font-semibold text-sm hover:text-[#303030]"
                                >
                                    {link.text}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default FeaturedContentCardComponent;