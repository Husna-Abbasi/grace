'use client'
import React from "react";
import {FaCircleCheck} from "react-icons/fa6";
import LessonCardComponent from "../Cards/LessonCard.component";
import card1 from "../../public/cardimage1.jpg"
import card2 from "../../public/cardimage2.jpg"
import card3 from "../../public/cardimage3.jpg"
import card4 from "../../public/cardimage4.jpg"
import card5 from "../../public/cardimage5.jpg"
import card6 from "../../public/cardimage6.jpg"
import card7 from "../../public/cardimage7.jpg"
import card8 from "../../public/cardimage8.jpg"
import card9 from "../../public/cardimage9.jpg"
import Image from "next/image";
import American_flag from "../../public/American-Flag-1.jpg";
function ESLComponent() {
    return (<>
            <div className="bg-white rounded-md overflow-hidden mt-5">
                <div className=" w-[100%] p-10 flex justify-center items-center bg-white">
                    <div className=" w-[50%]">
                            <Image src={American_flag} alt="Flag" className="rounded-lg"/>
                    </div>
                    <div className="spanishRight ml-14">
                        <h1 className="text-2xl mb-3 font-bold text-[#5d85ad]">
                            English as Second Language (ESL)
                        </h1>
                        <p className="mb-7 text-sm font-thin text-black">
                            Learn ESL with Flying Languages by watching language learning
                            videos, training your pronunciation by listening to real speakers
                        </p>
                        <div className="spanishlink">
                            <div className="flex items-center gap-3 mb-4">
                                <FaCircleCheck className="text-[#5d85ad] text-sm"/>
                                <a
                                    href="components/ChooseLanguage"
                                    className="text-[#0074e2] font-semibold text-sm hover:text-[#303030]"
                                >
                                    ESL Online Courses
                                </a>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaCircleCheck className="text-[#5d85ad] text-sm"/>
                                <a
                                    href="components/ChooseLanguage"
                                    className="text-[#0074e2] font-semibold text-sm hover:text-[#303030]"
                                >
                                    ESL Video Catalog
                                </a>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaCircleCheck className="text-[#5d85ad] text-sm"/>
                                <a
                                    href="components/ChooseLanguage"
                                    className="text-[#0074e2] font-semibold text-sm hover:text-[#303030]"
                                >
                                    ESL Word Pronunciation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spanishCardSection">
                    <h1 className="text-center text-xs font-bold mb-8">MOST RECENT CONTENT</h1>
                    <div className="allCard flex justify-evenly flex-wrap pl-5 pr-5 flex gap-1.5 pb-7">
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

                        <LessonCardComponent
                            image={card6}
                            cardTitle="IMPERFECTO | INDEFINIDO | PERFECTO - los PASADOS en ESPAÑOL"
                            cardDesc=" By Zé Eduardo Penedo | Spanish (ES) → English (US)"
                            ovrelayText="The past can be a tricky thing, can't it? Well, that's why Linguariosa
              is here to help us! In this video, she tells us all about the Perfect
              and Imperfect past tenses and gives us her trademark detailed
              explanations about how and when to use each. As Linguriosa says, even
              though the Imperfect is considered by many to be the most ..."
                        />

                        <LessonCardComponent
                            image={card7}
                            cardTitle="IMPERFECTO | INDEFINIDO | PERFECTO - los PASADOS en ESPAÑOL"
                            cardDesc=" By Zé Eduardo Penedo | Spanish (ES) → English (US)"
                            ovrelayText="The past can be a tricky thing, can't it? Well, that's why Linguariosa
              is here to help us! In this video, she tells us all about the Perfect
              and Imperfect past tenses and gives us her trademark detailed
              explanations about how and when to use each. As Linguriosa says, even
              though the Imperfect is considered by many to be the most ..."
                        />

                        <LessonCardComponent
                            image={card8}
                            cardTitle="IMPERFECTO | INDEFINIDO | PERFECTO - los PASADOS en ESPAÑOL"
                            cardDesc=" By Zé Eduardo Penedo | Spanish (ES) → English (US)"
                            ovrelayText="The past can be a tricky thing, can't it? Well, that's why Linguariosa
              is here to help us! In this video, she tells us all about the Perfect
              and Imperfect past tenses and gives us her trademark detailed
              explanations about how and when to use each. As Linguriosa says, even
              though the Imperfect is considered by many to be the most ..."
                        />

                        <LessonCardComponent
                            image={card9}
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

export default ESLComponent;
