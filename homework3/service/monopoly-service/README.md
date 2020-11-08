# CS 262 Monopoly Webservice

This is the data service application for the [CS 262 sample Monopoly project](https://github.com/calvin-cs262-organization/monopoly-project) 
and it is deployed here:
          
<https://cs262-monopoly-service.herokuapp.com/>

It is based on the standard Heroku with Node.js tutorial.

<https://devcenter.heroku.com/articles/getting-started-with-nodejs>  

The database is relational with the schema specified in the `sql/` sub-directory,
 and is hosted on [ElephantSQL](https://www.elephantsql.com/). The database user
and password are stored as Heroku configuration variables rather than in this (public) repo.

We implement this sample as a separate repo to simplify Heroku integration, but 
for lab 9, you can simply submit your code under the standard `cs262/lab09` directory. 
For the team project, configure your Heroku app to auto-deploy the code from the
master/main branch of your
service repo; do this by following the instructions under the &ldquo;Deploy&rdquo; 
tab in your application in the Heroku dashboard.
 
 
What are the (active) URLs for your data service?

https://boiling-woodland-20833.herokuapp.com/
https://boiling-woodland-20833.herokuapp.com/players
https://boiling-woodland-20833.herokuapp.com/players/id
https://boiling-woodland-20833.herokuapp.com/player_game
https://boiling-woodland-20833.herokuapp.com/player_game/id
https://boiling-woodland-20833.herokuapp.com/playergames

Which of these endpoints implement actions that are idempotent? nullipotent?
The endpoints players have PUT, GET, POST, DELETE, of which PUT DELETE are idempotent and GET POST are nullipodent.

Is the service RESTful? If not, why not? If so, what key features make it RESTful.
The service is RESTful, because it has the following features: Already defined
It uses HTTP (send request, GET, PUT, POST, DELETE)
Transfers XML/JSON data
Uses URL structure (e.g. /players/1)
Are stateless (servers aren't keeping the status)

Is there any evidence in your implementation of an impedance mismatch?
Yes there is impedance mismatches because of differences between the database model and the programming language model.
