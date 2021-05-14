
import React, { Component } from 'react';
// import cartCtrl from '../../server/controllers/cartCtrl';


export default class Cart extends Component {
    constructor (props){
        super(props);
        this.state = {
            
        };
    }
        //when button 'purchase' is pushed the cart array is set to empty array.     
    //   clearCart = () => {
    //     this.setState({
    //         cart: [],
    //         total: 0
    //     })
    //   }

   
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
        )
    }
}