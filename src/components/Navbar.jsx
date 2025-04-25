import { useTotalCartItems } from "../store/cartStore";
import { useCartVisibilityActions } from "../store/cartVisibilityStore";

function Navbar() {
    const totalItems = useTotalCartItems();
    const { toggleCart } = useCartVisibilityActions();

    return (
        <nav className="bg-indigo-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">TechCart</div>
                
                <button 
                onClick={toggleCart}
                className="flex items-center space-x-1 bg-indigo-700 px-3 py-2 rounded-lg hover:bg-indigo-800 transition"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-medium">Cart</span>
                {totalItems > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                    </span>
                )}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;