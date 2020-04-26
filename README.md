# random-person-connector
A MERN stack learning exercise for me. Designed to intake users, add them to a (Mongo) DB, then randomly put two users in contact with each other.

Current features:
- /newuser POST route creates a new user object in the DB.


TO-DO:

Server
- Remove the last of the Meadowlark example code
- Check to see if user/email already exists, if so, throw error
- Add input validation on user create/throw 500 error if bad.

- random user pair selection
- email functionality
- Session/Cookie/Redis stuff
- CSRF/CORS/Security

Client
- Basic intake form & route
- Form field validation
