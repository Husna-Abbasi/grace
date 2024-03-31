'use client'
import React from 'react';
import LanguageSelectorDropdownComponent from "./LanguageSelectorDropdown.component";

const LearningOptionsComponent = () => {
    const learningOptions = [
        {label: 'English(GB)', value: 'English(GB)'},
        {label: 'German', value: 'German'},
        {label: 'Spanish(ES)', value: 'Spanish(ES)'},
        {label: 'French', value: 'french'},
        {label: 'Italian', value: 'Italian'},
        {label: 'Portuguese(PT)', value: 'Portuguese(PT)'},
        {label: 'Portuguese(BR)', value: 'Portuguese(BR)'},
        {label: 'Russian', value: 'Russian'},
    ];

    return (
        <div className="text-slate-700 font-light">
            <LanguageSelectorDropdownComponent learningOptions={learningOptions}/>
        </div>
    );
};

export default LearningOptionsComponent;
