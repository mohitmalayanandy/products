import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
const API_URL = "https://dummyjson.com/products";

const Home = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => setData(result.products.slice(0, 10)));
  }, []);

  const addProduct = (newProduct) => {
    setData([newProduct, ...data]);
  };

  return (
    <div className="p-6">
      <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
        + Add Product
      </button>
      <ProductList products={data} />
      {showModal && <ProductForm addProduct={addProduct} closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default Home;