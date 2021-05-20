import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UpperProduct.css';

function UpperProduct({title, image, link}) {
    return (
        <div className="upper__product">
            <h3>{title}</h3>
                <div className="upperProduct__image" style={{backgroundImage: `url(${image})`}}></div>
            <Link className="product__link">{link}</Link>
        </div>
    )
}

export default UpperProduct
