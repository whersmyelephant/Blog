const User = require('../models/UserCrate');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { username, email, password, adresse, date_naissance, num_securite_sociale } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({
    id: Date.now(), // ou une autre méthode d’id unique
    username,
    email,
    password: hash,
    role: 'user',
    adresse,
    date_naissance,
    num_securite_sociale
  });
  res.redirect('/users/login');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  if (!user) return res.status(400).send('Utilisateur inconnu');
  const valid = await bcrypt.compare(password, user[3]); // index du champ password
  if (!valid) return res.status(400).send('Mot de passe incorrect');
  req.session.user = { id: user[0], username: user[1], role: user[4] };
  res.redirect('/');
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};