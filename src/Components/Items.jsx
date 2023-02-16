import React from "react";

const Items = (props) => {
  return (
    <div className="cart-items my-5">
      <div className="items-info grid grid-auto-fit-lg items-center gap-y-8">
        <div className="image">
          <img className="h-[15rem]" src={props.image} />
        </div>
        <div className="title">
          <h2 className="text-xl">{props.title}</h2>
        </div>
        {/* <div className="quantity flex flex-row gap-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>

          <input className="w-[20px] " type="text" placeholder="2" />
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div> */}
        <div className="price">
          <h2 className="text-xl">Rs. {props.price}</h2>
        </div>
      </div>
      <hr className="mt-6"/>
    
    </div>
  );
};

export default Items;
