const express = require('express')

module.exports = function(server){

    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas do Financial Control
    const FinancialControl = require('../api/financialControl/financialControlService')
    FinancialControl.register(router, '/financialControls')
}