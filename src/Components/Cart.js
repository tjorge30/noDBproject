
import React, { Component } from 'react';


export default class Cart extends Component {
    constructor (){
        super()
    }
      render() {
          let updateCart = this.props.art.map(el => {
          return <li>{el.title}</li>
          })
       return(
       <div className='artInCart'>
           <ul>
                {updateCart}
            </ul>
       </div>
       )}
    }