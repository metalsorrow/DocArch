const Category = require('../models/category');

//Categories view
module.exports.getCategories = (req, res, next) => {
    res.render('newDoc',{pageTitle: "DocArch"})
}

// New Category
module.exports.postAddCategory = (req, res, next) => {
    res.render('index',{pateTitle: "DocArch"})
}