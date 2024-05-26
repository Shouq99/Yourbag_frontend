import { useCartState } from "@/components/hooks/userCartState";
import { removeAllFromCart, removeFromCart } from "@/tookit/slices/cartSlice";
import { AppDispatch } from "@/tookit/store";
import React from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";

export const Cart = () => {
    const {cartItem} = useCartState()
    const dispatch : AppDispatch = useDispatch()
    const navigate = useNavigate()

    const handleRemoveAllProductsFromCart = ()=>{
        dispatch(removeAllFromCart())
    }
    
  const handleRemoveFromCart = (productId: string)=>{
if (productId){
    dispatch(removeFromCart(productId))

}
}

    const formatPrice = (amount: number)=>{
     return amount.toLocaleString("en-us",{
        style: "currency",
        currency: "USD" 
            } )}
    

    return (
        <div className="cart">
        {cartItem && cartItem.length > 0 ? (
            <> 
            <div className="">
                <h2> Shopping Cart [{cartItem.length}] items</h2>
                <button onClick={handleRemoveAllProductsFromCart}> Remove all items from cart <i className="fas fa-trash-alt"></i>
                </button>

                <button className="btn" 
                onClick={() => {
                    navigate("/")
                }}>
                    Shop More 
                </button>
            </div>

            <div className="card-body">
                <div className="cartItem">
                    {cartItem.map((cartItem)=>(
                        <div className="cartItem" key={cartItem.productId}>
                                    <div className="product-card" key={cartItem.productId}>
                 <img src={cartItem.image} alt={cartItem.name} className="product-img"/>
              <h3 className="Product_Name">{cartItem.name}</h3>
              <p className="Product_Name">{cartItem.description}</p>
                <p>
                  Price:
                  {formatPrice(cartItem.price)}
                </p>
                <br/>
                <div className="quantity">
                        <button className="btn">+</button>
                        <button className="btn">-</button>
                    </div>
                    <br/>
                    <button className="btn" onClick={
                        ()=> {handleRemoveFromCart(cartItem.productId)}}>
                        remove</button>

                </div>
                
                        </div>
                    ))}

                  
                </div>
                
            </div>
            
            
            </>
        ) : (
            <p> No items in the cart.</p>
        
        )}

        </div>
   
    )
}