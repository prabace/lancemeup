import React, { useState, useEffect } from "react";
import Cards from "../Components/Cards";
import Filter from "../Components/Filter";
import Category from "../Components/Category";
import Slider from "../Components/Slider";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from "../Redux/slices/cartSlice";

const Product = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const filter = useSelector((state) => state.productFilter.filter);
  const category = useSelector((state) => state.productFilter.category);

  
  const selectCategory = useSelector(
    (state) => state.productFilter.selectCategory
  );

  const range = useSelector((state) => state.productFilter.range);

  const addCart = useSelector((state) => state.cartItems.cart);

  const addToCart = (item) => {
    console.log(item);
    dispatch(setCartItems([...addCart, item]));
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");

      const response = await data.json();

      console.log(response);
      setProducts(response);
    };
    fetchData();
  }, []);

  let display = (
    <div className="flex min-h-screen justify-center items-center ">
      <svg
        aria-hidden="true"
        class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  );

  let displayProducts = Object.keys(products)
    .filter((product) => {
      // if (selectCategory) {
      //   console.log(selectCategory, products[product].category);
      //   return products[product].category === category;
      // }
      // if(range){
      //  return products[product].price >= range.minPrice &&  products[product].price <=range.maxPrice
      // }

      // let title = products[product].title.toLowerCase();
      // return filter ? title.includes(filter) : true;

      return (
        (category === "" || products[product].category === category) &&
        (filter === "" ||
          products[product].title
            .toLowerCase()
            .includes(filter.toLowerCase())) &&
        (range.minPrice === 0 || products[product].price >= range.minPrice) &&
        (range.maxPrice === 0 || products[product].price <= range.maxPrice)
      );
    })
    .map((product) => {
      return (
        <Cards
          key={products[product].id}
          id={products[product].id}
          title={products[product].title}
          price={products[product].price}
          category={products[product].category}
          image={products[product].image}
          addToCart={addToCart}
        />
      );
    });

  return (
    <div>
      <div className="flex flex-row justify-between m-20">
        <h2 className="text-2xl">Explore Your Options</h2>
        <Link to="/cart">
          <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
            <a href="#" role="button" class="relative flex">
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
              <span class="absolute right-0 top-0 rounded-full bg-primary w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {addCart.length}
              </span>
            </a>
          </li>
        </Link>
      </div>
      <div className=" grid grid-auto-fit-sm h-screen m-20">
        <div className="max-w-[300px]">
          <div>
            <Filter />
          </div>

          <div className="rounded-lg mt-10 p-10 w-full h-[20rem] mobile:h-[10rem] shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)]">
            <h2 className="text-xl">Select category</h2>
            <div className="mt-5 text-center">
              <Category />
            </div>
          </div>
          <div className="rounded-lg mt-10 p-10 w-full h-[20rem] mobile:h-[10rem] shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)]">
            <h2 className="text-xl">Price Range</h2>
            <div className="mt-5 text-center">
              <Slider />
            </div>
          </div>
        </div>

        <div className="col-span-3">
          {products.length == 0 ? (
            display
          ) : (
            <div className=" m-10 bg-white gap-x-8  grid grid-auto-fit-[20rem]">
              {displayProducts}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
