const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const route = require('./routes');

const path = require('path')


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const PORT = process.env.PORT || 3000;
const dbURI = 'mongodb+srv://chaudd:chau1234@aidetectanomaly.vdi9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(PORT))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/cameras', requireAuth, (req, res) => res.render('cameras'));
app.use(route);
// route(app);
// app.use(authRoutes);
// route(app);
// app.use(authRoutes);
// route(app);
// app.use(authRoutes);
// route(app);
// app.use(authRoutes);
