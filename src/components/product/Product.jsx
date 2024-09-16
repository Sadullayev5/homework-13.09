import React from 'react'
import { useGetProductsQuery } from '../../redux/api/ProductsApi'
import {Link} from "react-router-dom"

const Product = () => {
    const { data } = useGetProductsQuery();

    console.log(data);
    return (
        <>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
  {data && data.payload &&
    data.payload.map(product => (
      <div key={product._id} className="bg-white p-4 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
       <Link to={`/single/${product._id}`}>
       <img src={product.product_images[0]} alt={product.product_name} className="w-full " />
       </Link>
        
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{product.product_name}</h3>

          <div className="flex justify-between items-center text-gray-800">
            <p className="text-lg font-bold">$900{product.price}</p>
          </div>

          <p className="text-gray-600 text-sm mt-2 mb-4"> category: {product.category}</p>
          

          <Link to='/single/66a5fe5aef9f646863b22f6f' className="w-full p-2 mt-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
            View details
          </Link>
        </div>
      </div>
    ))
  }
</div>
        </>
    )
}

export default Product