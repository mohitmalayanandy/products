import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products";

const App = () => {

  const [data, setData] = useState([]);
  const [newProduct, setNewProduct] = useState({thumbnail: "", title: "", price: "", discountPercentage: "", rating: "", stock: "", category: ""});

  


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => setData(result.products.slice(0, 20)))
  };



  return (
    <div className="min-h-screen bg-gradient-to-r  p-8 text-black">
      <h1 className="text-4xl font-extrabold text-center mb-8">Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div key={product.id} className="p-6 bg-white text-black rounded-xl shadow-xl">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mt-4 rounded-lg shadow-md" />
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-lg text-gray-700">Price: <span >${product.price}</span></p>
            <p className="text-md text-gray-600">Discount Price:<span className="font-bold">${product.discountPercentage}</span></p>
            <p className="text-md text-gray-600">Rating:<span className="font-bold">{product.rating}⭐</span> </p>
            <p className="text-md text-gray-600">In Stock: only {product.stock} left</p>
            <p className="text-md text-gray-600">Category: {product.category}</p>
            <button className="mt-4 px-5 py-2 text-black rounded-lg shadow-md">Edit</button>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Discount Price" />
        <input type="text" placeholder="rating" />
        <input type="text" placeholder="stock" />
      </div>
    </div>
  );
};

export default App;