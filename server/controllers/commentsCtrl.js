
const comments = require('../../comments.json')


module.exports = {
    getComments: (req, res) =>{
        res.status(200).send(comments)
    },
    postComment: (req, res) =>{
        var newComment = {
            id: comments.length + 1,
            comment: req.body.comment
        };
    
        comments.push(newComment);
        res.status(200).send(comments)
    }
}