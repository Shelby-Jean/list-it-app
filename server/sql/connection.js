const mysql = require('mysql');

class Connection {
  constructor() {
    if (!this.pool){
      console.log('creating mysql connection...');

      const config = {
        connectionLimit: 100,
        host: 'den1.mysql4.gear.host',
        user: 'listit',
        password: 'Eq1pq-8bjM?S',
        database: 'listit'
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