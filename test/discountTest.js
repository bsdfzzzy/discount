const should = require('chai').should();
const main = require('../dist/main.js');
const Calculate = main.Calculate;
const Cashier = main.Cashier;

const input_mock = main.input_mock;
var input_mock_after_discount = main.input_mock_after_discount;
const c1 = new Calculate();
const c2 = new Cashier();

describe('testing cashier', () => {
    describe('cashier change the discount', () => {

        it('it should be 0.90 when given input_mock:first, discounting for ten percent', () => {
            c2.set_discount(0.90, 'ITEM000000').should.to.equal(0.90);
        });

    });
});