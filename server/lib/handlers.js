const db = require('../db')

exports.api = {}

exports.home = (req, res) => res.render('home')
/*
exports.listVacations = async (req, res) => {
    const vacations = await db.getVacations({ available: true })
    const currency = req.session.currency || 'USD'
    const context = {
      currency: currency,
      vacations: vacations.map(vacation => {
        return {
          sku: vacation.sku,
          name: vacation.name,
          description: vacation.description,
          inSeason: vacation.inSeason,
          price: convertFromUSD(vacation.price, currency),
          qty: vacation.qty,
        }
      }),
    }

exports.notifyWhenInSeasonProcess = async (req, res) => {
    const { email, sku } = req.body
    await db.addVacationInSeasonListener(email, sku)
    return res.redirect(303, '/vacations')
  }
  
  exports.getVacationsApi = async (req, res) => {
    const vacations = await db.getVacations({ available: true })
    res.json(vacations)
  }

exports.getVacationBySkuApi = async (req, res) => {
    const vacation = await db.getVacationBySku(req.params.sku)
    res.json(vacation)
  }
  
  exports.addVacationInSeasonListenerApi = async (req, res) => {
    await db.addVacationInSeasonListener(req.params.sku, req.body.email)
    res.json({ message: 'success' })
  }
  
  exports.requestDeleteVacationApi = async (req, res) => {
    const { email, notes } = req.body
    res.status(500).json({ message: 'not yet implemented' })
  }
  */
  //add a user to the db
  exports.addUser = async (req, res) => {
    //console.log(req.body)
    //need to add input validation here
    const userObj = {
      name: req.body.name,
      email: req.body.email,
      responses: req.body.responses,
    }
    await db.addUser(userObj)
    console.log("User: " + req.body.name + " added.")
    res.json({ message: 'success'})
  }
  
  exports.notFound = (req, res) => res.render('404')
  
  // Express recognizes the error handler by way of its four
  // arguments, so we have to disable ESLint's no-unused-vars rule
  /* eslint-disable no-unused-vars */
  exports.serverError = (err, req, res, next) => res.render('500')
  /* eslint-enable no-unused-vars */