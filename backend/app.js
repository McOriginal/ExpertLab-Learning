
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const app = express();
const adminRoute = require('./routes/coursRouter');



app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, './../public')));

app.use(cors());

app.use('/newcours', adminRoute );

app.use('/cours', adminRoute);


app.use('/', adminRoute);

mongoose.connect('mongodb+srv://originalmc223:KrDHs4nba2vuzVRQ@cluster0.htl3g.mongodb.net/expertlablearning')
.then((connexion) =>{
    console.log("Connexion reussi au : " + connexion );
    app.listen(5000);

})
.catch((error) =>{
    console.log(error);
})
