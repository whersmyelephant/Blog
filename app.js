require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const path = require('path');

const connectDB = require('./server/config/db');
const app = express();
const PORT = process.env.PORT || 5000;

// 1. Connecte la base de données MongoDB (pour les posts)
connectDB();

// 2. Middlewares globaux
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// 3. Session (doit être AVANT les routes)
app.use(session({
  secret: 'un_secret_vulnérable',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// 4. Rendre l'utilisateur accessible dans toutes les vues
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

// 5. Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 6. Routes utilisateurs (doit être AVANT les autres routes si tu veux que /users/register etc. soient accessibles)
const userRoutes = require('./server/routes/user');
app.use('/users', userRoutes);

// 7. Routes principales (posts, accueil, etc)
app.use('/', require('./server/routes/main'));

// 8. Lancer le serveur
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
