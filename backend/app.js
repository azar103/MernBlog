const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
mongoose.connect('mongodb+srv://will:willpassword@cluster0-ekpaj.mongodb.net/test?retryWrites=true&w=majority',
         {
           useNewUrlParser: true,
           useUnifiedTopology : true
         })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !')) 
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/posts', postRouter);
app.use('/api/auth', userRouter);

module.exports = app



