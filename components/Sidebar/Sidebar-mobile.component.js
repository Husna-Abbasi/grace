import React, { useState } from "react";
import MobilePopupComponent from "../../components/Popup/MobilePopup.component";
import MobileFiltersComponent from "../../components/Filters/MobileFilters.component";
import {ClipboardIcon, FolderIcon, HomeIcon, UsersIcon} from "@heroicons/react/24/outline";

// function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
// }
const navigation = [
    { name: 'Access', value:'access', href: '#', icon: HomeIcon, current: true },
    { name: 'Type',value:'type', href: '#', icon: UsersIcon, current: false },
    { name: 'Learning Level', value:'learningLevel', href: '#', icon: FolderIcon, current: false },
    { name: 'Learning Topic', value:'learningTopic', href: '#', icon: ClipboardIcon, current: false },

]
function SidebarMobileComponent() {
    const [openSubMenu, setOpenSubMenu] = useState("");
    const [accessFilter,setAccessFilter] = useState(false)

    const handleSubMenuClick = (item) => {
        if (openSubMenu === item.value) {
            setOpenSubMenu(item.value);
        } else {
            setOpenSubMenu(item.value);
        }
        setAccessFilter(true);
    };

    return (
        <nav className="bg-Fblue bottom-0 z-10 fixed flex w-full h-16 gap-2 justify-around shadow shadow-4 md:hidden px-2 items-center ">
            {navigation.map((item) => (
                <div key={item.value} className="relative">
                    <button
                        className={`${
                            openSubMenu === item.value ? "text-white" : "text-white hover:text-white"
                        } text-sm font-medium rounded-xl flex flex-col justify-center items-center gap-1 text-xs`}
                        onClick={() => handleSubMenuClick(item)}

                    >
                        <item.icon
                            className={`${
                                openSubMenu === item.value ? "text-white" : "text-white hover:text-white"
                            } flex-shrink-0 h-6 w-6`}
                            aria-hidden="true"

                        />
                        {item.name}
                    </button>
                    <MobilePopupComponent
                        showPopup={accessFilter}
                        setShowPopup={setAccessFilter}
                        showFooter={false}
                    >
                        {openSubMenu && <MobileFiltersComponent selectedFilter={openSubMenu} />}

                        {/*<MobileFiltersComponent/>*/}
                    </MobilePopupComponent>
                </div>
            ))}
        </nav>
    );
}

export default SidebarMobileComponent;
