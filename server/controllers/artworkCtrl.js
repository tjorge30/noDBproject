
const data = require('../../data.json');


module.exports = {
    displayArt: (req, res)=> {
      console.log(data)
      res.status(200).send(data)
    }
    

}

