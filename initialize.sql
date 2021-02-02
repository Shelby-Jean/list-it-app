DROP TABLE IF EXISTS users, items, categories, item_category, lists;

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(45),
    password VARCHAR(100000),
    PRIMARY KEY (user_id)
);

CREATE TABLE items (
    item_id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(45),
    quantity INT,
    PRIMARY KEY (item_id)
);

CREATE TABLE categories (
    category_id INT NOT NULL AUTO_INCREMENT,
    catgeory_name VARCHAR(100),
    PRIMARY KEY (category_id),
)

CREATE TABLE item_category (
    category_id INT,
    item_id INT,
    PRIMARY KEY (category_id),
    PRIMARY KEY (item_id)
)

CREATE TABLE lists (
    list_id INT NOT NULL AUTO_INCREMENT,
    list_name VARCHAR(100),
    PRIMARY KEY (list_id)
);

