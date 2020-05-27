import React from 'react';

const SeccionMenuUI = (props)=>{
    return (
        <div className="px-3 sm:px-10 md:px-20 lg:px-32  py-3 bg-white flex justify-between"> 
            <div className="hidden sm:flex  items-center">
                <img className="  h-6 mr-2  cursor-pointer"src="./image/icon/logo.svg" alt="logo"/>
                <h2 className="text-3xl  font-medium uppercase text-gray-800"> PEACE </h2>
            </div>
            <div className="flex items-center justify-between w-full sm:w-auto">
                <a href="#" className=" btn-menu">Home</a>
                <a href="#" className=" btn-menu">Products</a>
                <a href="#" className=" btn-menu">Blog</a>
                <a href="#" className=" btn-menu">Products</a>
                <a href="#" className=" btn-menu">Contact</a>
            </div>
            
        </div>
    )
}

export default SeccionMenuUI