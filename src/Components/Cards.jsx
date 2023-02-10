import React from "react";
import { Rating } from "@mui/material";
import shoee from "../Assets/shoee.jpg";

const Cards = () => {
  let products = require("../Utils/products.json");

  return (
    <div>
      {products.products.map((product) => {
   
        return (
          <div key={product.id} className="card">
            <img className="w-full h-[20rem] object-cover" src={shoee} />

            <div className="shadow-2xl rounded-lg px-2 py-2">
              <h3 className="text-2xl">{product.title}</h3>
              <div className="flex flex-row py-3 my-2">
                <h2 className="text-lg font-medium">
                  {product.price}
                </h2>
              </div>
              <div className="-mt-5 flex flex-row">
                <Rating name="read-only" value={5} readOnly />
                <h6 className="ml-4 text-gray-500">10 reviews</h6>
              </div>

              <div className="flex justify-center m-6 ">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
