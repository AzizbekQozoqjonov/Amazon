import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoryProduct.css';

function CategoryProduct({categoryData, categoryTitle, link}) {
    return (
        <div className="category__product">
            <h3>{categoryTitle}</h3>
            <div className="category__choices">
                {categoryData.map(everyImage => {
                    return(
                       <Link to="/product">
                            <div className="choice__wrapper">
                                <img src={everyImage.image} alt="" className="category__images"/>
                                <p>{everyImage.title}</p>
                            </div>
                       </Link>
                    )
                })}
            </div>
            <Link className="product__link">{link}</Link>
        </div>
    )
}

export default CategoryProduct
