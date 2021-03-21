
import React, { Component } from 'react';
// import cartCtrl from '../../server/controllers/cartCtrl';


export default class Cart extends Component {
    constructor (){
        super();
        this.state = {
            cart: []
        };

    }
      render() {
          let updateCart = this.props.cartList.map(el => {
          return <li>{el}</li>
          })
       return(
       <div className='artInCart'>
           <ul>
                {updateCart}
            </ul>
       </div>
       )}
    }