import React, { useState, useEffect } from 'react'
import { Range } from "react-range";
import { useSelector, useDispatch } from "react-redux";
import { setSlider } from '../Redux/slices/filterSlice';

const Slider = () => {

    const[sliders, setSliders] = useState([]);



      const range = useSelector(
        (state) => state.productFilter.range
        )
    
        const dispatch = useDispatch()

        const handleRangeChange = (values) => {
            dispatch(setSlider({ minPrice: values[0], maxPrice: values[1] }));
          };

        useEffect(() => {
            const fetchData = async () => {
              const data = await fetch("https://fakestoreapi.com/products/price");
        
              const response = await data.json();
        
              console.log(response);
              setSliders(response);
            };
            fetchData();
          }, []);


  return (
    <div>
    <Range
    
  values={[range.minPrice, range.maxPrice]}
  onChange={handleRangeChange}
  min={0}
  max={500}
  step={1}
  
  renderTrack={({ props, children }) => (
    <div
      {...props}
      className="h-2 w-full bg-gray rounded-full mt-4"
    >
      {children}
    </div>
  )}
  renderThumb={({ props, isDragged }) => (
    <div
    {...props}
    className={`h-3 w-3 bg-white border-2 border-gray-300 rounded-full ${
      isDragged ? "shadow-lg" : ""
    }`}
    />

   
  )}


/>
<div className="flex items-center justify-between w-full mt-4">
        <span>{range.minPrice}</span>
        <span>{range.maxPrice}</span>
      </div>
</div>
  )}


export default Slider