const User = require('../models/UserCrate');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { username, email, password, adresse, date_naissance } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({
    id: Date.now(), // ou une autre méthode d’id unique
    username,
    email,
    password: hash,
    role: 'user',
    adresse,
    date_naissance
  });
  res.redirect('/users/login');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  if (!user) return res.status(400).send('Utilisateur inconnu');
  const valid = await bcrypt.compare(password, user.password); // <-- accès objet
  if (!valid) return res.status(400).send('Mot de passe incorrect');
  req.session.user = { id: user.id, username: user.username, role: user.role }; // <-- accès objet
  res.redirect('/');
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
