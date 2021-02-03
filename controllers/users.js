const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

const getAllUsers = (req, res) => {
  let sql = 'SELECT * FROM users';
  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json(rows);
  })
};

const getUserByUsername = (req, res) => {
  let sql = 'SELECT * FROM users WHERE username = ?';
  sql = mysql.format(sql, [req.params.username]);
  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json(rows);
  })
};

// const createUser = (req, res) => {
//   let sql = 'INSERT INTO users (username, password) VALUES (?, ?);';
//   sql = mysql.format(sql, [req.body.username, req.body.password]);

//   pool.query(sql, (err, res) => {
//     if (err) {
//       return handleSQLError(res, err);
//     }
//     return res.json({
//       newId:req.body.user_id,
//       username: req.body.username,
//       password: req.body.password
//     });
//   })
// }

const deleteUserById = (req, res) => {
  let sql = 'DELETE FROM users WHERE user_id = ?';
  sql = mysql.format(sql, [req.body.user_id]);

  pool.query(sql, (err, results) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({ message: `Deleted ${results.affectedRows} user(s)`});
  })
}

module.exports = { 
  getAllUsers,
  getUserByUsername,
  // createUser,
  deleteUserById
};