// Imports:
const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

// Controllers:
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

// Objects:
const routes = new express.Router();
const upload = multer(uploadConfig); // Multer permite que express entenda corpo que é enviado no formato multipart form data (arquivos físicos e campos em texto).


routes.get('/posts', PostController.index); // Rota para postar fotos.
routes.post('/posts', upload.single('image'), PostController.store); // Rota para postar fotos.

// Rota para realizar likes:
routes.post('/posts/:id/like', LikeController.store);


module.exports = routes; 