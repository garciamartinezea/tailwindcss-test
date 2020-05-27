import React from 'react';

const SolutionsSeccionUI = (props)=>{
    return (
        <div className="flex flex-col  md:flex-row">
            <div className="px-5 sm:pl-16 md:pl-24 lg:pl-32   py-12  md:w-1/2 w-full bg-while"> 
                <h2 className="subtitle leading-none text-left text-gray-800"> our Solutions </h2>
                <div className="flex mt-4">
                    <div className="mt-2 mr-2 h-full w-40 border border-solid border-b-1  border-gray-800"/>
                        <div>
                            <p className=" text-xs text-left text-gray-800"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
                            <p className=" text-more text-gray-800 ">View more...</p>
                        </div>
                    </div>
            </div>
            <div className="px-5 sm:pl-16 md:pr-24 lg:pr-32   py-12  md:w-1/2 w-full bg-gray-800"> 
                <h2 className="subtitle leading-none text-left text-white"> why choose us </h2>
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

export default SolutionsSeccionUI
