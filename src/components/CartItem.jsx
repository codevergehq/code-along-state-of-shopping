function CartItem({ item, updateQuantity, removeFromCart }) {
  const { id, name, price, quantity, image } = item;
  
  return (
    <div className="flex items-center space-x-4 py-2 border-b border-gray-200">
      <img 
        src={image} 
        alt={name} 
        className="w-16 h-16 object-cover rounded"
      />
      
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => updateQuantity(id, quantity - 1)}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          -
        </button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <button 
          onClick={() => updateQuantity(id, quantity + 1)}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          +
        </button>
      </div>
      
      <button 
        onClick={() => removeFromCart(id)}
        className="text-gray-500 hover:text-red-500 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
