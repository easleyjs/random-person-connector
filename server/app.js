const expressHandlebars = require('express-handlebars')
app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main',
})
app.set('view engine', 'handlebars')


// Enables view caching for Handlebars to speed up templates
app.set('view cache', true)
