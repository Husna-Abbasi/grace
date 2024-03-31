'use client'
import React, {useState} from 'react';
const LanguageSelectorDropdownComponent = ({learningOptions}) => {
    const [learningLanguage, setLearningLanguage] = useState('');

    const handleLearningChange = (e) => {
        setLearningLanguage(e.target.value);
    };
    return (
        <div className="flex justify-center items-center flex-col gap-2 relative cursor-pointer">
            <select className="h-10 rounded font-bold w-36 border-none"
                    value={learningLanguage}
                    onChange={handleLearningChange}>
                <option value="">Choose...</option>

                {learningOptions && learningOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                </option>))}
            </select>
        </div>
    );
};

export default LanguageSelectorDropdownComponent;
