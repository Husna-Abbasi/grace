import {Skeleton} from "antd";
import {useState} from "react";

const VideoLessonCardSkeletonComponent = ({ width, height }) => {
    const [active] = useState(true);
    const [size] = useState('small');
    const [avatarShape] = useState('square');
    return (
        <div style={{ width, height }}>
            <div className="flex flex-col gap-2 hidden md:block ">
                    <Skeleton.Node
                        active={active}
                        style={{
                            height: '180px',
                            width: '240px',
                        }}/>
                <div className="flex justify-center items-center flex-col pt-2">
                    <Skeleton.Input
                        active={active}
                        style={{
                            height: '10px',
                            width: '230px',
                        }}/>
                    <Skeleton.Input
                        active={active}
                        style={{
                            height: '10px',
                            width: '230px',
                        }}/>
                    <Skeleton.Input
                        active={active}
                        style={{
                            height: '10px',
                            width: '230px',
                        }}/>
                </div>
                <div className="flex gap-4 justify-around pt-2">
                    <Skeleton.Button
                        active={active}
                        style={{
                            height: '25px',
                            width: '1px',
                        }}/>
                    <Skeleton.Button
                        active={active}
                        style={{
                            height: '25px',
                        }}/>
                    <Skeleton.Button
                        active={active}
                        style={{
                            height: '25px',
                        }}/>
                </div>
            </div>
            <div className="flex flex-col gap-1 md:hidden">
                <Skeleton.Node
                    active={active}
                    style={{
                        height: '150px',
                        width: '160px',
                    }}/>
                <div className="flex justify-center items-center flex-col pt-2">
                    <Skeleton.Input
                        active={active}
                        style={{
                            height: '10px',
                            width: '60px',
                        }}/>
                    <Skeleton.Input
                        active={active}
                        style={{
                            height: '10px',
                            width: '60px',
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
        </div>
    );
};

export default VideoLessonCardSkeletonComponent;
