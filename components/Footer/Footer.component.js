import React from "react";
import {FaFacebookSquare, FaInstagram, FaTwitter} from "react-icons/fa";

const FooterComponent = () => {
    return (
        <footer className="bg-[#93c7ff]">
            <div
                className="container flex justify-between pl-10 md:pl-24 pt-7 pb-8 flex-nowrap flex-col md:flex-row gap-3">
                <div>
                    <h3 className="text-sm font-semibold mb-3 text-[#303030]">Recommended Resources</h3>
                    <ul className="list-none p-0 text-xs text-grey cursor-pointer flex flex-col gap-[2px] font-extralight">
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold mb-3 text-[#303030]">Quick Links</h3>
                    <ul className="list-none p-0 text-grey cursor-pointer font-extralight text-xs flex flex-col gap-[2px]">
                        <li className="hover:opacity-60 pb-1">Pricing</li>
                        <li className="hover:opacity-60 pb-1">Contact Us</li>
                        <li className="hover:opacity-60 pb-1">Become a Teacher</li>
                        <li className="hover:opacity-60 pb-1">Privacy Policy</li>
                    </ul>
                </div>
                <div className="mr-12">
                    <h3 className="text-xs font-bold mb-3 text-[#303030]">Social Networks</h3>
                    <div className="flex text-grey text-2xl">
                        <a href="components/Footer#https://www.facebook.com/" className="mr-3">
                            <i><FaFacebookSquare className="hover:opacity-100 opacity-60"/>
                            </i>
                        </a>
                        <a href="components/Footer#https://www.instagram.com/" className="mr-3">
                            <i><FaInstagram className="hover:opacity-100 opacity-60"/>
                            </i>
                        </a>
                        <a href="components/Footer#https://www.twitter.com/" className="mr-4 ">
                            <i><FaTwitter className="hover:opacity-100 opacity-60"/>
                            </i>
                        </a>
                    </div>
                    <div className="pt-6 w-72">
                        <p className="text-[11px] text-[#303030] ">Copyright 2023 Flying Languages. All right
                            reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
