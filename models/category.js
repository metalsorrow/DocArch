const path = require('path');
const fs = require('fs');

const fileRuteJson = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'category.json'
)

const getCategoryJson = (cb) => {
    fs.readFile(fileRuteJson,(err, data) => {
        if(err){
            cb([])
        } else {
            cb(JSON.parse(data));
        }
    })
}



module.exports = class Category{
    constructor(id, urlImg, name){
        this.id = id;
        this.urlImg = urlImg;
        this.name = name;
    }

    save(){
        getCategoryJson( categories => {
            const newCategories = [...categories];
            newCategories.push(this);

            fs.writeFile(fileRuteJson,JSON.stringify(newCategories), (err, res) => {
                if(err){
                    console.log(err, "Error")
                } else {
                    console.log(res, "Save complete")
                }
            })
        })
    }

    static getAllCategory( cb ){
        getCategoryJson( cb )
    }

    static deleteCategory(id){

    } 
}