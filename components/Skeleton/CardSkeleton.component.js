import {Skeleton} from "antd";
import {useState} from "react";
const CardSkeletonComponent = ({width, height}) => {
    const [active] = useState(true);
    const [size] = useState('small');
    const [avatarShape] = useState('square');
    return (<div style={{width, height}}>
            <div className="flex flex-col gap-2 hidden md:block ">
                <Skeleton.Node
                    active={active}
                    style={{
                        height: '200px', width: '300px',
                    }}/>
                <div className="flex justify-center items-center flex-col pt-2">
                    <Skeleton.Input
                        active={active}
                        style={{
                            height: '13px', width: '300px',
                        }}/>
                    <Skeleton.Input
                        active={active}
                        style={{
                            height: '13px', width: '300px',
                        }}/>
                </div>
                <div className="flex gap-4 justify-around pt-2">
                    <Skeleton.Button
                        active={active}
                        style={{
                            height: '30px', width: '1px',
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
            <div className="flex flex-col gap-1 md:hidden">
                <Skeleton.Node
                    active={active}
                    style={{
                        height: '160px', width: '250px',
                    }}/>
                <div className="flex justify-center items-center flex-col pt-2">
                    <Skeleton.Input
                        active={active}
                        style={{
                            height: '10px', width: '230px',
                        }}/>
                    <Skeleton.Input
                        active={active}
                        style={{
                            height: '10px', width: '230px',
                        }}/>
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
        </div>);
};

export default CardSkeletonComponent;
