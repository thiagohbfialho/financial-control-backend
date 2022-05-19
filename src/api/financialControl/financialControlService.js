const FinancialControl = require('./financialControl')

FinancialControl.methods(['get', 'post', 'put', 'delete'])
FinancialControl.updateOptions({ new: true, runValidators: true })

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

module.exports = FinancialControl