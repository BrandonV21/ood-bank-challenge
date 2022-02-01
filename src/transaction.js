class Transaction {
    constructor (date) {
        this.date = date
        this.credit = []
        this.debit = []
        this.balance = 0
    }
}

module.exports = Transaction