import React from "react";
import {FaCircleCheck} from "react-icons/fa6";
import LessonCardComponent from "../Cards/LessonCard.component";
import card1 from "../../public/cardimage1.jpg"
import card2 from "../../public/cardimage2.jpg"
import card3 from "../../public/cardimage3.jpg"
import card4 from "../../public/cardimage4.jpg"
import card5 from "../../public/cardimage5.jpg"
import Russian_flag from "../../public/cardimage10.jpg"
import Image from "next/image";
function RussianComponent() {
    return (<>
            <div className="spanishMain bg-white rounded-md overflow-hidden mt-5">
                <div className="spanishMain w-[100%] p-10 flex justify-center items-center bg-white">
                    <div className="w-[50%]">
                        <Image src={Russian_flag} alt="Flag" className="rounded-lg"/>
                    </div>
                    <div className="spanishRight ml-14">
                        <h1 className="text-3xl mb-3 font-bold text-[#5d85ad]">
                            Russian Resources
                        </h1>
                        <p className="mb-7 text-black font-thin text-sm">
                            Learn Russian with Flying Languages by watching language learning
                            videos, training your pronunciation by listening to real speakers
                        </p>
                        <div className="spanishlink">
                            <div className="flex items-center gap-3 mb-4">
                                <FaCircleCheck className="text-[#5d85ad] text-xl"/>
                                <a
                                    href="components/ChooseLanguage"
                                    className="text-[#0074e2] font-semibold text-sm hover:text-[#303030]"
                                >
                                    Russian Online Courses
                                </a>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaCircleCheck className="text-[#5d85ad] text-xl"/>
                                <a
                                    href="components/ChooseLanguage"
                                    className="text-[#0074e2] font-semibold text-sm hover:text-[#303030]"
                                >
                                    Russian Vedio Catalog
                                </a>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaCircleCheck className="text-[#5d85ad] text-xl"/>
                                <a
                                    href="components/ChooseLanguage"
                                    className="text-[#0074e2] font-semibold text-sm hover:text-[#303030]"
                                >
                                    Russian Word Pronunciation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spanishCardSection">
                    <h1 className="text-center font-bold mb-8">MOST RECENT CONTENT</h1>
                    <div className="allCard flex justify-evenly flex-wrap">
                        <LessonCardComponent
                            image={card1}
                            cardTitle="IMPERFECTO | INDEFINIDO | PERFECTO - los PASADOS en ESPAÑOL"
                            cardDesc=" By Zé Eduardo Penedo | Spanish (ES) → English (US)"
                            ovrelayText="The past can be a tricky thing, can't it? Well, that's why Linguariosa
              is here to help us! In this video, she tells us all about the Perfect
              and Imperfect past tenses and gives us her trademark detailed
              explanations about how and when to use each. As Linguriosa says, even
              though the Imperfect is considered by many to be the most ..."
                        />

                        <LessonCardComponent
                            image={card2}
                            cardTitle="El pretérito imperfecto en español"
                            cardDesc=" By Zé Eduardo Penedo | Spanish (ES) → English (US)"
                            ovrelayText="   Does the Spanish Imperfect tense confuse you? This past tense can be a
      true headache for some Spanish students, especially those whose native
      language is English. Luckily, this video is here to help you understand
      what the Imperfect is and when to use it. The Imperfect tense is used
      mostly to describe unfinished actions in the pa..."
                        />

                        <LessonCardComponent
                            image={card3}
                            cardTitle="IMPERFECTO | INDEFINIDO | PERFECTO - los PASADOS en ESPAÑOL"
                            cardDesc=" By Zé Eduardo Penedo | Spanish (ES) → English (US)"
                            ovrelayText="The past can be a tricky thing, can't it? Well, that's why Linguariosa
              is here to help us! In this video, she tells us all about the Perfect
              and Imperfect past tenses and gives us her trademark detailed
              explanations about how and when to use each. As Linguriosa says, even
              though the Imperfect is considered by many to be the most ..."
                        />

                        <LessonCardComponent
                            image={card4}
                            cardTitle="Por qué el nuevo trailer de Star Wars SUENA TAN ÉPICO"
                            cardDesc=" By Zé Eduardo Penedo | Spanish (ES) → English (US)"
                            ovrelayText="The past can be a tricky thing, can't it? Well, that's why Linguariosa
              is here to help us! In this video, she tells us all about the Perfect
              and Imperfect past tenses and gives us her trademark detailed
              explanations about how and when to use each. As Linguriosa says, even
              though the Imperfect is considered by many to be the most ..."
                        />

                        <LessonCardComponent
                            image={card5}
                            cardTitle="IMPERFECTO | INDEFINIDO | PERFECTO - los PASADOS en ESPAÑOL"
                            cardDesc=" By Zé Eduardo Penedo | Spanish (ES) → English (US)"
                            ovrelayText="The past can be a tricky thing, can't it? Well, that's why Linguariosa
              is here to help us! In this video, she tells us all about the Perfect
              and Imperfect past tenses and gives us her trademark detailed
              explanations about how and when to use each. As Linguriosa says, even
              though the Imperfect is considered by many to be the most ..."
                        />
                    </div>
                </div>
            </div>
        </>);
}

export default RussianComponent;
