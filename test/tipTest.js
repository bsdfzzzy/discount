const should = require('chai').should();
const main = require('../dist/main.js');
const Calculate = main.Calculate;
const Cashier = main.Cashier;

const input_mock = main.input_mock;
const want = main.want;
const c1 = new Calculate();
const c2 = new Cashier();

describe('testing calculate', () => {

    describe('test calculate part without discount', () => {

        it('it should be 5.00', () => {
            c1.calculate_without_dis('ITEM000000', 'ITEM000001').should.to.eql(5.00);
        });

        it('it should be 7.00', () => {
            c1.calculate_without_dis('ITEM000001', 'ITEM000003', 'ITEM000002').should.to.eql(7.00);
        });

        it('it should be 16.00', () => {
            c1.calculate_without_dis('ITEM000000', 'ITEM000001', 'ITEM000005', 'ITEM000004').should.to.eql(16.00);
        });

        it('it should be 4.00 when given ITEM000001-2', () => {
            c1.calculate_without_dis('ITEM000001-2').should.to.eql(4.00);
        });

        it('it should be 4.00 when given ITEM000002-4', () => {
            c1.calculate_without_dis('ITEM000002-4').should.to.eql(4.00);
        });

    });

    describe('test calculate part when cashier change the discount', () => {

        it('it should be 2.70 when given discount 0.90', () => {
            c2.set_discount(0.90, 'ITEM000000');
            c1.calculate_with_discount('ITEM000000').should.to.eql(2.70);
        });

        it('test multiple products when cashier change their discount together', () => {
            c2.set_discount(0.80, 'ITEM000000', 'ITEM000001', 'ITEM000002');
            c1.calculate_with_discount('ITEM000000', 'ITEM000001', 'ITEM000002').should.to.eql(4.80);
        });

        //it('it should be ')

    });

});

describe('testing print', () => {

    describe('array operation', () => {
        it('it should merge the informations in the input array', () => {
            c1.array_operate(want).should.to.eql([{barcode: 'ITEM000001', num: 5}, {barcode: 'ITEM000003', num: 2}, {barcode: 'ITEM000005', num: 3}]);
        });
    });

    /*describe('print operation', () => {
        it('it should print such a tip', () => {
            let input = c1.array_operate(want);
            c1.print(input).should.to.eql();
        });
    });*/

});

