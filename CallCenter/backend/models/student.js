const db = require('.../util/database');

module.exports = class Student {
    constructor(id, studentName, videoLink, about, imageLink) {
        this.id = id;
        this.studentName = studentName;
        this.videoLink = videoLink;
        this.about = about;
        this.imageLink = imageLink;
    }
    static fetchAll(){
        return db.execute('SELECT * FROM Student')
    }
}