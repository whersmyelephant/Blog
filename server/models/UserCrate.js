const client = require('../config/cratedb');

exports.findByEmail = async (email) => {
  const result = await client.execute(
    'SELECT * FROM users WHERE email = ?', [email]
  );
  return result.rows[0];
};

exports.create = async (user) => {
  await client.execute(
    `INSERT INTO users (id, username, email, password, role, adresse, date_naissance, num_securite_sociale)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      user.id, // génère un id unique (ex: Date.now())
      user.username,
      user.email,
      user.password,
      user.role,
      user.adresse,
      user.date_naissance,
      user.num_securite_sociale
    ]
  );
};
