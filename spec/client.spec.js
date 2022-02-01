const Client = require('../src/client.js')
const Transaction = require('../src/transaction.js')
const Statement = require('../src/statement.js')

describe('Client:', () => {
  let client

  beforeEach(() => {
    client = new Client()
  })

  it('add credit to balance', () => {
    // set up
    const addCredit = 1000
    // execute
    client.deposit(addCredit)
    // verify
    expect(client.balance).toEqual(addCredit)
  })

})