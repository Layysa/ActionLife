const mysql = require('mysql2/promise') // importando o mysql

// Criar um pool de conexões com o banco de dados
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1n0v3#',
    database: 'actionlife',

})

module.exports = connection