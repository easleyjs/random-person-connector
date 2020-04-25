const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
//const multiparty = require('multiparty')
//const cookieParser = require('cookie-parser')
//const expressSession = require('express-session')
//const RedisStore = require('connect-redis')(expressSession)
//const cors = require('cors')

const handlers = require('./lib/handlers')
//const weatherMiddlware = require('./lib/middleware/weather')

//is this file, and the db really used here?
const credentials = require('./credentials')

require('./db')

const app = express()

//app.use('/api', cors())

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
  helpers: {
    section: function(name, options) {
      if(!this._sections) this._sections = {}
      this._sections[name] = options.fn(this)
      return null
    },
  },
}))
app.set('view engine', 'handlebars')
// Enables view caching for Handlebars to speed up templates
app.set('view cache', true)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
/*
app.use(cookieParser(credentials.cookieSecret))
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: credentials.cookieSecret,
  store: new RedisStore({
    url: credentials.redis[app.get('env')].url,
  }),
}))
*/
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

//app.use(weatherMiddleware)

app.get('/', handlers.home)


// utility routes
//app.get('/set-currency/:currency', handlers.setCurrency)

const db = require('./db')

// api
//The following two lines are for pulling a JSON obj..
/*
const vhost = require('vhost')
app.get('/', vhost('api.*', handlers.getVacationsApi))
*/

app.post('/adduser', handlers.addUser)

app.use(handlers.notFound)
app.use(handlers.serverError)

if(require.main === module) {
  app.listen(port, () => {
    console.log( `Express started on http://localhost:${port}` +
      '; press Ctrl-C to terminate.' )
  })
} else {
  module.exports = app
}