import React from "react";

const Filter = () => {
  return (
    
      <div class="items-center space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
        <div class="flex w-[4rem]  p-2 space-x-4 rounded-lg">
          
          <input
            class="bg-gray-100 outline-none"
            type="text"
            placeholder="Article name or keyword..."
          />
          <div class="py-3 px-5 text-white font-semibold rounded-lg transition duration-3000 cursor-pointer">
          <span><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 opacity-30 text-dark hover:text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg></span>
        </div>
        </div>

        
      </div>
      
  );
};

export default Filter;
