DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name varchar (15) NOT NULL,
  devoured BOOLEAN DEFAULT 0,
  PRIMARY KEY (id)
);