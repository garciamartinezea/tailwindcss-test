import React from 'react';

const CommentsSeccionUI = (props)=>{
    const{text,name,social1,social2,social3} = props.item
    return (
        <div className="w-full flex justify-center items-center pt-12 px-2" style={{backgroundColor:'#17a59a'}}>
            <div className="w-full sm:w-4/5 xl:w-1/2 flex flex-col justify-center items-center ">  
                <div className=" mb-5 flex  justify-between   min-w-full"> 
                    <div className="border border-solid h-1 w-1/2 mr-5 " style={{height:'1px'}}/>
                    <img className="h-5 w-5" style={{ marginTop:'-10px'}} src="http://www.entypo.com/images/google-hangouts.svg"  alt="google-hangouts"/>
                    <div className="border border-solid h-1 w-1/2 ml-5" style={{height:'1px'}}/>
                </div>
                <h2 className="subtitle leading-none text-center text-white">
                    {text}
                </h2> 
                <div className=" mt-5 flex  justify-between   w-64"> 
                    <div className="border-t border-solid h-1 w-1/2 mr-5 " style={{height:'1px'}}/>
                    <p className=" text-more  text-white"style={{ marginTop:'-10px'}}>{name}</p>
                    <div className="rounded-full bg-white" />
                    <div className="border-t border-solid h-1 w-1/2 ml-5" style={{height:'1px'}}/>
                </div>

                <div className=" mt-2 flex  justify-between "> 
                    <img className="mx-1 h-3 w-3" src={social1} alt="social1" />
                    <img className="mx-1 h-3 w-3" src={social2} alt="social2"/>
                    <img className="mx-1 h-3 w-3" src={social3} alt="social3"/>
                </div>

            </div>

        </div>
    )
}

export default CommentsSeccionUI
