import React from 'react';

const MobilePopupComponent = ({children, title, showPopup, setShowPopup}) => {
    return (<>
        {showPopup ? (<>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-x-0 bottom-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-full mb-14">
                    {/*content*/}
                    <div
                        className="border-0 rounded-t-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between rounded-t px-5 pt-4 items-center">
                            <h3 className="text-sm font-semibold text-gray-400 ">{title}</h3>
                            <button
                                className="bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowPopup(false)}>
                    <span
                        className="flex justify-center items-center bg-transparent text-slate-700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative px-6 pb-6">
                            {children}

                        </div>
                        {/*footer*/}

                        {/*{showFooter && <div*/}
                        {/*    className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">*/}
                        {/*    <button*/}
                        {/*        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                        {/*        type="button"*/}
                        {/*        onClick={() => setShowPopup(false)}*/}
                        {/*    >*/}
                        {/*        Close*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        {/*}*/}
                    </div>
                </div>
            </div>
            <div className="opacity-70 fixed inset-x-0 bottom-0 z-40 bg-black"></div>
        </>) : null}
    </>);
};

export default MobilePopupComponent;