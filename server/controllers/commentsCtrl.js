const comments = [
    {
        id: 0,
        comment: "Beautiful paintings thanx for sharing! - Tamra"
    },
    {
        id: 1,
        comment: "Stunning! - Frank"
    }
];

let id = comments.length;

module.exports = {
    getComments: (req, res) =>{
        console.log(comments)
        res.status(200).send(comments)
    },
    postComment: (req, res) =>{
        console.log(req.body);
        var newComment = {
            id: comments.length + 1,
            comment: req.body
        };
        comments.push(newComment);
        res.sendStatus(200)
    }
}