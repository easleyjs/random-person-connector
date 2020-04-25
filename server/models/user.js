const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  createDate: { type: Date, default: Date.now},
  responses: [{ type: String }],
  beenMatched: { type: Boolean, default: false}, // has this person been matched w/ someone
  notes: { type: String, default: null },
})

userSchema.set('toObject', { getters: true, virtuals: true })

const User = mongoose.model('User', userSchema)
module.exports = User