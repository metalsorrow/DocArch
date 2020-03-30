const path = require('path');
const fs = require('fs');

const fileName = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'category.json'
)

const getCategoryJson = (cb) => {
    fs.readFile(fileName,(err, data) => {
        if(err){
            cb([])
        } else {
            cb(JSON.parse(data));
        }
    })
}



module.exports = class Category{
    constructor(urlImg, name){
        this.id = Math.random();
        this.urlImg = urlImg;
        this.name = name;
    }

    save( cb ){
        getCategoryJson( categories => {
            const newCategories = [...categories];
            newCategories.push(this);

            fs.writeFile(fileName,JSON.stringify(newCategories), (err, res) => {
                if(err){
                    cb(false)
                } else {
                    cb(true)
                }
            })
        })
    }

    static findCategoryById( id , cb ){
        getCategoryJson( categories => {
            const category = categories.find( cat => cat.id == id);
            cb(category);
        })
    }

    static getAllCategory( cb ){
        getCategoryJson( cb )
    }

    static deleteCategory(id, cb){
        getCategoryJson( categories =>{
            const newCategories = categories.filter(cat => cat.id != id);

            fs.writeFile(fileName, JSON.stringify(newCategories), (err, res) => {
                if(err){
                    cb(false)
                }else {
                    cb(true)
                }
            } )
        })
    } 
}