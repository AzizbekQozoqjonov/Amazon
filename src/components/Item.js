import React from 'react'
import { useStateValue } from "../StateProvider";

function Item({id,cost , title, image}) {
    const [basket , dispatch] = useStateValue([]);
    const addToCart = (e) => {
        dispatch({
            type: "ADD_TO_CART",
            basket: {
                id: id,
                title: title,
                cost: cost,
                image: image
            }
        });
    }
    return (
        <div className="item">
            <h1>{title}</h1>
            <p>{cost}</p>
            <img src={image} alt="" />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Item
