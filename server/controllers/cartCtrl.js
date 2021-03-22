const data = require('../../data.json');


module.exports = {
  
    changeQuantity: (req, res) => {
        // console.log('request' + req)
        data.forEach(el => {
            if( req === el.id) {
                let quantity = el.details.splice(0, 1, quantity - 1);
                confirm.log(el)
                console.log(res.status(200))
            } else {
                console.log(res.status(404))
            }
        }) 
      },


    deleteOutOfStock: (req, res) => {
        if (data.forEach(el => {
            el.details.quantity === 0
        })){
            delete el
        } 
    }
}