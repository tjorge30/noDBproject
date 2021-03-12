const express = require('express')
const app = express();
const port = 4000;

const data = require('../artWork');

//get is used for retrieving data.
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/', (req, res) => {
    
  });

  //post is used for adding new data.
  app.post('/', (req, res) => {
    
  });

  //put is used for updated data.
  app.put('/', (req, res) => {
    
  });

  //delete is used to remove data.
  app.delete('/', (req, res) => {
    
  });

app.listen(port, () => {
  console.log(`noDB app listening on port ${port}!`)
});

