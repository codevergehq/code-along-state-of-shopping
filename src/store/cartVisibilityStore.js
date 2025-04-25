import { create } from "zustand";

const useCartVisibilityStore = create((set) => ({
  isCartOpen: false,
  actions: {
    openCart: () => set({ isCartOpen: true }),
    closeCart: () => set({ isCartOpen: false }),
    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  },
}));

export const useIsCartOpen = () => 
  useCartVisibilityStore((state) => state.isCartOpen);

export const useCartVisibilityActions = () =>
  useCartVisibilityStore((state) => state.actions);