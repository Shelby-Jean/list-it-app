const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

const getAllItems = (req, res) => {
  let sql = 'SELECT * FROM items ORDER BY item_name ASC';
  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json(rows);
  })
};

const getItemById = (req, res) => {
  let sql = 'SELECT * FROM items WHERE item_id = ?';
  sql = mysql.format(sql, [req.params.item_id]);
  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json(rows);
  });
};

const createItem = (req, res) => {
  let sql = 'INSERT INTO items (item_name, category, quantity) VALUES (?, ?, ?);';
  sql = mysql.format(sql, [req.body.item_name, req.body.category, req.body.quantity]);

  pool.query(sql, (err, res) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({
      newId:SpeechRecognitionResultList.insertId,
      item: req.body.item_name,
      category: req.body.category,
      quantity: req.body.quantity
    });
  })
}

const deleteItem = (req, res) => {
  let sql = 'DELETE FROM items WHERE item_name = ?';
  sql = mysql.format(sql, [req.body.item_name]);

  pool.query(sql, (err, results) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({ message: `Deleted ${results.affectedRows} item(s)`});
  })
}

module.exports = { 
  getAllItems,
  getItemById,
  createItem,
  deleteItem
};