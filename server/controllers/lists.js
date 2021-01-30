const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

const getList = (req, res) => {
  let sql = 'SELECT * FROM list';
  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json(rows);
  })
};

const createList = (req, res) => {
  let sql = 'INSERT INTO list (item_name, category, quantity) VALUES (?, ?, ?);';
  sql = mysql.format(sql, [req.body.item_name, req.body.category, req.body.quantity]);

  pool.query(sql, (err, res) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({
      newId:SpeechRecognitionResultList.insertId,
      item_name: req.body.item_name,
      category: req.body.category,
      quantity: req.body.quantity
    });
  })
}

const deleteList = (req, res) => {
  let sql = 'DELETE FROM list WHERE list_id = ?';
  sql = mysql.format(sql, [req.body.list_id]);

  pool.query(sql, (err, results) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({ message: `Deleted ${results.affectedRows} list(s)`});
  })
}

module.exports = { 
  getList,
  createList,
  deleteList
};