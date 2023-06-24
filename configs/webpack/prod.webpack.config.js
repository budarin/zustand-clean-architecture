const server = require('./sw.prod.webpack.config.js');
const client = require('./client.prod.webpack.config.js');

module.exports = [server, client];
