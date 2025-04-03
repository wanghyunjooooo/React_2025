 import React from "react";
 import Cart from '../components/Cart'
import { clear } from "@testing-library/user-event/dist/clear";

 function CartPage({ cartItems, updateQuantity, removeFromCart, clearCart }){
    return(
        <div className="cart-page">
            <Cart
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            />
        </div>
    );
 }

 export default CartPage;