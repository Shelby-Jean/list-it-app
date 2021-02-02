DROP TABLE IF EXISTS users, items, sublists, lists;

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
    sublist_id INT,
    PRIMARY KEY (item_id),
    FOREIGN KEY (sublist_id)
    REFERENCES sublists (sublist_id)
);

CREATE TABLE sublists (
    sublist_id INT NOT NULL AUTO_INCREMENT,
    sublist_name VARCHAR(100),
    list_id INT,
    PRIMARY KEY (item_id),
    FOREIGN KEY (list_id)
    REFERENCES lists (list_id)
)

CREATE TABLE lists (
    list_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    PRIMARY KEY (list_id),
    FOREIGN KEY (user_id)
    REFERENCES users (user_id)
);

