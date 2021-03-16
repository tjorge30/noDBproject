
import React, { Component } from 'react';
import Nav from './Nav';




class ArtWorkDisplay extends Component {
    constructor() {
        super();
        
        this.state = {
            index: 0,
        };

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);

        this.addToCart= this.addToCart.bind(this);
         
    }

    increase(){
        if(this.state.index < this.props.art.length - 1){
            this.setState({ index: this.state.index + 1 })
        }
    }
    
    decrease(){
        if(this.state.index > 0){
            this.setState({ index: this.state.index - 1 })
        }
    }

    addToCart(title) {
        //when button 'add to cart' is clicked add title of current art to cart array.
        this.setState({
            cart: [...this.props.cart, title]
        })
      }
        
    
    

    render() {
        console.log("props", this.props)
        console.log(this.props.art)
        let selectedArtwork = this.props.art.filter((el, i) => i === this.state.index ).map((el, i)=> {
            return (
                <div key = {i}>
                    <img src = {el.img } alt = 'art' className ='artwork'/>
                    <h6>{el.title} ${el.price}</h6>
                    <h6>{el.details.description}</h6>
                    
                </div>
            
            )
        })
        // console.log(selectedArtwork)
        return (
            <div > 
                {selectedArtwork}
                <button onClick={() => console.log(selectedArtwork)}>add to cart</button>
                <div className="navSection">
                <Nav increase={this.increase} decrease={this.decrease} />
                </div>
            </div>
        )
 
    }   
    
}

export default ArtWorkDisplay;
 