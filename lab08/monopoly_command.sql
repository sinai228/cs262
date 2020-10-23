--
-- This SQL script stores all of my queries
--
-- @author kvlinden
-- @version Summer, 2015
-- @edited/updated by Sinai Park (sp46)
-- @fall 2020

--Exercise 8.1--

--a. Retrieve a list of all the games, ordered by date

SELECT *
FROM Game
ORDER BY time DESC;

--b. Retrieve all the games that occurred in the past week

SELECT *
FROM Game
WHERE  DATE_PART('day', CURRENT_TIMESTAMP - Game.time) < 7
AND DATE_PART('day', CURRENT_TIMESTAMP - Game.time) >= 0;

--c. Retrieve a list of players who have (non-NULL) names.

SELECT *
FROM PlayerGame
WHERE name IS NOT NULL;

--d. Retrieve a list of IDs for players who have some game score larger than 2000.

SELECT PlayerID
FROM PlayerGame
WHERE score > 2000;

--e. Retrieve a list of players who have GMail accounts.

SELECT *
FROM Player
WHERE emailAddress LIKE '%gmail%';


--Exercise 8.2

--a. Retrieve all “The King”’s game scores in decreasing order

SELECT score
FROM PlayerGame, Player
WHERE name = 'The King'
AND Player.ID = PlayerGame.playerID
ORDER BY score DESC;

--b. Retrieve the name of the winner of the game played on 2006-06-28 13:20:00.

SELECT Player.name
FROM Player, PlayerGame, Game
WHERE Game.time = '2006-06-28 13:20:00'
AND Game.ID = PlayerGame.gameID
AND Player.ID = PlayerGame.playerID;

--c. So what does that P1.ID < P2.ID clause do in the last example query

-- 		The query returns the name of the player with the
--    the higher player ID value.

--d. The query that joined the Player table to itself seems rather contrived.
--   Can you think of a realistic situation in which you’d want to join a table to itself?

--		A realistic situation would be when a player wants to analyze and compare the data of
--    the scores and patterns of winning and losing.