// 'use client'
// import React, {useState} from 'react';
// import RadioInput from "./RadioInput.component";
// import CheckboxInput from "./CheckBox.component";
// const FilterSidebarComponent = () => {
//     const initialContentType = {
//         all: false,
//         videolesson: false,
//         courses: false,
//         blogpost: false,
//     };
//
//     const initialLearningLevels = {
//         beginner: false,
//         intermediate: false,
//         advanced: false,
//     };
//
//     const initialLearningTopics = {
//         education: false,
//         lifeCulture: false,
//     };
//
//     const [unlockedContent, setUnlockedContent] = useState(false);
//     const [contentType, setContentType] = useState(initialContentType);
//     const [learningLevels, setLearningLevels] = useState(initialLearningLevels);
//     const [learningTopics, setLearningTopics] = useState(initialLearningTopics);
//
//     const handleCheckboxChange = (event) => {
//         const { name, checked } = event.target;
//
//         switch (name) {
//             case "unlockedContent":
//                 setUnlockedContent(checked);
//                 break;
//             case "beginner":
//             case "intermediate":
//             case "advanced":
//                 setLearningLevels({ ...learningLevels, [name]: checked });
//                 break;
//             default:
//                 setLearningTopics({ ...learningTopics, [name]: checked });
//                 break;
//         }
//     };
//
//     const handleRadioChange = (event) => {
//         setContentType(event.target.value);
//     };
//
//     const handleReset = () => {
//         setUnlockedContent(false);
//         setContentType(initialContentType);
//         setLearningLevels(initialLearningLevels);
//         setLearningTopics(initialLearningTopics);
//     };
//     return (
//         <div>
//             <div className="p-2">
//                 <div className="mb-4">
//                     <button
//                         className="bg-Fblue py-2 lg:px-16 rounded-md uppercase font-bold bg-blueS text-white"
//                         onClick={handleReset}
//                     >
//                         Reset Filters
//                     </button>
//                 </div>
//                 <div className="allCheckBox overflow-y-scroll flex flex-col justify-center h-[70%]">
//                     <div className="fields-container">
//                         {/* Access */}
//                         <div className="mb-4">
//                             <label className="text-sm uppercase text-Fblue font-semibold mt-2">
//                                 Access
//                             </label>
//                             <div className="field mt-2">
//                                 <label className="checkbox flex gap-1 text-grey">
//                                     <RadioInput
//                                         type="checkbox"
//                                         name="unlockedContent"
//                                         checked={unlockedContent}
//                                         onChange={handleCheckboxChange}
//                                     />
//                                     Unlocked Content
//                                 </label>
//                             </div>
//                         </div>
//
//                         {/* Type */}
//                         <div className="mb-4">
//                             <label className="text-sm uppercase text-Fblue font-semibold">
//                                 Type
//                             </label>
//                             <div className="field flex flex-col gap-2 mt-2">
//                                 <label className="radio flex gap-1 text-grey">
//                                     <RadioInput
//                                         type="radio"
//                                         name="contentType"
//                                         value="all"
//                                         checked={contentType === "all"}
//                                         onChange={handleRadioChange}
//                                     />
//                                     All
//                                 </label>
//
//                                 <label className="radio flex gap-1 text-grey">
//                                     <RadioInput
//                                         type="radio"
//                                         name="contentType"
//                                         value="videolesson"
//                                         checked={contentType === "videolesson"}
//                                         onChange={handleRadioChange}
//                                     />
//                                     Video Lessons
//                                 </label>
//
//                                 <label className="radio flex gap-1 text-grey">
//                                     <RadioInput
//                                         type="radio"
//                                         name="contentType"
//                                         value="courses"
//                                         checked={contentType === "courses"}
//                                         onChange={handleRadioChange}
//                                     />
//                                     Courses
//                                 </label>
//
//                                 <label className="radio flex gap-1 text-grey">
//                                     <RadioInput
//                                         type="radio"
//                                         name="contentType"
//                                         value="blogpost"
//                                         checked={contentType === "blogpost"}
//                                         onChange={handleRadioChange}
//                                     />
//                                     Blog Post
//                                 </label>
//                             </div>
//                         </div>
//
//                         {/* Learning Level */}
//                         <div className="mb-4">
//                             <label className="text-sm uppercase text-Fblue font-semibold">
//                                 Learning Level
//                             </label>
//                             <div className="field flex flex-col mt-2 gap-2 text-grey ">
//                                 <CheckboxInput
//                                     name="beginner"
//                                     checked={learningLevels.beginner}
//                                     onChange={handleCheckboxChange}
//                                     label="Beginner"
//                                     count={2}
//                                 />
//
//                                 <CheckboxInput
//                                     name="intermediate"
//                                     checked={learningLevels.intermediate}
//                                     onChange={handleCheckboxChange}
//                                     label="Intermediate"
//                                     count={4}
//                                 />
//
//                                 <CheckboxInput
//                                     name="advanced"
//                                     checked={learningLevels.advanced}
//                                     onChange={handleCheckboxChange}
//                                     label="Advanced"
//                                     count={1}
//                                 />
//                             </div>
//                         </div>
//
//                         {/* Learning Topic */}
//                         <div className="mb-4">
//                             <label className="text-sm uppercase text-blueS font-semibold">
//                                 Learning Topic
//                             </label>
//                             <div className="field flex flex-col gap-2 mt-2 text-grey">
//                                 <CheckboxInput
//                                     name="education"
//                                     checked={learningTopics.education}
//                                     onChange={handleCheckboxChange}
//                                     label="Education"
//                                     count={2}
//                                 />
//
//                                 <CheckboxInput
//                                     name="lifeCulture"
//                                     checked={learningTopics.lifeCulture}
//                                     onChange={handleCheckboxChange}
//                                     label="Life & Culture"
//                                     count={3}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//         </div>
//     );
// };
//
// export default FilterSidebarComponent;