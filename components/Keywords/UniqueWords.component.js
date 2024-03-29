import React from 'react';
import SearchWordsComponent from "../../components/SearchBar/SearchWords.component";
import KeywordsComponent from "@/components/Keywords/Keywords.component";
const UniqueWordsComponent = ({ keywordsData }) => {
    console.log('keywordsData', keywordsData);

    return (
        <div className="flex flex-col gap-2">
            <div className="search">
                <SearchWordsComponent/>
            </div>
            <div className="keywords pt-4 px-2 flex flex-col gap-2 h-screen overflow-y-scroll ">
                {keywordsData.map((wordData, index) => (
                    <KeywordsComponent
                        key={index}
                        keyword={wordData.word}
                        text={wordData.meaning}
                        type={wordData.partOfSpeech} // If needed
                    />
                ))}
            </div>
        </div>
    );
};

export default UniqueWordsComponent;
