const path = require('path');
const fs = require('fs');
const Category = require('./category');

const fileName = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'document.json'
);

const getDocumentJson = (cb) => {
    fs.readFile(fileName, (err, data) => {
        if(err){
            cb( [] )
        } else {
            cb( JSON.parse(data) )
        }
    })
}
const getDate = () => {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}


module.exports = class Document {
    constructor( name , categoryId, description, link){
        this.id = Math.random();
        this.date = getDate();
        this.categoryId = categoryId;   
        this.description = description;
        this.link = link;
        this.name = name;
    }

    save(cb){
        getDocumentJson( documents => {
            const newDocuments = [...documents];
            newDocuments.push(this);

            fs.writeFile(fileName, JSON.stringify(newDocuments), ( err, res ) => {
                if(err){
                    cb(false)
                }else{
                    cb(true)
                }
            })
        })
    }

    static getAllDocuments( cb ){
        getDocumentJson( cb )
    }

    static getAllDocumentsToView( cb ){
        const documentPopulated = [];
        getDocumentJson( documents => {
            if(documents.length > 0){
                documents.forEach( document => {
                    Category.findCategoryById(document.categoryId, category => {
                        if(category){
                            const documentFormat = {
                                id: document.id,
                                name: document.name,
                                date: document.date,
                                categoryId: document.categoryId,
                                description: document.description,
                                link: document.link,
                                urlImg: category.urlImg,
                                nameCategory: category.name
                            }
                            documentPopulated.push(documentFormat);
                            // TODO: Optimizate this section, too many validation for callback
                            if(documentPopulated.length === documents.length){
                                cb(documentPopulated)
                            }
                        }
                    })
                })
            } else {
                cb(documentPopulated)
            }

        });
    }

    static deleteDocument( id , cb ){
        getDocumentJson( documents => {
            const newDocuemnts = documents.filter( doc => doc.id != id);

            fs.writeFile(fileName, newDocuemnts, (err, res)=> {
                if(err){
                    cb(false)
                } else {
                    cb(true)
                }
            })
        })
    }
}