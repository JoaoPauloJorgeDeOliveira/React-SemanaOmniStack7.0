const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const Post = require('../models/Post');

module.exports = {

  async index(req, res) {
    const posts = await Post.find().sort('-createdAt'); // - significa ordem decrescente.

    return res.json(posts);
  },

  async store(req, res) {
    const {
      author, place, description, hashtags,
    } = req.body;
    const { filename: image } = req.file;

    // Separating name from extension
    const [name, ext] = image.split('.');
    const fileName = `${name}.jpg`;

    // Resizing image
    await sharp(req.file.path)
      .resize(500) // To 500 pixels (height ou width)
      .jpeg({ quality: 70 }) // jpeg format with 70% quality
      .toFile(
        path.resolve(req.file.destination, 'resized', fileName), // Path + File name + extension
      );

    fs.unlinkSync(req.file.path); // Apagando image original.

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: fileName, // Apenas nome e não arquivo.
    });

    req.io.emit('post', post); // Emitindo informação para todos os usuários que estão conectados que houve uma nova operação.

    return res.json(post);
  },

};
