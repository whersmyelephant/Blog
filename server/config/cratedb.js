const { Client } = require('crate');

const client = new Client({
  host: 'https://lugblog.eks1.eu-west-1.aws.cratedb.net:4200' // adapte l’URL à ton cluster
});

module.exports = client;