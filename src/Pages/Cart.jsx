import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Items from "../Components/Items";

const Cart = () => {


    const cartList = useSelector((state) => state.cartItems.cart);
      console.log(cartList)
      
      const displayCart = Object.keys(cartList).map(item =>
          <Items
          key= {cartList[item].id}
            id = {cartList[item].id}
            title = {cartList[item].title}
            price = {cartList[item].price}
            image = {cartList[item].image}
          />
        )
  return (
    <>
      <div className="m-40">
        <div className="flex flex-row justify-between gap-x-4">
          <Link to="/product">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-10 flex flex-row "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <hr className="mt-5" />

        <div className="mt-8">
          <h1 className="text-2xl">Shopping Cart</h1>
          <p>
            You have <span>7</span> items in shopping cart.
          </p>
          

          <div className="mt-8 ">
            {displayCart}
          </div>
          
        </div>
        
      <div className="grid grid-auto-fit-xl gap-y-10 justify-between">
        <div className="gap-x-40 flex">
          <h2 className="text-2xl">TOTAL</h2>
          <div>
            <h2 className="text-2xl">$22</h2>
          </div>
        </div>
        <div>
          <button className="bg-primary py-4 px-8 text-xl rounded-full">Purchase</button>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Cart;
