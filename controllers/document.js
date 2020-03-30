const Document = require('../models/document');
const Category = require('../models/category');


module.exports.getDocuments = (req, res, next) => {
    Document.getAllDocumentsToView( documents => {
        res.render('index',{ documents, pageTitle: 'DocArch' })
    })
}


module.exports.getNewDocument = (req,res,next) => {
    Category.getAllCategory( categories => {
        res.render('addDoc', { pageTitle: 'Add new Doc', categories })
    })
}

module.exports.postNewDocument = (req,res,next) => {
    const {name, link, categoryId, description} = req.body;
    const newDocument = new Document(name, categoryId, description, link);
    newDocument.save( resCb => {
        if(resCb){
            console.log("Ok save")
        } else {
            console.log("error")
        }
        res.redirect('/');
    })
}




