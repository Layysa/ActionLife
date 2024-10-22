const connection = require('./connection');
const bcrypt = require('bcrypt'); // Importando bcrypt

// Função para buscar todos os itens
const getAllItems = async () => {
    try {
        const [query] = await connection.execute('SELECT * FROM actionlife.cadastro');
        return query;
    } catch (error) {
        throw new Error(`Erro ao buscar itens: ${error.message}`);
    }
};

// Função para inserir um novo usuário com verificação de e-mail
async function insertItem(nome, email, senha) {
    try {
        // Verifica se o e-mail já está cadastrado
        const [rows] = await connection.execute(
            'SELECT * FROM cadastro WHERE email = ?',
            [email]
        );
        if (rows.length > 0) {
            throw new Error('Este e-mail já está cadastrado.');
        }

        // Gera um hash da senha com 10 salt rounds
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(senha, saltRounds);

        const insertQuery = "INSERT INTO cadastro (nome, email, senha) VALUES (?, ?, ?)";
        const values = [nome, email, hashedPassword];

        const [result] = await connection.execute(insertQuery, values);
        return result;
    } catch (error) {
        throw new Error(`Erro ao inserir itens: ${error.message}`);
    }
}



module.exports = { getAllItems, insertItem };
