const mongoose = require('mongoose');


const URI = 'mongodb+srv://daniela20:7MB0u6YGUJdw31tW@cluster0.sl7kg.mongodb.net/mern-tasks?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));


module.exports = mongoose;