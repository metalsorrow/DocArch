const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//Routes Import
const documentRoutes = require('./routes/document')
const categoryRoutes = require('./routes/category')

//Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'));

//Set Variables
app.set('port',process.env.PORT || 3000)

//Set Engine
app.set('view engine','ejs');
app.set('views','views');

//Routes
app.use(categoryRoutes);
app.use(documentRoutes);



//Lunch app
app.listen(app.get('port'), () => {
    console.log("Server On ",app.get('port'))
})