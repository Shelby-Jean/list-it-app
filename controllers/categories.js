const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

const getAllCategories = (req, res) => {
  let sql = 'SELECT * FROM categories ORDER BY category_name ASC';
  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json(rows);
  })
};

const createCategory = (req, res) => {
  let sql = 'INSERT INTO categories (category_name) VALUES (?);';
  sql = mysql.format(sql, [req.body.category_name]);

  pool.query(sql, (err, results) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({
      newId: results.insertId,
      category_name: req.body.category_name,
    });
  })
}

const deleteCategory = (req, res) => {
  let sql = 'DELETE FROM categories WHERE category_name = ?';
  sql = mysql.format(sql, [req.body.category_name]);

  pool.query(sql, (err, results) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json({ message: `Deleted ${results.affectedRows} item(s)`});
  })
}

module.exports = { 
  getAllCategories,
  createCategory,
  deleteCategory
};