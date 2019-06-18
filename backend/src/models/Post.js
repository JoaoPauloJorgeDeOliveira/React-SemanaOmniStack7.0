// Abstração de uma tabela do banco de dados.

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
    author:         String,
    place:          String,
    description:    String,
    hashtags:       String,
    image:          String,
    likes: {
            type:       Number,
            default:    0,
            }

    },
    {
        timestamps: true, // Já cria campos de data.
    },
    )

 
    module.exports = mongoose.model('Post', PostSchema);