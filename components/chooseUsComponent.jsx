import React from "react";

function ChooseUsComponent({ prop }) {
    return(
        <div className="flex justify-center items-center flex-col md:flex-row">
            <img src={prop.path} width={"60px"} alt="tag" />
            <div className="flex justify-start items-start p-3 flex-col h-full">
                <h3 className="text-[#807878] text-xl py-3 mb-5">{prop.title}</h3>
                <p className="text-[#C2BABA] w-[70%] text-[13px]">{prop.description}</p>
            </div>
        </div>
    )
}

export default ChooseUsComponent;