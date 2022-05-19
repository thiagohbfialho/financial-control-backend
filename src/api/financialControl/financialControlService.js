const FinancialControl = require('./financialControl')

FinancialControl.methods(['get', 'post', 'put', 'delete'])
FinancialControl.updateOptions({new: true, runValidators: true})

module.exports = FinancialControl