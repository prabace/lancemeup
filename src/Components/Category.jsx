// import React, {useState,useEffect} from "react";
// import Cards from "./Cards";


// const Category = () => {

// const[categories, setCategories] = useState([]);
// const [selectedCategory, setSelectedCategory] = useState('');
// const [filteredProducts, setFilteredProducts] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//           const data = await fetch("https://fakestoreapi.com/products/categories");
    
//           const response = await data.json();
    
//           console.log(response);
//           setCategories(response);
//         };
//         fetchData();
//       }, []);

//       useEffect(() => {
//         const fetchData = async () => {
//           const data = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
    
//           const response = await data.json();
    
//           console.log(response);
//           setFilteredProducts(response);
//         };
//         fetchData();
//       }, [selectedCategory]);

//       const handleCategoryChange = event => {
//       setSelectedCategory(event.target.value);
//       };

//   return (
//     <div>
//     <select value={selectedCategory} onChange={handleCategoryChange}>
//       <option value="">All categories</option>
//       {categories.map(category => (
//         <option key={category} value={category}>{category}</option>
//       ))}
//     </select>
//     <ul>
//       {filteredProducts.map(product => (
//         <Cards key={product.id} 
//             image={product.image}
//             title= {product.title}/>
//       ))}
//     </ul>
//   </div>
//   );
// };

// export default Category;
