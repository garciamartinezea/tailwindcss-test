import React from 'react';

const NewUI = (props)=>{
    return (
        <div className="flex  items-start justify-between bg-gray-300 max-w-sm mt-6 px-2 py-3 cursor-pointern">
            <div className="mr-2 p-1 w-10"  style={{backgroundColor:'#17a59a'}}>
                <img className="h-8 w-8"src="http://www.entypo.com/images/pinterest.svg" alt="pinterest" />
            </div>
            <div>
                <p className="subtitle2  text-left text-text-gray-800"> Lorem Ipsum es simplemente</p>
                <p className="text-xs text-left text-grid-800">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
            </div>
            
        </div>
    )
}
export default NewUI
