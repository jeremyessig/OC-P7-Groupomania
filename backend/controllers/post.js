const Post = require('../models/Post');
const fs = require('fs');

/**
 * Renvoie tous les posts
 * Fonctionnel
 */
exports.getAllPosts = async (req, res, next) => {
    try {
        let allPosts = await Post.find();
        res.status(200).json(allPosts);

    } catch (error) {
        res.status(500).json(error);
    }
}

// Utilisateur créer un nouveau post
exports.createPost = async (req, res, next) => {
    console.log(req.body);

    /**
     * Question pour Pierre: Pourquoi est-ce que des fois il faut utiliser JSON.parse(req.body.quelqueChose) et pas
     * lorsque l'on requête directement req.body ???
     */
    const postObject = req.body;
    const newPost = new Post({
        ...postObject,
        commentId: [],
        dislikes: [],
        likes: [],
        imageUrl: [],
        //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


/**
 * Renvoie tous les posts d'un utilisateur. 
 * Utilisé dans le profil de l'utilisateur pour afficher tous ses posts
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.userAllPosts = async (req, res, next) => {
    try {
        console.log(req.params.id)
        const posts = await Post.find({ 'userId': req.params.id })
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
}