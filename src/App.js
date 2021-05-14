import React, { Component } from 'react';
import ArtWorkDisplay from './Components/ArtWorkDisplay';
import axios from 'axios';
import './App.css';


export default class App extends Component {
  // the constructor function invoking super and setting state
  constructor() {
    super()
    this.state = {
    art: [],
    };
  }

  componentDidMount(){
    axios.get('/api/display-art')
    .then(res => this.setState({art: res.data}))
    .catch(err => console.log(err));
  }


  render() {
    
    return (
      <main>

        <div className='nav'>
          <h3>VISIONARY EXPECTATIONS STUDIO</h3>
        </div>

          <div >
            <ArtWorkDisplay art = {this.state.art}/>
           
          
          {/* <div className='cartArea'>
            <div className='cartTitle'>
            <h4>Your Cart</h4>
            </div>
            <div className='artInCart'>
              <Cart art = {this.state.art} />
            </div>
            <div className='buyArea'>
              <span>total $0.00</span>
              <div>
                <button onClick={this.clearCart}>PURCHASE</button>
              </div>
            </div> */}
          </div>

        </main>
    )
  }
}
