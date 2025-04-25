// cartStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist((set, get) => ({
    // State
  cartItems: [],
  // Actions
  actions: {
    addToCart: (product) => {
      set((state) => {
        const existingItem = state.cartItems.find(item => item.id === product.id);
        
        if (existingItem) {
          return {
            cartItems: state.cartItems.map(item => 
              item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
          };
        } else {
          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }]
          };
        }
      });
    },
    
    removeFromCart: (productId) => {
      set((state) => ({
        cartItems: state.cartItems.filter(item => item.id !== productId)
      }));
    },
    
    updateQuantity: (productId, quantity) => {
      if (quantity < 1) {
        get().removeFromCart(productId);
        return;
      }
      
      set((state) => ({
        cartItems: state.cartItems.map(item => 
          item.id === productId 
            ? { ...item, quantity } 
            : item
        )
      }));
    },

    clearCart: () => set({ cartItems: [] }),
  },
}),
  {
    name: 'cart-storage',
    version: 1,
    partialize: (state) => ({
      cartItems: state.cartItems,
    }),
  }
));

export const useCartItems = () => useCartStore((state) => state.cartItems);
export const useCartActions = () => useCartStore((state) => state.actions);
export const useTotalCartItems = () => useCartStore((state) => state.cartItems.reduce((total, item) => total + item.quantity, 0));
export const useTotalCartPrice = () => useCartStore((state) => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0));