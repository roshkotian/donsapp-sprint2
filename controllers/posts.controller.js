const Post = require("../models/posts.model");
//get all posts from mongodb
exports.getallposts = (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then(posts => res.json(posts))
    .catch(error => {
      console.log(error);
      res.status(400).send({ error: "Error while getting posts" });
    });
};
//save posts in mongodb
exports.save = (req, res) => {
  const body = req.body.body;
  const likecount = Number(req.body.likecount);
  const commentcount = Number(req.body.commentcount);
  const userid = req.body.userid;
  const imageid = req.body.imageid; 
  const status = true;
  const newpost = new Post({
    body,
    likecount,
    commentcount,
    userid,
    imageid,
    status
  });
  newpost
    .save()
    .then(post => {
      res.status(200).json( newpost );
    })
    .catch(err => {
      res.status(400).send({ err: "Error while adding posts" });
    });
};

// Getting posts of the logged in user
exports.getMyPosts = (req,res) => {
  Post.find({ userid : req.body.username })
    .sort({ createdAt: -1 })
    .then(posts => res.json(posts))
    .catch(error => {
      console.log(error);
      res.status(400).send({ error: "Error while getting personal posts" });
    });
}
