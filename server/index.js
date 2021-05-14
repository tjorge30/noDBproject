const express = require('express');
const { displayArt,likePic } = require("./controllers/artworkCtrl");
const { getComments, postComment } = require('./controllers/commentsCtrl');
const { deleteOutOfStock, changeQuantity } = require('./controllers/cartCtrl');

const app = express();
// const port = 4000;

app.use(express.json());

//artworkCtrl endpoints
app.get('/api/display-art', displayArt);
app.post('/api/display-title', likePic);

//commentsCtrl endpoints
app.get('/api/comments', getComments);
app.post('/api/comments', postComment);

//cartCtrl endpoints
app.delete('/api/display-title/:id', deleteOutOfStock);
app.put('/api/display-title/:id', changeQuantity);


app.listen(4000, () => {console.log(`Listening on port 4000`)});