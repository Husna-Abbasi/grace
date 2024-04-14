'use client'
import React from 'react';
import SearchBarComponent from './SearchBar.component';
import LearningOptionsComponent from '../Dropdown/LearningOptions.component';

const SearchWrapComponent = () => {
    return (
        <div>
            <div className="bg-[#deebfe] lg:w-[780px] h-20 p-4 rounded-lg flex gap-2">
                <SearchBarComponent/>
                <LearningOptionsComponent/>
            </div>
        </div>
    );
};

export default SearchWrapComponent;