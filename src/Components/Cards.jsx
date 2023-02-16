import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cards = (props) => {
  //let products = require("../Utils/products.json");


 
  const dispatch = useDispatch()

const handleAddToCart = () => {
  const newItem = { id: props.id, title: props.title, price: props.price };

  props.addToCart(newItem);
  
}




  return (
    <div key={props.id} className="bg-white h-[40rem] max-w-[35rem]">
      <div className=" rounded-xl h-[450px] shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)]">
        <img className="w-auto h-[225px] object-cover" src={props.image} />

        <div className="rounded-lg px-2 py-2">
          <h3 className="text-2xl truncate">{props.title}</h3>

          <div className=" grid grid-cols-2 justify-between py-3 my-2">
            <div>
              <h2 className="text-lg font-medium">${props.price}</h2>
            </div>
            {/* <div className="text-center">
              <h2 className="bg-item rounded-full text-sm ">
                {props.category}
              </h2>
            </div> */}
          </div>

          <div className="flex justify-center m-6 ">
            <button
              onClick= {e=>{dispatch(handleAddToCart)}}
              className="bg-secondary shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] hover:bg-white w-full p-3 mr-5 mb-4 rounded-full "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
