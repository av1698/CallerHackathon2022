var mysql = require('mysql');

var con = mysql.createConnection( {
    host: "127.0.0.1",
    port: "3306",
    user: 'domupxph_kara',
    password: 'sycamorehamster',
    database: 'domupxph_callingcenter'
});// define connection config for the ssh tunnel


con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");

});

process.on('uncaughtException', function (err) {
    console.log(err);
});