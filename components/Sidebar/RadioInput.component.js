import React from "react";

const RadioInput = ({name, value, checked, onChange, label}) => {
    return (
        <div className="radio flex gap-1 text-grey">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            {label}
        </div>
    );
};

export default RadioInput;
