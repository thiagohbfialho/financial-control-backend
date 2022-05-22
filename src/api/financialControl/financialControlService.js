const FinancialControl = require('./financialControl')
const errorHandler = require('../common/errorHandler')

FinancialControl.methods(['get', 'post', 'put', 'delete'])
FinancialControl.updateOptions({ new: true, runValidators: true })
FinancialControl.after('post', errorHandler).after('put', errorHandler)

FinancialControl.route('get', (req, res, next) => {
    FinancialControl.find({}, (err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.status(500).json({ errors: [error] })
        }
    })
})

FinancialControl.route('count', (req, res, next) => {
    FinancialControl.count((error, value) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

FinancialControl.route('summary', (req, res, next) => {
    FinancialControl.aggregate([{ 
        $project: {
            provento: {$sum: "$proventos.valor"}, 
            pagamento: {$sum: "$pagamentos.valor"},
            desconto: {$sum: "$descontos.valor"}
        } 
    }, { 
        $group: {
            _id: null, 
            provento: {$sum: "$provento"}, 
            pagamento: {$sum: "$pagamento"}, 
            desconto: {$sum: "$desconto"}
        }
    }, { 
        $project: {_id: 0, provento: 1, pagamento: 1, desconto: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {provento: 0, pagamento: 0, desconto: 0})
        }
    })
})

module.exports = FinancialControl