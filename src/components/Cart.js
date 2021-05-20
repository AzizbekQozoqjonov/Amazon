import React from 'react';
import '../styles/Cart.css'
import CurrencyFormat from 'react-currency-format'
import {getBasketSubtotal} from '../reducer'
import { useStateValue } from "../StateProvider";
import CartItem  from "./CartItem.js"

function Cart({allBasketItems}) {
    const [basket , dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__container">
                <div className="checkout__flexbox">
                    <div className="checkout__top">
                        <div className="checkout__ad"></div>
                        <div className="checkout__subtotal">
                            <div className="subtotal">
                                <CurrencyFormat
                                    renderText={(value) =>(
                                        <>
                                            <strong>Subtotal:</strong><span>{`${basket?.basket.length}`} items: </span>
                                            <strong>{`${value}`}</strong>
                                        </>
                                        )}
                                        value={getBasketSubtotal(basket?.basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                />
                            </div>
                            <div className="gift__check">
                            <input type="checkbox"  id="gift__checkout"/> <span>This contains a gift</span>
                            </div>

                            <button type="submit" className="proceed__checkout">Proceed to checkout</button>
                        </div>
                    </div>
                    <h2>Your shopping basket</h2>
                </div>
                {basket.basket.map((cartItems) => {
                    return (
                        <CartItem key={cartItems.id} id={cartItems.id} title={cartItems.title} image={cartItems.image} cost={cartItems.cost}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart
