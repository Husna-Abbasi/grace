import React from 'react';
import {FaGraduationCap, FaUserGraduate} from 'react-icons/fa';



const Progressbar = () => {
    return (
        <div className="flex justify-center items-center gap-5">
            <div className="flex  flex-col gap-4 justify-center h-96 ">
               <div className="flex justify-center gap-[50px] flex-col">
                   < FaUserGraduate className="w-[74px] h-[53px] "/>
                   <p className="pl-[11px] text-gray-500"> Total students</p>
               </div>

                <div className="flex gap-[44px] pl-[11px] items-center font-monserrat">
                    <p className=" text-base font-bold">4.5k</p>
                    <p className="text-base font-bold border border-solid rounded-[45px] flex justify-center items-center h-[24px] w-[62px] font-monserrat border-blue-500 text-[#0000e1]">+34%</p>
                </div>



            </div>
            <div className="border border-solid h-[156px] border-[#666666]"></div>


            <div className="flex  flex-col gap-4 justify-center h-96">
                <div className="flex justify-center gap-[50px] flex-col">
                    < FaGraduationCap className="w-[74px] h-[53px] "/>
                    <p className="pl-[11px] text-gray-500"> Total Courses</p>
                </div>
                <div className="flex gap-[44px] pl-[11px] items-center font-monserrat">
                    <p className=" text-base font-bold">100</p>
                    <p className="text-base font-bold border border-solid rounded-[45px] flex justify-center items-center h-[24px] w-[62px] font-monserrat border-pink-800 text-pink-900">+34%</p>
                </div>

            </div>
            <div className=" border border-solid h-[156px] border-[#666666]"></div>

            <div className="flex  flex-col gap-4 justify-center h-96">
                <div className="flex justify-center gap-[50px] flex-col">
                    <img className="w-[74px] h-[53px]" src="/dollor.png"/>
                    <p className="pl-[11px] text-gray-500"> Total Revenue</p>
                </div>
                <div className="flex gap-[44px] pl-[11px] items-center font-monserrat">
                    <p className=" text-base font-bold">$30k</p>
                    <p className="text-base font-bold border border-solid rounded-[45px] flex justify-center items-center h-[24px] w-[62px] font-monserrat border-red-700 text-red-700">+34%</p>
                </div>

            </div>




        </div>

    );
};

export default Progressbar;