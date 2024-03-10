import React from 'react';
import Image from 'next/image'
import ButtonComponent from "../Button/Button.component";
import logo from '../../public/FL-Logo-Name-Text-Hannah-transparent-background.svg';

const AboutSectionComponent = () => {
    return (<div className="flex justify-center items-center bg-gradient-to-b from-[#b7daff] to-[#68acf5] h-full flex-col gap-5 py-14">
        <div className="w-64 md:w-72">
            <Image src={logo} alt="logo"/>
        </div>
        <div className="text-center w-[22rem] md:w-[750px] ">
            <p className="text-sm text-black font-extralight"> <h className="font-semibold text-sm">Flying Languages</h> is a new way to teach language students of all ages — adults and children.</p>
            <p className="text-sm text-black font-extralight">We use technology to create video lessons on the most actual and interesting topics, and let students
                utilize the most advanced tech to get the fastest and most efficient learning.
            </p>
        </div>
        <div>
            <ButtonComponent
                className="bg-none w-36 h-10 text-white font-semibold text-sm rounded-sm border-white border-[1px]"
                label="More about us"
            />
        </div>

    </div>);
};

export default AboutSectionComponent;