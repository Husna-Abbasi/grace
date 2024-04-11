import React, { useState } from 'react';
import SpanishComponent from './Spanish.component';

import DropdownComponent from '../Button/Dropdown.component';
const LanguageSectionComponent = () => {
    const [activeButton, setActiveButton] = useState('Spanish');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className="w-auto bg-[#93c7ff] px-4 pt-2 md:flex md:justify-center overflow-hidden ">
            <div className="flex mt-6 w-auto flex-col md:justify-center md:w-[1120px]">
                <div className="flex justify-center">
                    <h1 className="flex text-3xl font-bold text-grey text-center mb-8 mt-10 w-64 md:w-auto lg:w-auto">
                        Languages we teach
                    </h1>
                </div>
                <div className="flex justify-center items-center flex-wrap md:flex-nowrap ">
                    <DropdownComponent
                        text="Spanish"
                        onClick={() => handleButtonClick('Spanish')}
                        active={activeButton === 'Spanish'}
                    />
                    <DropdownComponent
                        text="Italian"
                        onClick={() => handleButtonClick('Italian')}
                        active={activeButton === 'Italian'}
                    />
                    <DropdownComponent
                        text="German"
                        onClick={() => handleButtonClick('German')}
                        active={activeButton === 'German'}
                    />
                    <DropdownComponent
                        text="French"
                        onClick={() => handleButtonClick('French')}
                        active={activeButton === 'French'}
                    />
                    <DropdownComponent
                        text="Russian"
                        onClick={() => handleButtonClick('Russian')}
                        active={activeButton === 'Russian'}
                    />
                    <DropdownComponent
                        text="ESL"
                        onClick={() => handleButtonClick('ESL')}
                        active={activeButton === 'ESL'}
                    />
                    <DropdownComponent
                        text="Portuguese"
                        onClick={() => handleButtonClick('Portuguese')}
                        active={activeButton === 'Portuguese'}
                    />
                </div>

                {activeButton === 'Spanish' && <SpanishComponent />}
                {/*{activeButton === 'Italian' && <ItalianComponent />}*/}
                {/*{activeButton === 'German' && <GermanComponent />}*/}
                {/*{activeButton === 'French' && <FrenchComponent />}*/}
                {/*{activeButton === 'Russian' && <RussianComponent />}*/}
                {/*{activeButton === 'ESL' && <ESLComponent />}*/}
                {/*{activeButton === 'Portuguese' && <PortugueseComponent />}*/}
            </div>
        </div>
    );
};

export default LanguageSectionComponent;
