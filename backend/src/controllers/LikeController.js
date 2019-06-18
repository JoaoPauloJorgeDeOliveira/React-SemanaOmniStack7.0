const Post = require('../models/Post')

module.exports = {

    async store(req, res) {
        const post = await Post.findById(req.params.id);
        post.likes += 1;

        await post.save();
        
        req.io.emit('like', post); // Emitindo informação para todos os usuários que estão conectados que houve uma nova operação.

        return res.json(post);
    },

};