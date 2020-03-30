const Category = require('../models/category');

//Categories view
module.exports.getCategories = (req, res, next) => {
    const categories = Category.getAllCategory( categories => {
        res.render('categories',{pageTitle: "Categories Manager", categories})
    })
}

// New Category
module.exports.postAddCategory = (req, res, next) => {
    const {imageUrl, name} = req.body;
    let newCategory = new Category(imageUrl, name);
    
    newCategory.save( resCb => {
        if(resCb){
            console.log("OK Save")
        } else {
            console.log("Error")
        }
        res.redirect('/category')
    })
}


// New Category
module.exports.postDeleteCategory = (req, res, next) => {
    const {categoryId} = req.body;
    Category.deleteCategory( categoryId, resCb => {
        resCb ? console.log("Ok Delete") : console.log("Error");
        res.redirect('/category');
    })

}