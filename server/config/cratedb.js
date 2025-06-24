const { Pool } = require('pg');

const pool = new Pool({
  host: 'lugblog.eks1.eu-west-1.aws.cratedb.net',    // ou l'adresse de ton cluster
  port: 5432,                                       // port par défaut de CrateDB compatible PG
  user: 'blog_adm',                                   // ou ton utilisateur
  password: 'dsfGEZD1R2!',           // mot de passe si défini
  database: 'crate'    ,                          // base par défaut de CrateDB
  ssl: { rejectUnauthorized: false }
});

// TEST DE CONNEXION
pool.query('SELECT 1', (err, res) => {
  if (err) {
    console.error('Connexion CrateDB échouée :', err.message);
  } else {
    console.log('Connexion CrateDB réussie !');
  }
});

//const client = new Client({
//  host: 'https://lugblog.eks1.eu-west-1.aws.cratedb.net:4200' // adapte l’URL à ton cluster
//});

module.exports = pool;