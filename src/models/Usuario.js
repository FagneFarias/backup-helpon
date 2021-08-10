
const { Schema, model } = require('../database/conexao')

const usuarioSchema = new Schema({//Criando a estrutura do documento

    cpfCnpj: {
        type: String,
        required: true
    },
    fotoPerfil: {
        type: String
    },
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    saldo: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true //As contas inicialmente são ativas, por isso o true : )
    },
    tipo: {
        type: String,
        enum: {values: ['Consumidor', 'Instituição', 'Comércio'], message: '{VALUE} não é um tipo válido!'},
        required: true
    },
    uf: {
        type: String
    },
    cidade: {
        type: String
    },
    bairro: {
        type: String
    },
    rua: {
        type: String
    },
    numero: {
        type: String
    },
    complemento: {
        type: String
    },
    descricao: {
        type: String
    },
    ramo: {
        type: String
    },
    cupons: {
        type: Array
    },
    doacoes: {
        type: Array
    }

})

const Usuario = model('Usuario', usuarioSchema) //Criando a coleção

module.exports = Usuario;
