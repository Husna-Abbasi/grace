import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

const KeywordsMobileComponent = () => {
    const keywords = [
            {Keyword: 'el', text: 'el', type: 'determiner'},
            {Keyword: 'no', text: 'nope', type: 'adverb'},
            {Keyword: 'es', text: 'it is', type: 'noun'},
            {Keyword: 'la', text: 'the', type: 'pronoun'},
            {Keyword: 'en', text: 'en', type: 'adposition'},
            {Keyword: 'a', text: 'a', type: 'adposition'},
            {Keyword: 'una', text: 'a', type: 'pronoun'},
            {Keyword: 'que', text: 'que', type: 'pronoun'},
            {Keyword: 'no', text: 'nope', type: 'adverb'},
            {Keyword: 'la', text: 'the', type: 'pronoun'},
            {Keyword: 'una', text: 'a', type: 'pronoun'},
            {Keyword: 'es', text: 'it is', type: 'noun'},
            {Keyword: 'en', text: 'en', type: 'adposition'},
        ];

    return (
        <div className="flex flex-wrap gap-2">
            {keywords.map((item, index) => (
                <div key={index} className="flex flex-wrap gap-2 w-40">
                    <div className="flex w-4 h-4 rounded-full bg-Fblue relative items-center justify-center">
                        <FontAwesomeIcon icon={faPlay} className="h-2 w-2 absolute flex"/>
                    </div>
                    <div className="text-grey text-sm">{item.Keyword}</div>
                    <div className="text-gray-700 text-sm font-extralight"> - {item.text}</div>
                    <div className="text-gray-400 font-thin text-sm italic">{item.type}</div>
                </div>
            ))}
        </div>

    );
};

export default KeywordsMobileComponent;