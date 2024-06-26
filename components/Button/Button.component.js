import React from "react";

/**
 * ButtonComponent Props
 * @typedef {Object} ButtonComponentProps
 * @property {string} label - The label or text content of the button.
 * @property {string} color - Text color of the button.
 * @property {string} [size='w-10'] - Size of the button (default: 'w-10').
 * @property {Function} onClick - Callback function invoked when the button is clicked.
 * @property {string} [hoverColor] - Background color of the button on hover.
 * @property {JSX.Element} [icon] - Icon element to be displayed before the label.
 * @property {string} [className] - Additional custom CSS classes for styling.
 * @property {React.ReactNode} [children] - Additional children elements if needed.
 */

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