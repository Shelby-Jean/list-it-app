const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

// for bcrypt
// const saltRounds = 10;

// const signup = (req, res) => {
//   const { username, password } = req.body;
//   let sql = 'INSERT INTO users (username, password) VALUES (?, ?)';

//   bcrypt.hash(password, saltRounds, function(err, hash) {
//     sql = mysql.format(sql, [ username, hash ]);

//     pool.query(sql, (err, res) => {
//       if (err) {
//         if (err.code === 'ER_DUP_ENTRY') {
//           return res.status(409).send('This username is already registered.');
//         }
//       }
//       return res.send('Sign-up successful');
//     })
//   })
// }

const saltRounds = 10

const signup = (req, res) => {
  const { username, password } = req.body;
  let sql = "INSERT INTO users (username, password) VALUES (?, ?);"

  bcrypt.hash(password, saltRounds, function(err, hash) {
    sql = mysql.format(sql, [username, hash]);
 
    pool.query(sql, (err, results) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).send('Username is taken')
        return handleSQLError(res, err)
      }
      // req.body.userId = result.insertId;
      return res.json({ msg: 'User created',
        user_id: results.insertId,
        username: username,
        password: hash
      })
    })
  })
}

const login = (req, res) => {
  const { username, password } = req.body;
  let sql = 'SELECT * FROM users WHERE username = ?';
  sql = mysql.format(sql, [ username ]);

  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    if (!rows.length) {
      return res.status(404).send('No matching users');
    }

    const hash = row[0].password;
    bcrypt.compare(password, hash)
      .then(result => {
        if (!result) {
          return res.status(400).send('Invalid Password');
        }
        const data = { ...rows[0] };
        data.password = 'REDACTED';

        const token = jwt.sign(data, 'secret');
        res.json({
          msg: 'Login successful',
          token,
          user_id: data.id,
          username: data.username
        })
      })
  })
}

module.exports = {
  signup,
  login
}