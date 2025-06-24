const pool = require('../config/cratedb');

exports.findByEmail = async (email) => {
  const result = await pool.execute(
    'SELECT * FROM users WHERE email = $1', [email]
  );
  return result.rows[0];
};

exports.create = async (user) => {
  await pool.query(
    `INSERT INTO users (id, username, email, password, role, adresse, date_naissance, num_securite_sociale)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      user.id,
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

