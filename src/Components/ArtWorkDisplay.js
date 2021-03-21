
import React, { Component } from 'react';
// import express from 'express';
import Cart from './Cart';


 export default class ArtWorkDisplay extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
        this.addToCart= this.addToCart.bind(this);
        this.clearCart= this.clearCart.bind(this);
    }

//when button 'add to cart' is clicked add title of current art to cart array.
    addToCart(title) {
        this.setState({
            cart: [...this.state.cart, title]  
        })
      }
//when button 'purchase' is pushed the cart array is set to empty array.     
      clearCart() {
        this.setState({
            cart: []
        })
      }
    

    render() {
// images being renderd
        const artwork = this.props.art.map((el, index) => {
            return <img key = {index} alt = 'art' src = {el.img} className ='artwork' onClick={() => this.addToCart(el.title)}/>
                // <div key = {el.title}>
                    
                //     <h6>{el.title} ${el.price}</h6>
                //     <h6>{el.details.description}</h6> 
                // </div>   
        })

        return (
            <div className="bodyArea" >
                <div className='displayArea'>
                    {artwork}
                </div>
                
                
                <div className='cartArea'>

                    <div className='cartTitle'>
                    <h4>Your Cart</h4>
                    </div>

                    <div className='artInCart'>
                    <Cart cartList = {this.state.cart}/>
                    </div>

                    <div className='buyArea'>
                    <span>total $0.00</span>
                    </div>

                    <div>
                        <button onClick={this.clearCart}>PURCHASE</button>
                    </div>

                </div>

            </div>
        );
 
    }   
    
}
 