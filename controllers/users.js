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

const createUser = (req, res) => {
  let sql = 'INSERT INTO users (username) VALUES (?);';
  sql = mysql.format(sql, [req.body.username]);

  pool.query(sql, (err, res) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({
      newId:SpeechRecognitionResultList.insertId,
      username: req.body.username
    });
  })
}

const deleteUserByUsername = (req, res) => {
  let sql = 'DELETE FROM users WHERE username = ?';
  sql = mysql.format(sql, [req.body.username]);

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
  createUser,
  deleteUserByUsername
};