'use client'
import {Skeleton} from "antd";
import {useState} from "react";

const CardSkeletonComponent = ({width, height}) => {
    const [active] = useState(true);
    const [size] = useState('small');
    const [avatarShape] = useState('square');
    return (
        <div style={{width, height}}>
            <div className="flex flex-col gap-2  md:block mb-4">
                <Skeleton.Node
                    active={active}
                    style={{
                        height: '200px',
                        width: '300px',
                    }}/>

                <div className="flex justify-center items-center flex-col pt-2">
                    <Skeleton.Input
                        active={active}
                        style={{
                            height: '13px',
                            width: '300px',
                        }}/>
                    <Skeleton.Input
                        active={active}
                        style={{
                            height: '13px',
                            width: '300px',
                        }}/>

                </div>
                <div className="flex gap-4 justify-between pt-2">
                    <Skeleton.Button
                        active={active}
                        style={{
                            height: '30px',
                            width: '1px',
                        }}/>
                    <Skeleton.Button
                        active={active}
                        style={{
                            height: '30px',
                        }}/>
                    <Skeleton.Button
                        active={active}
                        style={{
                            height: '30px',
                        }}/>
                </div>
            </div>
            {/*//Mobile view*/}
            <div className="flex flex-col gap-1 md:hidden w-full overflow-hidden justify-center mb-4">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <Skeleton.Node
                        active={active}
                        style={{
                            height: '160px',
                            width: '350px',
                        }}/>
                    <div className="flex justify-center items-center flex-col pt-2 flex-1 gap-1">
                        <Skeleton.Input
                            active={active}
                            style={{
                                height: '10px',
                                width: '340px',
                            }}/>
                        <Skeleton.Input
                            active={active}
                            style={{
                                height: '10px',
                                width: '340px',
                            }}/>
                    </div>
                </div>
                <div className="flex gap-1 justify-around">
                    <Skeleton.Avatar
                        active={active}
                        size={size}
                        shape={avatarShape}
                    />
                    <Skeleton.Avatar
                        active={active}
                        size={size}
                        shape={avatarShape}
                    />
                    <Skeleton.Avatar
                        active={active}
                        size={size}
                        shape={avatarShape}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardSkeletonComponent;
