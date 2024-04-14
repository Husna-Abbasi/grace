'use client'
import React, {useEffect, useRef, useState} from 'react';
import {AutoComplete, Input} from "antd";

const SearchWordsComponent = () => {
    const [value, setValue] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setValue([]);
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-2 pointer-events-none pt-2">
                <svg aria-hidden="true" className="h-4 w-4 text-blue dark:text-blue"
                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"></path>
                </svg>
            </div>
            <div className="w-full">
                <AutoComplete
                    style={{ width: '250px' }}
                    options={value}
                    onSelect={(value) => console.log(value)}
                    // onSearch={handleSearch}
                    // maxOption={3}
                >
                    <Input
                        className="w-full text-sm rounded block w-full p-2.5 pl-7 flex items-center "
                        size="large"
                        placeholder="Search"
                    />
                </AutoComplete>
            </div>
        </div>
    );
};

export default SearchWordsComponent;