'use client'
import React from 'react';
import {Bars3Icon, RectangleGroupIcon, KeyIcon, ChartBarIcon, BookOpenIcon} from "@heroicons/react/24/outline";
import RadioInput from "../../components/Sidebar/RadioInput.component";
import CheckboxInput from "../../components/Sidebar/CheckBox.component";
import CollapsedSidebarButtonComponent from "../../components/Sidebar/CollapsedSidebarButton.component";
import ExpandedSidebarButtonComponent from "../../components/Sidebar/ExpandedSidebarButton.component";
import {Badge} from "antd";

const DesktopSidebarComponent = (props) => {
    const {
        sidebarOpen,
        unlockedContent,
        contentType,
        learningLevels,
        learningTopics,
        handleUnlockedContentChange,
        handleContentTypeChange,
        handleLearningLevelsChange,
        handleLearningTopicsChange,
        handleReset,
        onToggle
    } = props;

    const contentTypes = [
        {value: "all", label: "All"},
        {value: "videolesson", label: "Video Lessons"},
        {value: "courses", label: "Courses"},
        {value: "blogpost", label: "Blog Post"},
    ];
    const levels = [
        {value: "beginner", label: "Beginner"},
        {value: "intermediate", label: "Intermediate"},
        {value: "advanced", label: "Advanced"},
    ];
    const topics = [
        {value: "education", label: "Education"},
        {value: "lifeCulture", label: "Life & Culture"},
    ];

    // const [filters, setFilters] = useState();

    return (
        <div>
            <div
                className={`hidden md:block md:fixed md:inset-y-0 md:flex  md:flex-col md:pt-[110px] ${sidebarOpen ? 'md:w-64 ' : 'md:w-24'}`}>
                <div
                    className={`flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white ${sidebarOpen ? 'px-1' : 'px-1'}`}>
                    <div className="flex flex-col overflow-y-auto bg-white pb-2">
                        <div>
                            <div className="p-2 flex flex-col">
                                <div className="sidebar-header flex justify-between py-2">
                                    <button type="button"
                                            className={`text-gray-700 flex items-center pl-6 ${sidebarOpen ? '' : 'pt-[6px]'}`}
                                            onClick={onToggle}>
                                        <span
                                            className="sr-only">{sidebarOpen ? 'close sidebar' : 'open sidebar'}</span>
                                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                    <div>
                                        {
                                            sidebarOpen && <button
                                                className="bg-Fblue py-2 lg:px-4 px-4 rounded-md uppercase text-sm font-semibold bg-blueS text-white"
                                                onClick={handleReset}
                                            >
                                                Reset
                                            </button>
                                        }
                                    </div>
                                </div>
                                <div className="filters-container flex-col">
                                    {sidebarOpen ? (
                                        <div className="overflow-y-scroll flex flex-col justify-center h-[70%]">

                                            <div className="container">
                                                {/* Access */}
                                                <div className="mb-4">
                                                    <ExpandedSidebarButtonComponent
                                                        name="access"
                                                        icon={<KeyIcon className="h-5 w-5"/>}
                                                        label="Access"
                                                    />
                                                    <div className="field mt-2 ml-2">
                                                        <RadioInput
                                                            type="checkbox"
                                                            name="unlockedContent"
                                                            checked={unlockedContent}
                                                            onChange={handleUnlockedContentChange}
                                                            label="Unlocked Content"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Type */}
                                                <div className="mb-4">
                                                    <ExpandedSidebarButtonComponent
                                                        name="type"
                                                        icon={<RectangleGroupIcon className="h-5 w-5"/>}
                                                        label="Type"
                                                    />
                                                    <div className="field flex flex-col gap-2 mt-2 ml-2">
                                                        {contentTypes.map((type) => (
                                                            <RadioInput
                                                                key={type.value}
                                                                type="radio"
                                                                name="contentType"
                                                                value={type.value}
                                                                checked={contentType === type.value}
                                                                onChange={handleContentTypeChange}
                                                                label={type.label}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* Learning Level */}
                                                <div className="mb-4">
                                                    <ExpandedSidebarButtonComponent
                                                        name="level"
                                                        icon={<ChartBarIcon className="h-5 w-5"/>}
                                                        label="Learning Level"
                                                    />
                                                    <div className="field flex flex-col mt-2 gap-2 text-grey ml-2">
                                                    {levels.map((level) => (
                                                        <CheckboxInput
                                                            key={level.value}
                                                            type="checkbox"
                                                            name="level"
                                                            value={level.value}
                                                            checked={learningLevels === level.value}
                                                            onChange={handleLearningLevelsChange}
                                                            label={level.label}
                                                        />
                                                    ))}
                                                    </div>
                                                </div>
                                                {/* Learning Topic */}
                                                <div className="mb-4">
                                                    <ExpandedSidebarButtonComponent
                                                        name="topic"
                                                        icon={<BookOpenIcon className="h-5 w-5"/>}
                                                        label="Learning Topic"
                                                    />
                                                    <div className="field flex flex-col mt-2 gap-2 text-grey ml-2">
                                                        {topics.map((topic) => (
                                                            <CheckboxInput
                                                            key={topic.value}
                                                            type="checkbox"
                                                            name="topic"
                                                            value={topic.value}
                                                            checked={learningTopics === topic.value}
                                                            onChange={handleLearningTopicsChange}
                                                            label={topic.label}
                                                        />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="field flex flex-col gap-1 ">

                                            <CollapsedSidebarButtonComponent
                                                name="access"
                                                onClick={onToggle}
                                                icon={<KeyIcon className="h-4 w-4"/>}
                                                label="Access"
                                                badge={
                                                    unlockedContent && (
                                                        <div className="field text-Fblue">
                                                            <Badge dot={unlockedContent} color="rgb(45, 183, 245)">
                                                            </Badge>
                                                        </div>
                                                    )
                                                }
                                            />

                                            <CollapsedSidebarButtonComponent
                                                name="type"
                                                onClick={onToggle}
                                                icon={<RectangleGroupIcon className="h-4 w-4"/>}
                                                label="Type"
                                                badge={
                                                    contentType && (
                                                        <div className="field text-Fblue">
                                                            <Badge dot={contentType} color="rgb(45, 183, 245)">
                                                            </Badge>
                                                        </div>
                                                    )
                                                }
                                            />

                                            <CollapsedSidebarButtonComponent
                                                name="level"
                                                onClick={onToggle}
                                                icon={<ChartBarIcon className="h-4 w-4"/>}
                                                label="Learning Level"
                                                badge={
                                                    learningLevels && (
                                                        <div className="field text-Fblue">
                                                            <Badge dot={learningLevels} color="rgb(45, 183, 245)">
                                                            </Badge>
                                                        </div>
                                                    )
                                                }
                                            />
                                            <CollapsedSidebarButtonComponent
                                                name="topic"
                                                onClick={onToggle}
                                                icon={<BookOpenIcon className="h-4 w-4"/>}
                                                label="Learning Topic"
                                                badge={
                                                    learningTopics && (
                                                        <div className="field text-Fblue">
                                                            <Badge dot={learningTopics} color="rgb(45, 183, 245)">
                                                            </Badge>
                                                        </div>
                                                    )
                                                }
                                            />
                                        </div>
                                    )}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopSidebarComponent;