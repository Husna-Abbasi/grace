'use client'
import React, {useEffect, useState} from "react";
import FeaturedContentCardComponent from "../../components/Cards/FeaturedContentCard.component";
import Spanish_Flag from "../../public/Spanish-Flag-1-1.jpg";
import {Card} from "antd";
import {EllipsisOutlined, HeartOutlined, PlayCircleOutlined} from "@ant-design/icons";
import Image from "next/image";
function SpanishComponent() {
    const [cardData, setCardData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-dev.srmya.com/fetch', {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                setCardData(result);
                console.log('API Data:', result);
            } catch (error) {
                console.error('Error fetching data from API:', error);
            }
        };
        fetchData();
    }, []);

    const lessonCards = cardData?.posts?.map((post) => {
        const thumbnailElement = document.createElement('div');
        thumbnailElement.innerHTML = post.thumbnail;
        const thumbnailURL = thumbnailElement.querySelector('img')?.src;

        return (
            <Card
                className="w-[320px] hover:scale-110 transition-transform ease-in-out duration-30 m-2 shadow-md"
                key={post.ID}
                cover={
                    <Image
                        alt="card"
                        src={thumbnailURL}
                        width='200'
                        height='100'
                        style={{
                            objectFit: 'cover',
                            height: '100px',
                        }}
                    />
                }
                actions={[
                    <PlayCircleOutlined  key="Play" />,
                    <HeartOutlined key="save" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
                bodyStyle={{
                    padding:'6px'
                }}
            >
                <div className="h-20 flex flex-col justify-center items-center">
                    <div className="text-blueS text-center font-bold text-sm">
                        {post.post_title}
                    </div>
                    <div className="text-[10px] text-gray text-center opacity-60 ">
                        {post.post_name}
                    </div>
                </div>

            </Card>
        );
    });
    return (<>
        <div className="bg-white rounded-md overflow-hidden mt-5 flex justify-center flex-col p-4">
            <FeaturedContentCardComponent
                imageSrc={Spanish_Flag}
                title="Spanish Resource"
                description="Learn Spanish with Flying Languages by watching language learning videos, training your pronunciation by listening to real speakers"
            links= {[
            { url:"", text: "Spanish Online Courses" },
            { url: "", text: "Spanish Video Catalog" },
            { url: "", text: "Spanish Word Pronunciation" },
            ]}
            />
            <div className="spanishCardSection px-6 pb-4">
                <div className="flex flex-row justify-center items-center align-middle gap-4 mb-8">
                    <div className="flex justify-center items-center">
                        <hr className="w-10 md:w-[420px] text-black opacity-20"/></div>
                    <div>
                <h1 className="text-center text-[#303030] text-xs font-bold">MOST RECENT CONTENT</h1>
                    </div>
                    <div>
                        <hr className="w-10 md:w-[420px] text-black opacity-20"/>
                    </div>
                    </div>
                    <div className="allCard md:flex-wrap flex gap-2 flex-col md:flex-row justify-center items-center">
                        {lessonCards}
                </div>
            </div>
        </div>
    </>);
}

export default SpanishComponent;
