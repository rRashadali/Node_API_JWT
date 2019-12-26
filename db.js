<<<<<<< HEAD
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb', { useMongoClient: true });
=======
const config = require('./config')
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(config.db, { useNewUrlParser: true })
>>>>>>> 0d34351603c11e6cce12d18d1dcf23f957376cf5
