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

  -- Drops the Likes if it exists currently --
  DROP TABLE IF EXISTS Likes;
  -- Creates the "Likes" database --
  CREATE TABLE Likes
  (
    id int
    AUTO_INCREMENT NOT NULL,
  user varchar(40) NOT NULL,
--  restaurantId int NOT NULL,       -- temporarily changing restaurantId to be the restaurant name
  restaurantId VARCHAR(50) NOT NULL,
  url VARCHAR(MAX),
  imageURL VARCHAR(MAX),
  latitude FLOAT,
  longitude FLOAT,

  date DATETIME NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY(id)
);

INSERT INTO Likes(user,restaurantId,imageURL,latitude,longitude) VALUES 
("Austin@Cox.com","Dick's","a.com",12.3456,12.3456),
("Josh@Lo.com","Triple D","j.com",1.2222,1.2222),
("Sarah@Carter.com","Panda Express","s.com",-12.3456,-12.3456),
("Caleb@Brochu.com","Taco Bell","c.com",11.5555,11.2222);