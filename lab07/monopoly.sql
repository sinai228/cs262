﻿--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
-- @edited/updated by Sinai Park (sp46)
-- @fall 2020

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS PlayerProperty;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY,
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY,
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID),
	playerID integer REFERENCES Player(ID),
	score integer,
	cash integer
	);

CREATE TABLE PlayerProperty(
	gameID integer REFERENCES Game(ID),
	playerID integer REFERENCES Player(ID) NOT NULL,
	houses integer,
	hotels integer
);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON PlayerProperty TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

--Initial game builds
--GAME1
INSERT INTO PlayerGame VALUES (1, 1, 500, 750.00);
INSERT INTO PlayerGame VALUES (1, 2, 500, 500.00);
INSERT INTO PlayerGame VALUES (1, 3, 500, 2850.00);
--GAME2
INSERT INTO PlayerGame VALUES (2, 1, 750, 1750.00);
INSERT INTO PlayerGame VALUES (2, 2, 500, 500.00);
INSERT INTO PlayerGame VALUES (2, 3, 500, 1000.00);
--GAME3
INSERT INTO PlayerGame VALUES (3, 1, 500, 500.00);
INSERT INTO PlayerGame VALUES (3, 2, 500, 6000.00);
INSERT INTO PlayerGame VALUES (3, 3, 500, 6000.00);

--Player Property relationships
--GAME 1
INSERT INTO PlayerProperty(gameID, playerID, houses) VALUES (1, 1, 2);
INSERT INTO PlayerProperty(gameID, playerID, hotels) VALUES (1, 2, 1);
INSERT INTO PlayerProperty(gameID, playerID, houses) VALUES (1, 3, 5);
INSERT INTO PlayerProperty(gameID, playerID, hotels) VALUES (1, 1, 3);
INSERT INTO PlayerProperty(gameID, playerID, houses) VALUES (2, 2, 1);
INSERT INTO PlayerProperty(gameID, playerID, hotels) VALUES (2, 3, 2);
INSERT INTO PlayerProperty(gameID, playerID) VALUES (3, 1 );
INSERT INTO PlayerProperty(gameID, playerID, houses, hotels) VALUES (3, 2, 3, 1);
INSERT INTO PlayerProperty(gameID, playerID, hotels) VALUES (3, 3, 1);

--use some accessors to test the Insertions
SELECT COUNT(*) FROM Property; --should return 26 from the given table
SELECT * FROM PlayerProperty; -- select all from player property