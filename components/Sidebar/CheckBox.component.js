import React from "react";

const CheckboxInput = ({name, checked, onChange, label, value}) => {
    return (
        <div className="checkbox flex gap-2 lg:w-44 w-32">
            <input
                className="flex"
                type="checkbox"
                name={name}
                checked={checked}
                value={value}
                onChange={onChange}
            />
            <div className="lg:w-40 ">
                <div className=""> {label} </div>
            </div>
        </div>
    );
};

export default CheckboxInput;
