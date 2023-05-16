const server = require('./sw.webpack.config.js');
const client = require('./prod.client.webpack.config.js');

module.exports = [server, client];
