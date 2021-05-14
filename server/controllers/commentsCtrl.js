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
        const comment = req.body;
        console.log(req.body);
        let newComment = {
            id,
            comment
        };

        comments.push(newComment);
        res.sendStatus(200)
    }
}