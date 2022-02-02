const mongoose = require('mongoose')

const planetsSchema = new mongoose.Schema({
    keplerName: {
        type: String,
        required: true
    }
})

// Connects launchesSchema with the "planets" collection
module.exports = mongoose.model('Planet', planetsSchema)