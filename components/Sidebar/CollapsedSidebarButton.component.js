import React from 'react';

const CollapsedSidebarButtonComponent = ({ name, value, onClick, onChange, label,icon, badge }) => {

    return (
        <div className="FilterButton flex ">
            <div className=" flex flex-col gap-1 flex-1">
            <button
                className={`flex flex-col gap-2 p-2 text-grey hover:text-Fblue hover:bg-gray-50 rounded-md justify-center cursor-pointer items-center text-[10px] uppercase font-semibold`}
                type="Button"
                name={name}
                value={value}
                onClick={onClick}
                onChange={onChange}
            >
            {icon}
            {label}
            </button>
            </div>
            {badge && (
                <div className="badge ">
                    {badge}
                </div>
            )}
        </div>

    );
};

export default CollapsedSidebarButtonComponent;