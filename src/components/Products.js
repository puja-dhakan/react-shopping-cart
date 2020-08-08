import React, { Component } from 'react'
import formatCurrency from '../util'

export default class  extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(products => (
                        <li key={products._id}>
                            <div className="product">
                                <a href={"#" + products._id}>
                                    <img src={products.image} alt="product.title"></img>
                                    <p>
                                        {products.title}
                                    </p>
                                </a>
                                <div className="product-price">
                                    <div>
                                        {formatCurrency (products.price)}
                                    </div>
                                    <button className="button primary">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
