'use client'
import React from "react";
import Image from 'next/image'
import PropTypes from "prop-types";

/**
 * Lesson card component.
 * @param {Object} props - Component props.
 * @param {string} props.image - Image source for the lesson card.
 * @param {string} props.title - Title of the lesson.
 * @param {string} props.name - Name of the lesson.
 * @param {string} props.postType - Type of the lesson post.
 * @param {string} props.backgroundColor - backgroundColor.
 * @returns {JSX.Element}
 */
const PostCardComponent = ({image, title, name, postType, backgroundColor, width, height}) => {
    const cardStyle = {
        backgroundColor: backgroundColor,
    };
const imageStyle = {
     objectFit: 'cover',
    height: '100px',
};

    return (<div
        className="flex relative w-[265px] lg:w-[300px] rounded-md overflow-hidden border border-Sblue hover:scale-110 transition-transform ease-in-out duration-300">
        <div className="w-full object-cover">
            <Image
                src={image}
                alt="card"
                width={width}
                height={height}
                style={imageStyle}
            />
            <div className="text-[10px] rounded-3xl pl-[10px] pr-[10px] pt-[3px] pb-[3px] font-bold text-white text-center absolute top-3 left-3 opacity-90 "
                style={cardStyle}>
                {postType}
            </div>
            <h1 className="text-blueS text-center font-bold text-xs mx-2 mt-2 mb-1">{title}</h1>
            <p className="text-[10px] text-grey text-center opacity-60 mb-2">{name}</p>
        </div>

    </div>);
};
PostCardComponent.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    postType: PropTypes.string,
    backgroundColor: PropTypes.string,
};
export default PostCardComponent;
