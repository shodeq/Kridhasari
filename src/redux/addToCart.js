import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Load initial state from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};

const initialState = {
    cart: loadCartFromStorage(),
    loading: false,
    error: ""
};

// Helper function to save cart to localStorage
const saveCartToStorage = (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to localStorage:', error);
    }
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.adet += 1;
            } else {
                state.cart.push(newItem);
            }
            
            saveCartToStorage(state.cart);
            toast.success("Product Added to Cart");
        },
        
        removeItemCart(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            saveCartToStorage(state.cart);
            toast.success("Product removed from cart");
        },
        
        allClearCart(state) {
            state.cart = [];
            saveCartToStorage(state.cart);
            toast.success("Cart Emptied");
        },
        
        urunArttir(state, action) {
            const itemId = action.payload;
            const existingItem = state.cart.find(item => item.id === itemId);

            if (existingItem) {
                existingItem.adet += 1;
                saveCartToStorage(state.cart);
            }
        },
        
        urunAzalt(state, action) {
            const itemId = action.payload;
            const existingItem = state.cart.find(item => item.id === itemId);

            if (existingItem) {
                if (existingItem.adet > 1) {
                    existingItem.adet -= 1;
                } else {
                    state.cart = state.cart.filter(item => item.id !== itemId);
                }
                saveCartToStorage(state.cart);
            }
        }
    },
});

export const { 
    addItemCart, 
    removeItemCart, 
    allClearCart, 
    urunArttir, 
    urunAzalt 
} = cartSlice.actions;

export default cartSlice.reducer;