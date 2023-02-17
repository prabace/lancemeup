import React from "react";

const Admintable = (props) => {
  return (
   
     
      <tbody>
        <tr>
          <td class="px-5 py-10 border-b border-gray-200 bg-white text-sm">
            <div class="flex items-center">
              <div class="flex-shrink-0 w-12 h-12">
                <img className="object-contain" src={props.image} />
              </div>
              <div class="ml-3">
                <p class="text-gray-900 whitespace-no-wrap">{props.title}</p>
              </div>
            </div>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">{props.price}</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">{props.category}</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">43</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <span class="relative inline-block px-4 py-2 font-semibold text-green-900 leading-tight">
              <span
                aria-hidden
                class="absolute inset-0 bg-error opacity-50 rounded-full"
              ></span>
              <button>Delete</button>
            </span>
          </td>
        </tr>
      </tbody>
 
  );
};

export default Admintable;
