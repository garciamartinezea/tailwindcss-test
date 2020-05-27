import React from 'react';

const SliderSeccionUI = (props)=>{
    return (
        <div className="bg-fixed bg-cover w-full flex flex-col justify-center items-center" style={{backgroundImage: "url(./image/image.jpg)", height:'28rem' }}> 
            <h2 className="title leading-none text-center text-white max-w-2xl"> Lorem Ipsum es simplemente el texto de relleno de las imprentas </h2>
            <div className=" mt-5 mb-3 flex  justify-between   min-w-full md:min-w-1/2"> 
                <div className="border border-solid h-1 w-1/2 mx-5" style={{height:'1px'}}/>
                <div className="rounded-full bg-white" style={{height:'12px', width:'12px', marginTop:'-6px'}}/>
                <div className="border border-solid h-1 w-1/2 mx-5" style={{height:'1px'}}/>
            </div>
            <p className="m-0 subtitle2  text-center text-white max-w-2xl"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
            <button className="mt-6 py-1 px-4 text-text-base text-white uppercase" style={{backgroundColor:'#17a59a'}}>Lorem Ipsum</button>
        </div>
    )
}

export default SliderSeccionUI
