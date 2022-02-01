const Transaction = require('./transaction.js')

class Client {
    constructor () {
        this.balance = 0
        // const transaction = new Transaction()
    }

    deposit(addCredit) {
        this.balance += addCredit
    }

    withdrawal(removeCredit) {
        this.balance - removeCredit
    }
}

module.exports = Client