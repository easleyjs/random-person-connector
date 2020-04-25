# random-person-connector
A MERN stack learning exercise for me. Designed to intake users, add them to a (Mongo) DB, then randomly put two users in contact with each other.

TO-DO:

Server
- * Chop down app.js
- * (/newuser) POST route in app.js
- * (need to make sure this loads) create dev credentials
- * modify model to User (applicable username, questionaire fields, etc)
- * (need to make sure handler takes in appropriate fields though) modify db.js to User object 
- * (should be good.. will need to test w/ Postman, responses as array, etc )       modify handlers.. create a route to test user/object creation
- * Successful test w/ Postman
- Check to see if user/email already exists, if so, throw error
- Add input validation on user create/throw 500 error if bad.

- random user pair selection
- email functionality
- Session/Cookie/Redis stuff
- CSRF/CORS/Security

Client
- Basic intake form & route
- Form field validation
