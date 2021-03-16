import React, { Component } from 'react';
import ArtWorkDisplay from './Components/ArtworkDisplay';
import Cart from './Components/Cart'
import axios from 'axios';
import './App.css';


class App extends Component {
  // the constructor function invoking super and setting state
  constructor() {
    super()
    
    this.state = {
    art: [],
    cart: [],

    };

    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount(){
    axios.get('/api/display-art')
    .then(res => this.setState({art: res.data}))
    .catch(err => console.log(err));
  }

  clearCart() {
    //when button 'purchase' is pushed the cart array is set to empty array.
    this.setState({
        cart: []
    })
  }
  

  render() {
    
    return (
      <main>
        <div className='nav'>
          <h3>VISIONARY EXPECTATIONS STUDIO</h3>
        </div>
          <div className="bodyArea">
            <div className='displayArea'>
            <ArtWorkDisplay art = {this.state.art} cart = {this.state.cart}/>
            </div>
          
          <div className='cartArea'>
            <div className='cartTitle'>
            <h4>Your Cart</h4>
            </div>
            <div className='artInCart'>
              <Cart art = {this.state.art} cart = {this.state.cart}/>
            </div>
            <div className='buyArea'>
              <span>total $0.00</span>
              <div>
                <button onClick={this.clearCart}>PURCHASE</button>
              </div>
            </div>

          </div>
       </div>
        </main>
    )
  }
}
export default App;