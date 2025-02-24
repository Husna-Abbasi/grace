import React from "react";

/**
 * ButtonComponent Props
 * @typedef {Object} ButtonComponentProps
 * @property {string} label - The label or text content of the button.
 * @property {string} color - Text color of the button.
 * @property {string} [size='w-10'] - Size of the button (default: 'w-10').
/**
 * ButtonComponent
 * @param {ButtonComponentProps} props - Props for the ButtonComponent.
 * @returns {JSX.Element}
 */
const ButtonComponent = ({
                             backgroundColor,
                             color,
                             hoverColor,
                             label,
                             size = 'w-10',
                             onClick,
                             icon,
                             className,
                             children
                         }) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: color,
        hoverColor: hoverColor,
    };
    return (<button
            className={`${size} ${hoverColor} ${className} rounded-md flex items-center font-poppins justify-evenly`}
            value="Submit"
            style={buttonStyle}
            onClick={onClick}
        >
            {children}
            {icon}
            {label}
        </button>
    )
};
export default ButtonComponent;