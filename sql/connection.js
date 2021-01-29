const mysql = require('mysql');

class Connection {
  constructor() {
    if (!this.pool){
      console.log('creating mysql connection...');

      const config = {
        connectionLimit: 100,
        host: '35.196.197.142',
        user: 'root',
        password: '@ppl3$',
        database: 'list-it-app'
      };

      if (process.env.NODE_END === 'production' && process.env.CLOUD_INSTANCE) {
        console.log(`connect socket: ${process.env.CLOUD_INSTANCE}`)
        config.socketPath = `/cloudsql/${process.env.CLOUD_INSTANCE}`
      };

      this.pool = mysql.createPool(config);

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;