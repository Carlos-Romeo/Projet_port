const mysql = require("mysql2")

const dataBase = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "",
    database : "gestion_port"
})

dataBase.connect((error)=>{
    if (error) throw error;
    console.log('Cool connexion')
});
module.exports = dataBase;