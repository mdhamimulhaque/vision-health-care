import React from 'react';
import gif from "../../img/loadding.gif";

const Loading = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <img src={gif} alt="" />
        </div>
    );
};

export default Loading;