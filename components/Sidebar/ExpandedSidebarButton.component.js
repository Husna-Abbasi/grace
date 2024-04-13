import React from 'react';

const ExpandedSidebarButtonComponent = ({ name, value, onClick, onChange, label,icon }) => {
    return (
        <div className="FilterButton flex flex-col gap-1">
            <button
                className="flex gap-3 p-2 text-Fblue hover:bg-gray-50 rounded-md cursor-pointer text-sm uppercase font-semibold"
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
    );
};

export default ExpandedSidebarButtonComponent;