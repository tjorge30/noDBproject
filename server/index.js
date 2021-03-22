const express = require('express');
const artworkCtrl = require('./controllers/artworkCtrl.js');
const cartCtrl = require('./controllers/cartCtrl');

const app = express();
const port = 4000;


app.use(express.json());

//artworkCtrl endpoint
app.get('/api/display-art', artworkCtrl.displayArt);

//cartCtrl endpoint
app.delete('/api/display-title/:id', cartCtrl.deleteOutOfStock);
app.put('/api/display-title/:id', cartCtrl.changeQuantity);
// app.post('/api/display-title', cartCtrl.addToCart);

app.listen(port, () => {
  console.log(`noDB app listening on port ${port}!`)
});