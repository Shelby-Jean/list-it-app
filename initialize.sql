DROP TABLE IF EXISTS users, items, list;

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(45),
    password VARCHAR(100000),
    PRIMARY KEY (user_id)
);

CREATE TABLE items (
    item_id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(45),
    category VARCHAR(45),
    quantity INT,
    PRIMARY KEY (item_id)
);

CREATE TABLE list (
    list_id INT NOT NULL AUTO_INCREMENT,
    item_id INT NOT NULL,
    user_id INT NOT NULL,
    item_name VARCHAR(100),
    category VARCHAR(100),
    quantity INT,
    PRIMARY KEY (list_id),
    FOREIGN KEY (item_id)
    REFERENCES items (item_id),
    FOREIGN KEY (user_id)
    REFERENCES users (user_id)
);

