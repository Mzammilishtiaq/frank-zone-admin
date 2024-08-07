import React from "react";
import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";

function RatingStar({ value }:any) {
  return (
    <>
      <span>
        {value >= 1 ? (<BsStarFill className="text-yellow-300"/>) : 
          value >= 0.5 ?(<BsStarHalf className="text-yellow-300"/>): (<BsStar className="text-yellow-300"/>)}
      </span>
      <span>
        {value >= 2 ? (<BsStarFill className="text-yellow-300"/>) : 
          value >= 1.5 ?(<BsStarHalf className="text-yellow-300"/>): (<BsStar className="text-yellow-300"/>)}
      </span>
      <span>
        {value >= 3 ? (<BsStarFill className="text-yellow-300"/>) : 
          value >= 2.5 ?(<BsStarHalf className="text-yellow-300"/>): (<BsStar className="text-yellow-300"/>)}
      </span>
      <span>
        {value >= 4 ? (<BsStarFill className="text-yellow-300"/>) : 
          value >= 3.5 ?(<BsStarHalf/>): (<BsStar className="text-yellow-300"/>)}
      </span>
      <span>
        {value >= 5 ? (<BsStarFill className="text-yellow-300"/>) : 
          value >= 4.5 ?(<BsStarHalf className="text-yellow-300"/>): (<BsStar className="text-yellow-300"/>)}
      </span>
    </>
  );
}

export default RatingStar;
