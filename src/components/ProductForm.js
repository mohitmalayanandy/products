import { useState } from "react";

const ProductForm = ({ addProduct, closeModal }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category: "",
    thumbnail: "",
  });

  const handleSubmit = () => {
    if (!newProduct.title || !newProduct.price || !newProduct.category || !newProduct.thumbnail) return;
    addProduct({ id: Date.now(), ...newProduct });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <input
          type="text"
          placeholder="Title"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          placeholder="Thumbnail URL"
          value={newProduct.thumbnail}
          onChange={(e) => setNewProduct({ ...newProduct, thumbnail: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="flex justify-end gap-2">
          <button onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
