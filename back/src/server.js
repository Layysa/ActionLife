// rotas para conectar com o front
const express = require('express')

// Usado para permirtir que aplicações web que estão rodando em um domínio (origem) acessem recursos em outro domínio.
const cors = require('cors') 

const {getAllItems, insertItem} = require('./allitems')

const app = express() 
app.use(express.json())
app.use(cors())


const PORT = 3003

//Inicia o servidor na porta 3003 e imprimir uma menssagem no console
app.listen(PORT, () => {
    console.log(`Funcionando na porta ${PORT}`)
})


// rotas para buscar todos os itens

app.get('/', async (req, res) => {
    try{
        const itens = await getAllItems()
        res.status(200).json(itens)

    } catch(error){
        res.status(500).json({error: error.message})

    }
})


app.post('/insertitem', async (req, res) => {
    const {nome, email, senha, nascimento} = req.body

    // Log dos dados recebidos no backend
    console.log('Dados recebidos do frontend:', req.body);

    try{ 
        const result = await insertItem(nome, email, nascimento, senha)
        console.log('Resultado da inserção:', result); // Log do resultado da inserção
        res.status(201).json(result)

    }catch(error){ 
        console.error(`Erro ao inserir itens: ${error.message}`); // Log detalhado
        res.status(500).json({error: error.message}); // Enviando o erro ao cliente
    }
});


