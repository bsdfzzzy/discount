const should = require('chai').should();
const main = require('../dist/main.js');
const Calculate = main.Calculate;

describe('testing calculate', () => {
    describe('test calculate part', () => {
        it('it should be 9.0 when given 4.5 + 4.5', () => {
            var c1 = new Calculate();
            c1.calculate(4.5, 4.5).should.to.eql(9.0);
        });
    });
});
