const restful = require('node-restful')
const mongoose = restful.mongoose

const proventoSchema = new mongoose.Schema({
    descricao: {type: String, required: true},
    valor: {type: Number, min: 0, required: true},
})

const pagamentoSchema = new mongoose.Schema({
    descricao: {type: String, required: true},
    valor: {type: Number, min: 0, required: true},
})

const descontoSchema = new mongoose.Schema({
    descricao: {type: String, required: true},
    valor: {type: Number, min: 0, required: true},
})

const trabalhadorSchema = new mongoose.Schema({
    nome: {type: String, required: [true, 'Informe o nome do trabalhador!']},
    email: {type: String},
    proventos: [proventoSchema],
    pagamentos: [pagamentoSchema],
    descontos: [descontoSchema]
})

module.exports = restful.model('Trabalhador', trabalhadorSchema)