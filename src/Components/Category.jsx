import React, {useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, selectCategory } from "../Redux/slices/filterSlice";

const Category = () => {

 const[categories, setCategories] = useState([]);
// const [selectedCategory, setSelectedCategory] = useState('');
// const [filteredProducts, setFilteredProducts] = useState([]);


const category = useSelector(
    (state) => state.productFilter.category
    )


  const dispatch = useDispatch()


    useEffect(() => {
        const fetchData = async () => {
          const data = await fetch("https://fakestoreapi.com/products/categories");
    
          const response = await data.json();
    
          console.log(response);
          setCategories(response);
        };
        fetchData();
      }, []);

  return (
    <div className="">
     <select value={category} onChange={(e)=> 
     {console.log(e.target.value)
        dispatch(setCategory(e.target.value));
                    dispatch(selectCategory(e.target.value=='false'?false:true))
    }}>
      <option value={false}>All categories</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
    
  </div>
  );
};

export default Category;
