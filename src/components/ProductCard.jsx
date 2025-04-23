function ProductCard({ product, addToCart }) {
  const { name, price, image, description } = product;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold">${price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;