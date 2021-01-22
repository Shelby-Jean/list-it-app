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

const getUserByEmail = (req, res) => {
  let sql = 'SELECT * FROM users WHERE email = ?';
  sql = mysql.format(sql, [req.params.email]);
  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json(rows);
  })
};

const createUser = (req, res) => {
  let sql = 'INSERT INTO users (first_name, last_name, email) VALUES (?, ?, ?);';
  sql = mysql.format(sql, [req.body.first_name, req.body.last_name, req.body.email]);

  pool.query(sql, (err, res) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({
      newId:SpeechRecognitionResultList.insertId,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    });
  })
}

const deleteUserByEmail = (req, res) => {
  let sql = 'DELETE FROM users WHERE email = ?';
  sql = mysql.format(sql, [req.body.first_name]);

  pool.query(sql, (err, results) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({ message: `Deleted ${results.affectedRows} user(s)`});
  })
}

module.exports = { 
  getAllUsers,
  getUserByEmail,
  createUser,
  deleteUserByEmail
};