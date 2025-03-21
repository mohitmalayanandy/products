import Review from "./Review";

const ProductCard = ({ product }) => {
  return (
    <div className="p-6 bg-white text-black rounded-xl shadow-xl">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover mt-4 rounded-lg shadow-md"
      />
      <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
      <p className="text-lg text-gray-700">Price: ${product.price}</p>
      <p className="text-md text-gray-600">{product.description}</p>
      <p className="text-md text-gray-600">
        <strong>Brand:</strong> {product.brand}
      </p>
      <p className="text-md text-gray-600">
        <strong>SKU:</strong> {product.sku}
      </p>
      <p className="text-md text-gray-600">
        <strong>Tags:</strong> {product.tags.join(", ")}
      </p>
      <p className="text-md text-gray-600">
        <strong>Weight:</strong> {product.weight}g
      </p>
      <p className={`text-md ${product.availabilityStatus === "Low Stock" ? "text-red-500" : "text-green-500"}`}>
        {product.availabilityStatus}
      </p>
      <p className="text-md text-gray-600">
        <strong>Warranty:</strong> {product.warrantyInformation}
      </p>
      <p className="text-md text-gray-600">
        <strong>Shipping:</strong> {product.shippingInformation}
      </p>
      <p className="text-md text-gray-600">
        <strong>Return Policy:</strong> {product.returnPolicy}
      </p>

      {/* Render Reviews */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Reviews:</h3>
        {product.reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>

      {/* QR Code */}
      {product.meta?.qrCode && (
        <img
          src={product.meta.qrCode}
          alt="QR Code"
          className="mt-4 w-16 h-16"
        />
      )}

      {/* Minimum Order Quantity */}
      <p className="text-md text-gray-600">
        <strong>Minimum Order:</strong> {product.minimumOrderQuantity} units
      </p>
    </div>
  );
};

export default ProductCard;
