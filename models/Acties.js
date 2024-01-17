const mongoose = require('mongoose')

const ActiesSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Actiesmodel = mongoose.model("Acties", ActiesSchema)
module.exports = Actiesmodel