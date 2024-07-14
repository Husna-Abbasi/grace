import React from 'react';
import ButtonComponent from "../../components/Button/Button.component";

const BecomeMemberComponent = (
    {title, description, signInTitle, signInDescription}) => {
    return (
        <div className="flex items-center justify-center ">
            <div className="bg-white p-8 w-96 flex flex-col gap-7 rounded">
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl font-bold text-blues">{title}</h1>
                    <p className="text-slate-600 text-sm">{description}</p>
                    <ButtonComponent
                        backgroundColor="bg-blueS "
                        label="Register an Account"
                        className="bg-blueS shadow-sm px-[20px] py-[13px] w-full text-white font-semibold text-[18px] rounded-[5px]"
                    />
                </div>
                <div className=" flex flex-col gap-4">
                    <h1 className="text-xl font-bold text-blues">{signInTitle}</h1>
                    <p className="text-slate-600">{signInDescription}</p>
                    <ButtonComponent
                        backgroundColor="bg-blueS "
                        label="Continue with google"
                        className="bg-blueS shadow-sm px-[20px] py-[13px] w-full text-white font-semibold text-[18px] rounded-[5px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default BecomeMemberComponent;