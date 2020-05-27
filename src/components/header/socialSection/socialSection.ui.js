import React from 'react';

const SeccionSocialUI = (props)=>{
    return (
        <div className="px-3 sm:px-10 md:px-20 lg:px-32 py-1 bg-gray-800 flex justify-between"> 
            <div className="flex items-center">
                <img className="h-3 w-3  mr-2 cursor-pointer"src="./image/icon/phone.svg" alt="phone"/>
                <p className="font-bold text-white text-xs cursor-pointer">+593 992728228 </p>
            </div>
            <img className="sm:hidden h-5  cursor-pointer"src="./image/icon/logo-w.svg" alt="logo-w"/>
            <div className="flex items-center">
                <img className="social-icon"src="http://www.entypo.com/images/pinterest.svg" alt="pinterest" />
                <img className="social-icon" src="http://www.entypo.com/images/twitter.svg" alt="twitter"/>
                <img className="social-icon" src="http://www.entypo.com/images/google+.svg" alt="google+"/>
                <img className="social-icon" src="http://www.entypo.com/images/linkedin.svg" alt="linkedin"/>
            </div>
            
        </div>
    )
}

export default SeccionSocialUI