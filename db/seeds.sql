-- Drops the restaurants if it exists currently --
DROP TABLE IF EXISTS restaurants;
-- Creates the "restaurants" database --
CREATE TABLE restaurants
(
  id int
  AUTO_INCREMENT NOT NULL,
  name varchar
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
    (40) NOT NULL,
--  restaurantId int NOT NULL,       -- temporarily changing restaurantId to be the restaurant name
  restaurantId VARCHAR
    (50) NOT NULL,
  date DATETIME NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY
    (id)
);