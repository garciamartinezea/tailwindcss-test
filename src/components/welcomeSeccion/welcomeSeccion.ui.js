import React from 'react';

const WelcomeSeccionUI = (props)=>{
    return (
        <div className="flex flex-col  md:flex-row">
            <div className="px-5 sm:pl-16 md:pl-24 lg:pl-32   py-12  md:w-1/2 w-full bg-while"> 
                <h2 className="subtitle leading-none text-left text-gray-800"> Welcome to our site </h2>
                <div className="flex mt-4">
                    <div className="mt-2 mr-2 h-full w-40 border border-solid border-b-1  border-gray-800"/>
                        <div>
                            <p className=" text-xs text-left text-gray-800"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
                            <p className=" text-more  text-gray-800 ">View more...</p>
                        </div>
                    </div>
            </div>
            <div className=" flex flex-col sm:flex-row justify-start sm:justify-between md:justify-around lg:justify-start items-center px-4  sm:px-24  md:px-4  py-12 md:w-1/2  w-full" style={{backgroundColor:'#17a59a'}}> 
                <div className="xl:ml-10 container-icon-welcome">
                    <img className="h-24 w-24 sm:h-12 sm:w-12 cursor-pointer" src="http://www.entypo.com/images/suitcase.svg" alt="suitcase"/> 
                </div>
                <div className="mt-8 sm:mt-0 sm:ml-4 xl:ml-10 container-icon-welcome ">
                    <img className="h-24 w-24 sm:h-12 sm:w-12  cursor-pointer" src="http://www.entypo.com/images/pie-chart.svg" alt="pie-char"/> 
                </div>
                <div className="mt-8 sm:mt-0 sm:ml-4  xl:ml-10 container-icon-welcome ">
                    <img className="h-24 w-24  sm:h-12 sm:w-12 cursor-pointer" src="http://www.entypo.com/images/shop.svg" alt="shop"/> 
                </div>
            </div>
        </div>
    )
}

export default WelcomeSeccionUI
