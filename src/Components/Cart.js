
import React, { Component } from 'react';
// import cartCtrl from '../../server/controllers/cartCtrl';


export default class Cart extends Component {
    constructor (props){
        super(props);
        this.state = {
            
        };
    }

   
    render() {
        let updateCart = this.props.cartList.map((el, i) => {
                return <li key={i} >{el}</li>
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