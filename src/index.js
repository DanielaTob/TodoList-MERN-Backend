const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

// Settings - Para que me funcione en cualquier servidor de la nube

app.set('port', process.env.PORT || 4000);

//Middlewares - Funciones que se ejecutan antes de que lleguen a nuestras rutas

app. use(morgan('dev'));
app.use(express.json());


// Routes

app.use('/api/tasks',require('./routes/task.routes'));

//Static files 


app.use(express.static(path.join(__dirname, 'public')));

//Starting the server 

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});