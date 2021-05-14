
import React, { Component } from 'react';
import Cart from './Cart';
import Comments from './Comments';
import axios from 'axios';


 export default class ArtWorkDisplay extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
            total: 0,
        }
    }

    

//when button 'add to cart' is clicked add title of current art to cart array.
    addToCart = (title) => {
        this.setState({
            cart: [...this.state.cart, title]  
        })
        
      }

    addToTotal = (price) => {
        let sum = this.state.total + price
        this.setState({
            total: sum
        })
    }

    clearCart= () => {
        this.setState({
            cart: [],
            total: 0
        })
    }

    updateQuantity = (id) => {
        axios.put(`/api/display-title/:${id}`)
            .then(res => { 
                console.log(res.data);
                    axios.delete(`/api/display-title/:${id}`)
                        .then(res => { 
                            console.log(res.data);
                        })
            })
        .catch(err => console.log(err));

    }

      
    

    render() {
//images being renderd
        const artwork = this.props.art.map((el, index) => {
            return (
                <div key = {index}>
                    <ul>
                        <li><img alt = 'art' src = {el.img} className ='artwork' 
                        onClick={() => {
                        this.addToCart(el.title);
                        this.addToTotal(el.price);
                        this.updateQuantity(el.id)
                        }}/>
                        </li>
                        <li>{el.details.description}</li>
                        <li>{el.title}</li>
                        <li>${el.price}</li>
                        <li>Qty: {el.details.quantity}</li>

                    </ul>
                </div>
        )   
        })

        return (
            <div className="bodyArea" >
                <div className='displayArea'>
                    {artwork}
                    <div>
                        <Comments/>
                    </div>
                </div>
                
                
                <div className='cartArea'>

                    <div className='cartTitle'>
                    <h4>Your Cart</h4>
                    </div>

                    <div className='artInCart'>
                    <Cart cartList = {this.state.cart}/>
                    </div>

                    <div className='buyArea'>
                    <span>${this.state.total}</span>
                    </div>

                    <div>
                        <button onClick={this.clearCart}>PURCHASE</button>
                    </div>

                </div>
            </div>
        );
    }    
}
 