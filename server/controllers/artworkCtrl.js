
const data = require('../../data.json');


module.exports = {
    displayArt: (req, res)=> {
      console.log(data)
      res.status(200).send(data)
    },

    likePic: (req, res) => {
      let {id, comment } = req.body;
      if (data.forEach(el => {el.id === id})){
          data.comments = [... comment]
      }
     
    }
}

