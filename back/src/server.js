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


