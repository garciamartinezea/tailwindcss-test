import React from 'react';
import News from '../news/';


const OurNewsSeccionUI = (props)=>{
    return (
        <div className="bg-white w-full py-16  flex  flex-col justify-center items-start  sm:px-2  md:px-12 lg:px-24">
            <div className="w-full flex justify-center items-center">
                <div className="max-w-xs flex flex-col justify-center items-center">
                    <h2 className="subtitle leading-none text-center text-gray-800"> our news</h2>
                    <div className=" w-12 my-2 border border-solid border-gray-700"/>
                    <p className="text-xs text-center text-grid-800">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
                </div>
            </div>
            <div className="w-full flex justify-start items-center ">
                <div className="w-3/2 md:w-1/2  flex justify-end items-center ">
                    <News/>  
                </div> 
             </div>
             <div className="w-full flex justify-end items-center ">
                <div className="w-3/2 md:w-1/2  flex justify-start items-center ">
                    <News/>  
                </div> 
             </div>
             <div className="w-full flex justify-start items-center ">
                <div className="w-3/2 md:w-1/2  flex justify-end items-center ">
                    <News/>  
                </div> 
             </div>
             <div className="w-full flex justify-end items-center ">
                <div className="w-3/2 md:w-1/2 flex justify-start items-center ">
                    <News/>  
                </div> 
             </div>
             <div className="w-full flex justify-start items-center ">
                <div className="w-3/2 md:w-1/2  flex justify-end items-center ">
                    <News/>  
                </div> 
             </div>
             <div className="w-full flex justify-end items-center ">
                <div className="w-3/2 md:w-1/2  flex justify-start items-center ">
                    <News/>  
                </div> 
             </div>
        </div>
    )
}
export default OurNewsSeccionUI
