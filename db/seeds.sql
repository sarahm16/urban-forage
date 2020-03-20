-- Drops the urban_forage if it exists currently --
DROP DATABASE IF EXISTS urban_forage;
-- Creates the "urban_forage" database --
CREATE DATABASE urban_forage;

USE urban_forage;

-- Drops the restaurants if it exists currently --
DROP TABLE IF EXISTS restaurants;
-- Creates the "restaurants" database --
CREATE TABLE restaurants
(
  id int
  AUTO_INCREMENT NOT NULL,
  user varchar
  (30) NOT NULL,
  PRIMARY KEY
  (id)
);

  -- Drops the liked if it exists currently --
  DROP TABLE IF EXISTS liked;
  -- Creates the "liked" database --
  CREATE TABLE liked
  (
    id int
    AUTO_INCREMENT NOT NULL,
  user varchar
    (30) NOT NULL,
  restaurant_id int NOT NULL,
  date DATETIME NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY
    (id)
);