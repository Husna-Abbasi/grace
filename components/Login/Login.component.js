'use client'
import React, {useState} from 'react';
import ButtonComponent from "../../components/Button/Button.component";
import Image from "next/image";
import logo1 from '../../public/logo1.svg';
import {useRouter} from "next/navigation";
import {getUserDataApi, loginApi} from "@/store/api/user.api";
import {loginSuccess} from "@/store/actions/api.action";
import {useDispatch} from "react-redux";
import LoadingButtonComponent from "../../components/Button/Loading-Button.component";
const LoginComponent = ({onLoginSuccess}) => {
    const dispatch = useDispatch();
    const [loginButtonLoading, setLoginButtonLoading] = useState(false);
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const router = useRouter();

    async function handleLogin(event) {
        event.preventDefault()
        setError('');
        try {
            setLoginButtonLoading(true);
            const {access_token} = await loginApi(emailAddress, password);
            const userData = await getUserDataApi(access_token);
            dispatch(loginSuccess(access_token, userData));
            localStorage.setItem('access_token', access_token);

            if(userData.role === "admin"){

                await router.push('/admin/dashboard')
            }
            if(userData.role === "user"){
                await router.push('/content')
            }
            onLoginSuccess(userData);

        } catch (error) {
            setLoginButtonLoading(false);
            if (error.response && error.response.status === 404) {
                setError('');
            } else {
                setError('Please enter a valid email and password ');
            }
        }
    }

    return (
        <div className="flex items-center justify-center bg-grey-50 w-[300px]">
            <div className=" w-full p-2 bg-white">
                <div className="flex justify-center">
                    <Image src={logo1} alt="logo1" className="w-20 h-auto lg:w-20 lg:h-auto" />
                </div>
                <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-slate-700 text-sm font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-slate-300 p-2 rounded-md outline-0 focus:ring-0 outline-none"
                        onChange={(e) => {
                            setEmailAddress(e.target.value)
                        }}                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-slate-700 text-sm font-semibold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full border border-slate-300 p-2 rounded-md outline-0 focus:ring-0 outline-none"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                </div>
                <div className="mt-2 flex flex-col gap-3">
                    {loginButtonLoading ?
                        <LoadingButtonComponent
                            size="px-[20px] py-[10px]"
                            color="bg-Fblue"
                            label="Loading..."/>
                        :
                        <ButtonComponent
                            backgroundColor="bg-blueS "
                            label="Login"
                            Type="submit"
                            className="bg-blueS shadow-sm px-[20px] py-[8px] w-full text-white font-semibold text-[18px] rounded-[5px]"

                        />}
                 {/*   <button
                        className="flex items-center bg-white text-slate-700 p-2 rounded-md border border-gray-300 hover:border-gray-400 focus:outline-none focus:shadow-outline-gray"
                    >
                        <FaGoogle className="mr-2" />
                        Continue with Google
                    </button>*/}
                </div>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
