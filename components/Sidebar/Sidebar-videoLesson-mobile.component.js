import React, {useState} from 'react';
import MobilePopupComponent from "../../components/Popup/MobilePopup.component";
import {FolderIcon, UsersIcon} from "@heroicons/react/24/outline";
import KeywordsMobileComponent from "@/components/Keywords/Keywords-mobile.component";
import VideoDetailsComponent from "../../components/Video/VideoDetails.component";
import LessonFlagComponent from "../../components/Flag/LessonFlag.component";

const navigation = [
    {name: 'Keywords', value: 'keywords', icon: FolderIcon, current: true},
    {name: 'Lesson', value: 'lesson', icon: UsersIcon, current: false},
];

const SidebarVideoLessonMobileComponent = () => {
    const [openMenu, setOpenMenu] = useState("");
    const [accessFilter, setAccessFilter] = useState(false);

    const handleSubMenuClick = (item) => {
        if (openMenu === item.value) {
            setOpenMenu("");
        } else {
            setOpenMenu(item.value);
        }
        setAccessFilter(true);
    };

    return (
        <nav
            className="bg-Fblue bottom-0 z-10 fixed flex w-full h-16 gap-2 justify-around shadow shadow-4 md:hidden px-2 items-center ">
            {navigation.map((item) => (
                <div key={item.value} className="relative">
                    <button
                        className={`${
                            openMenu === item.value ? "text-white" : "text-white hover:text-white"
                        } text-sm font-medium rounded-xl flex flex-col justify-center items-center gap-1 text-xs`}
                        onClick={() => handleSubMenuClick(item)}
                    >
                        <item.icon
                            className={`${
                                openMenu === item.value ? "text-white" : "text-white hover:text-white"
                            } flex-shrink-0 h-6 w-6`}
                            aria-hidden="true"
                        />
                        {item.name}
                    </button>
                    {openMenu === 'keywords' && <MobilePopupComponent
                        showPopup={accessFilter}
                        setShowPopup={setAccessFilter}
                    >
                        <KeywordsMobileComponent/>
                    </MobilePopupComponent>
                    }
                    {/*{openMenu === 'lesson' && <VideoDetailsComponent />}*/}
                    {openMenu === 'lesson' && <MobilePopupComponent
                        showPopup={accessFilter}
                        setShowPopup={setAccessFilter}
                    >
                        <div className="flex flex-col pl-1">
                            <LessonFlagComponent/>
                        </div>
                        <VideoDetailsComponent
                            duration="13 min 41 sec"
                            title="IMPERFECTO | INDEFINIDO | PERFECTO - los PASADOS en ESPAÑO"
                            description="The past can be a tricky thing, cant it? Well, thats why Linguariosa is
                        here to help us In this video, she tells us all about the Perfect and Imperfect past tenses and
                        gives us her trademark detailed explanations about how and when to use each."
                            tags="Tags, As Linguriosa, Spanish learning journey"/>
                    </MobilePopupComponent>
                    }

                </div>
            ))}
        </nav>
    );
};

export default SidebarVideoLessonMobileComponent;
