const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

getItemNameQuantityCategory = (req, res) => {
  let sql = `SELECT items.item_name, items.quantity, categories.category_name 
    FROM items INNER JOIN categories ON categories.category_id = items.category_id 
    ORDER BY item_name ASC`;
  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json(rows);
  })
};

// const getAllItems = (req, res) => {
//   let sql = 'SELECT * FROM items ORDER BY item_name ASC';
//   pool.query(sql, (err, rows) => {
//     if (err) {
//       return handleSQLError(res, err);
//     }
//     return res.json(rows);
//   })
// };

// const getItemById = (req, res) => {
//   let sql = 'SELECT * FROM items WHERE item_id = ?';
//   sql = mysql.format(sql, [req.params.item_id]);
//   pool.query(sql, (err, rows) => {
//     if (err) {
//       return handleSQLError(res, err);
//     }
//     return res.json(rows);
//   });
// };

const createItem = (req, res) => {
  let sql = 'INSERT INTO items (item_name, quantity) VALUES (?, ?);';
  sql = mysql.format(sql, [req.body.item_name, req.body.quantity]);

  pool.query(sql, (err, results) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({
      newId: results.insertId,
      item_name: req.body.item_name,
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
  getItemNameQuantityCategory,
  // getAllItems,
  // getItemById,
  createItem,
  deleteItem
};