'use client'
import React from "react";
import Image from 'next/image'
import PropTypes from "prop-types";
/**
 * Lesson card component.
 * @param {Object} props - Component props.
 * @param {string} props.image - Image source for the lesson card.
 * @param {string} props.title - Title of the lesson.
 * @param {string} props.description - Description of the lesson.
 * @param {string} props.postType - Type of the lesson post.
 * @param {string} props.backgroundColor - backgroundColor.
 * @returns {JSX.Element}
 */
const LessonCardComponent = ({image,title,description,postType,backgroundColor,width,height}) => {
    const cardStyle = {
        backgroundColor: backgroundColor,
    };

    return (<div
            className="relative w-[265px] md:w-[340px]2 rounded-md overflow-hidden border border-Sblue hover:scale-110 transition-transform ease-in-out duration-300">
        <div className="w-full relative object-cover">
            <Image
                src={image}
                alt="card"
                width={width}
                height={height}
            />
        </div>

            <h4 className="text-[10px] rounded-3xl pl-[10px] pr-[10px] pt-[3px] pb-[3px] font-bold text-white text-center absolute top-3 left-3"
                style={cardStyle}>
                {postType}
            </h4>
        <h1 className="text-blueS font-bold text-xs text-center mb-2 pl-3 pr-3 pt-1">{title}</h1>
        <p className="text-[10px] text-center pl-3 pr-3 text-grey opacity-60 mb-2">{description}</p>

    </div>);
};
LessonCardComponent.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    postType: PropTypes.string,
    backgroundColor: PropTypes.string,
};
export default LessonCardComponent;
