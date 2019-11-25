const express = require('express');
const morgan = require('morgan');
const app = express();

//Config service
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
//Middelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes

app.use(require('./router/Index'));
app.use('/api/movies', require('./router/Routes'));
app.use('/api/webservice', require('./router/WebService'));

// Start service
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
