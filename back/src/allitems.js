const connection = require('./connection')

const getAllItems = async () => {
    try{
        const [query] = await connection.execute('SELECT * FROM actionlife.dado_usuario')
        return query
    }
    catch(error){ 
        throw new Error(`Erro ao buscar itens: ${error.message}`)
    }

}

async function insertItem(nome, email, nascimento, senha) {
    try{
        const insertQuery = "INSERT INTO dado_usuario (nome, email, nascimento, senha) VALUES (?, ?, ?, ?)"
        const values = [nome, email, nascimento, senha]
        const [result] = await connection.execute(insertQuery, values)
        return result
    }
    catch(error){ 
        throw new Error(`Erro ao inserir itens: ${error.message}`)
    }
}

module.exports = {getAllItems, insertItem}