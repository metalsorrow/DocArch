module.exports = class Document {
    constructor(id, date, categoryId, description, link){
        this.id = id;
        this.date = date;
        this.categoryId = categoryId;
        this.description = description;
        this.link = link;
    }

    save(){
        
    }
}