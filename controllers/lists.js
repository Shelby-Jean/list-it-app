const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

const getAllLists = (req, res) => {
  let sql = 'SELECT * FROM lists';
  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json(rows);
  })
};

const getListById = (req, res) => {
  let sql = 'SELECT * FROM lists WHERE list_id = ?';
  sql = mysql.format(sql, [req.params.list_id]);
  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json(rows);
  });
};

const createList = (req, res) => {
  let sql = 'INSERT INTO lists (list_name) VALUES (?);';
  sql = mysql.format(sql, [req.body.list_name]);

  pool.query(sql, (err, res) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({
      newId:SpeechRecognitionResultList.insertId,
      list_name: req.body.list_name
    });
  })
}

const deleteList = (req, res) => {
  let sql = 'DELETE FROM lists WHERE list_id = ?';
  sql = mysql.format(sql, [req.body.list_id]);

  pool.query(sql, (err, results) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({ message: `Deleted ${results.affectedRows} list(s)`});
  })
}

module.exports = { 
  getAllLists,
  getListById,
  createList,
  deleteList
};