import React,{useEffect, useState} from "react";
import { Rating } from "@mui/material";
import shoee from "../Assets/shoee.jpg";

const Cards = (props) => {
  //let products = require("../Utils/products.json");

  
  return (
    <div className="">
      
   
        
          <div key={props.id} className="card h-[40rem]">
            <img className="w-full h-[20rem] object-contain" src={props.image} />

            <div className="shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] rounded-lg px-2 py-2">
         
              <h3 className="text-2xl truncate">{props.title}</h3>
           
              <div className="flex flex-row py-3 my-2">
                <h2 className="text-lg font-medium">
                  {props.price}
                </h2>
              </div>
              <div className="-mt-5 flex flex-row">
                <Rating name="read-only" value={5} readOnly />
                <h6 className="ml-4 text-gray-500">10 reviews</h6>
              </div>


              <div className="flex justify-center m-6 ">
                <button className="bg-secondary shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] hover:bg-white w-full p-3 mr-5 mb-4 rounded-full ">Buy Now</button>
              </div>
            </div>
          </div>
        
      
    </div>
  );
};

export default Cards;
