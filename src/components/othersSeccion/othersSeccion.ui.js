import React from 'react';

const OthersSeccionUI = (props)=>{
    return (
        <div className="flex flex-col  md:flex-row">
            <div className=" md:pl-24 lg:pl-32   w-full md:w-3/5  bg-gray-800"> 
                <div className=" bg-cover p-5 h-auto sm:h-full w-full" style={{backgroundImage: "url(./image/PC.jpg)"}}>
                    <div className="flex border boder-solid border-white h-full  w-full justify-center ">
                        <div className="flex flex-col w-full sm:w-4/5  xl:w-3/5  justify-center items-center py-12 px-6">
                            <h2 className="subtitle leading-none text-center text-white"> unting businessmen all</h2>
                            <h2 className="subtitle leading-none text-center" style={{color: '#17a59a'}}> over the word </h2>
                            <div className=" mt-5 mb-3 flex  justify-between   min-w-full"> 
                                <div className="border border-solid h-1 w-1/2 mr-5 " style={{height:'1px'}}/>
                                <div className="rounded-full bg-white" style={{height:'10px', width:'10px', marginTop:'-5px'}}/>
                                <div className="border border-solid h-1 w-1/2 ml-5" style={{height:'1px'}}/>
                            </div>
                                <p className="text-xs text-center text-white">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
                            </div>
                    </div>
                </div>
            </div>

            <div className="px-5 sm:px-16 md:px-10  lg:pr-32  py-12  md:w-2/5 w-full  bg-gray-800"> 
                <h2 className="subtitle leading-none text-left text-white"> Welcome to our site </h2>
                <div className="flex mt-4">
                    <div className="mt-2 mr-2 h-full w-40 border border-solid border-b-1  border-white"/>
                        <div>
                            <p className=" text-xs text-left text-white"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
                            <p className=" text-more text-white">View more...</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default OthersSeccionUI
