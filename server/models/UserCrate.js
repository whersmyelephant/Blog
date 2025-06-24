const pool = require('../config/cratedb');

exports.findByEmail = async (email) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1', [email]
  );
  return result.rows[0]; // <-- objet {id, username, email, ...}
};

exports.create = async (user) => {
  await pool.query(
    `INSERT INTO users (id, username, email, password, role, adresse, date_naissance)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      user.id,
      user.username,
      user.email,
      user.password,
      user.role,
      user.adresse,
      user.date_naissance
    ]
  );
};

