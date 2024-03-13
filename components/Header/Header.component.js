'use client'
import React, {useState} from "react";
import Image from 'next/image'
import ButtonComponent from '../Button/Button.component';
import logo from '../../public/logo.svg';
import logo1 from '../../public/logo1.svg';
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PopupComponent from "../../components/Popup/Popup.component";
import LoginComponent from "../../components/Login/Login.component";
import Link from "next/link";

function HeaderComponent() {
    const [addLoginPopup,setAddLoginPopup] = useState(false)

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    const handleLoginSuccess = (userData) => {
        setIsLoggedIn(true);
        setUserName(userData.firstName);
        setAddLoginPopup(false);
    };
    return (
            <div
                className="h-[60px] bg-gradient-to-b from-[#b7daff] to-[#68acf5] text-black flex justify-between items-center pl-3 pr-3 border-b border-[#93c7ff]">
                <Link href='/'>
                <div className="flex items-center">
                    <Image src={logo1} alt="logo1" className="w-12 h-auto lg:w-14 lg:h-20" />
                    <Image src={logo} alt="logo" className="w-32 h-auto lg:w-44 lg:h-20"/>
                </div>
                </Link>
                <div className="">

                            {isLoggedIn ? (
                                    <div className="flex items-center">
                                        <p className="mr-2 text-grey ">Welcome, {userName}!</p>
                                        <FontAwesomeIcon icon={faHandsClapping} className="w-5 h-6 cursor-pointer text-yellow-400 " />
                                    </div>
                                ) : (
                            <ButtonComponent
                        className="bg-grey w-16 h-6 text-blue text-sm font-semibold rounded-sm"
                        label="LOG IN"
                        size="w-16 h-6"
                        onClick={()=> {
                            setAddLoginPopup(true)
                        }
                        }
                    />)}

                </div>
                <PopupComponent
                                showPopup={addLoginPopup}
                                setShowPopup={setAddLoginPopup}
                                showFooter={false}
                >
                    <LoginComponent onLoginSuccess={handleLoginSuccess} />
                </PopupComponent>
            </div>
        );
}
export default HeaderComponent;