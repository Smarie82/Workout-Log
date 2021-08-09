require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');  

let logbook = require('./controllers/logcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();

app.use(express.json());

app.use('/logbook', logbook);
app.use('/user', user);


app.listen(3456, function() {
    console.log("App is listening on port 3456");
});