import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const KeywordsComponent = ({ keyword, text, type }) => {
    const [showFullText, setShowFullText] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Function to toggle showing full text
    const toggleShowFullText = () => {
        setShowFullText(!showFullText);
    };

    // Function to extract the first 15 words
    const extractFirst15Words = (text) => {
        if (!text) return '';
        const words = text.split(/\s+/);
        return words.slice(0, 7).join(' ');
    };

    // Function to handle speaking the keyword
    const speakKeyword = () => {
        const utterance = new SpeechSynthesisUtterance(keyword);
        utterance.text = text; // Set the text property separately
        speechSynthesis.speak(utterance);
        setIsSpeaking(true);
        utterance.onend = () => {
            setIsSpeaking(false);
        };
    };

    // Function to handle pausing the speech
    const pauseSpeech = () => {
        speechSynthesis.pause();
        setIsSpeaking(false);
    };

    // Icon to display based on speech state
    const icon = isSpeaking ? faPause : faPlay;

    return (
        <div className="flex gap-2 justify-center items-center py-0.5">
            <div className="flex w-4 h-4 rounded-full bg-Fblue relative items-center justify-center" onClick={isSpeaking ? pauseSpeech : speakKeyword}>
                <FontAwesomeIcon icon={icon} className="h-2 w-2 absolute flex"/>
            </div>

            <div className="text-grey text-xs flex-2">{keyword} -</div>
            <div className={'flex-1'}>
                <div className="text-gray-700 text-[0.7rem] font-extralight flex ">
                    {text && (showFullText ? text : extractFirst15Words(text))}
                    {text && text.split(/\s+/).length > 15 && (
                        <button
                            className="text-blue underline focus:outline-none ml-1 "
                            onClick={toggleShowFullText}
                        >
                            {showFullText ? "...Less" : "...More"}
                        </button>
                    )}
                </div>
            </div>
            <div className="text-gray-400 font-thin text-sm italic flex-2">{type}</div>
        </div>
    );
};

export default KeywordsComponent;

