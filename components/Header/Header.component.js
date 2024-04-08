'use client'
import React, {useCallback, useEffect, useState} from "react";
import Image from 'next/image'
import ButtonComponent from '../Button/Button.component';
import logo from '../../public/logo.svg';
import logo1 from '../../public/logo1.svg';
import PopupComponent from "../../components/Popup/Popup.component";
import LoginComponent from "../../components/Login/Login.component";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {loginSuccess} from "@/store/actions/api.action";
import {useRouter} from "next/navigation";
import {resetStoreAction} from "@/store/actions/reset-store.action";
import {Dropdown, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {getUserDataApi} from "@/store/api/user.api";

function HeaderComponent() {
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user.userData);
    const [addLoginPopup, setAddLoginPopup] = useState(false)

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    console.log('userData.', userData)
    useEffect(() => {
        if (userData) {
            setIsLoggedIn(true);
            setUserName(userData.firstName);
        }
    }, [userData]);
    const handleLoginSuccess = (userData) => {
        setIsLoggedIn(true);
        setUserName(userData.firstName);
        setAddLoginPopup(false);
        dispatch(loginSuccess(userData.accessToken, userData));
    };

    const handleLogout = useCallback(() => {
        dispatch(resetStoreAction());
        localStorage.removeItem('access_token');
        setIsLoggedIn(false);
        setUserName('');
        router.push('/');
    }, []);

    const handleDashboard = useCallback(async () => {
        const access_token = localStorage.getItem('access_token');
        const Data = await getUserDataApi(access_token);
        dispatch(loginSuccess(access_token, Data));
        localStorage.setItem('access_token', access_token);

        if (Data.role === "admin") {
            router.push('/admin/dashboard')
        }
        if (Data.role === "user") {
            router.push('/content')
        }
    }, []);
    const menuItems = isLoggedIn
        ? [
            {
                key: 'logout',
                label: (
                    <ButtonComponent
                        label="Logout"
                        onClick={handleLogout}
                        size="w-24 h-6"
                        className="bg-gradient-to-b from-[#b7daff] to-[#68acf5] text-white text-sm font-semibold rounded-sm"
                    />
                ),
            },
            {
                key: 'dashboard',
                label: (
                    <ButtonComponent
                        label="Dashboard"
                        onClick={handleDashboard}
                        size="w-24 h-6"
                        className="bg-gradient-to-b from-[#b7daff] to-[#68acf5] text-white text-sm font-semibold rounded-sm"
                    />
                ),
                disabled: true,
            },
        ]
        : [''];
    return (
        <div
            className="h-[60px] bg-gradient-to-b from-[#b7daff] to-[#68acf5] text-black flex justify-between items-center pl-3 pr-3 border-b border-[#93c7ff]">
            <Link href='/'>
                <div className="flex items-center">
                    <Image src={logo1} alt="logo1" className="w-12 h-auto lg:w-14 lg:h-20"/>
                    <Image src={logo} alt="logo" className="w-32 h-auto lg:w-44 lg:h-20"/>
                </div>
            </Link>
            <Dropdown
                overlay={
                    <div className="p-4">
                        {menuItems.map(item => (
                            <div key={item.key} className="mb-2">
                                {item.label}
                            </div>
                        ))}
                    </div>
                }
            >
                <a className="inline-flex items-center" onClick={(e) => e.preventDefault()}>
                    <Space>
                        {isLoggedIn ? (
                            <>
                                <span>Welcome, {userName}!</span>
                                <DownOutlined/>
                            </>
                        ) : (
                            <>
                                <ButtonComponent
                                    label="Login"
                                    onClick={() => setAddLoginPopup(true)}
                                    size="w-16 h-6"
                                    className="bg-grey w-16 h-6 text-blue text-sm font-semibold rounded-sm"/>
                            </>
                        )}
                    </Space>
                </a>
            </Dropdown>
            {/*
            <div className="">
                {isLoggedIn ? (
                    <div className="flex items-center">
                        <p className="mr-2 text-grey ">Welcome, {userName}!</p>
                        <FontAwesomeIcon icon={faHandsClapping} className="w-5 h-6 cursor-pointer text-yellow-400 "/>
                        <ButtonComponent
                            backgroundColor="bg-blueS"
                            label="Logout"
                            onClick={handleLogout}
                            size="w-16 h-6"
                            className="bg-grey w-16 h-6 text-blue text-sm font-semibold rounded-sm"
                        />
                    </div>
                ) : (
                    <ButtonComponent
                        className="bg-grey w-16 h-6 text-blue text-sm font-semibold rounded-sm"
                        label="LOG IN"
                        size="w-16 h-6"
                        onClick={() => {
                            setAddLoginPopup(true)
                        }
                        }
                    />)}
            </div>
*/}

            <PopupComponent
                showPopup={addLoginPopup}
                setShowPopup={setAddLoginPopup}
                showFooter={false}
            >
                <LoginComponent
                    onLoginSuccess={handleLoginSuccess}
                />
            </PopupComponent>
        </div>
    );
}

export default HeaderComponent;