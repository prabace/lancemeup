import React,{useState, useEffect} from 'react'
import Admintable from '../Components/Admintable'

const Admin = () => {

	const [products, setProducts] = useState([]);
	  
	useEffect(() => {
		const fetchData = async () => {
		  const data = await fetch("https://fakestoreapi.com/products");
	
		  const response = await data.json();
	
		  console.log(response);
		  setProducts(response);
		};
		fetchData();
	  }, []);

	  const display = Object.keys(products).map((product) =>{
		return(
			
			<Admintable
			key={products[product].id}
			id={products[product].id}
			title={products[product].title}
			price={products[product].price}
			category={products[product].category}
			image={products[product].image}
			/>
			
		)
	  }

	  )
	  

  return (
    <div class="bg-white p-40 rounded-md w-full ">
	<div class=" flex items-center justify-between pb-6">
		<div>
			<h2 class="text-2xl font-semibold">Products Oder</h2>
			<span class="text-lg">All products item</span>
		</div>
		</div>
		<div>
			<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
				<table className='min-w-full leading-normal' >
			<thead>
			<tr>
			  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
				Product
			  </th>
			  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
				Price
			  </th>
			  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
				Category
			  </th>
			  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
				Quantity
			  </th>
			  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
				Action
			  </th>
			</tr>
		  </thead>
					{display}
				</table>
					
				</div>
			</div>
		</div>
	</div>
  )
}

export default Admin