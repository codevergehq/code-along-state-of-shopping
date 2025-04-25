import CartItem from './CartItem';
import { useCartActions, useCartItems, useTotalCartPrice } from '../store/cartStore';
import { useCartVisibilityActions, useIsCartOpen } from '../store/cartVisibilityStore';

function Cart() {
  const cartItems = useCartItems();
  const totalPrice = useTotalCartPrice();
  const { updateQuantity, removeFromCart, clearCart } = useCartActions();
  
  const isCartOpen = useIsCartOpen();
  const { closeCart } = useCartVisibilityActions();

  if (!isCartOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={closeCart}
      ></div>
      
      {/* Cart panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-4 py-3 bg-indigo-600 text-white flex justify-between items-center">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={closeCart} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="mt-2 text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <CartItem 
                    key={item.id} 
                    item={item} 
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-4 space-y-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={clearCart}
                  className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Clear Cart
                </button>
                <button 
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
