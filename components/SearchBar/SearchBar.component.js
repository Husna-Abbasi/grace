'use client'
import React, {useEffect, useRef, useState} from 'react';
import {AutoComplete, Input} from "antd";


/**
 *
 * @param onChange Callback function that returns the selected value.
 * @param {Array} data List of items to be populated in the component.
 * @returns {JSX.Element}
 * @constructor
 */
const SearchBarComponent = ({onChange, data}) => {
    const [values, setValues] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setValues([]);
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);


    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 z-10 flex items-center md:pl-3 pl-2 pointer-events-none">
                <svg aria-hidden="true" className="md:w-6 md:h-6 h-4 pb-1 w-4 text-blue dark:text-blue"
                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"></path>
                </svg>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
                <AutoComplete
                    style={{ width: '600px' }}
                    options={values}
                    onSelect={(value) => console.log(value)}
                    // onSearch={handleSearch}
                    // maxOption={3}
                >
                    <Input
                        className="w-full text-sm rounded block w-full md:pl-10 p-2.5 pl-6 "
                        size="large"
                        placeholder="Search"
                    />
                </AutoComplete>
            </div>
        </div>

    );
};

export default SearchBarComponent;