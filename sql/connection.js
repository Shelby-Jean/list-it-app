const mysql = require('mysql');

class Connection {
  constructor() {
    if (!this.pool){
      console.log('creating mysql connection...');

      const config = {
        connectionLimit: 100,
        host: process.env.DB_HOST,
        user: 'listit',
        password: process.env.DB_PASSWORD,
        database: 'listit'
      };

      this.pool = mysql.createPool(config);

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;