const should = require('chai').should();
const main = require('../dist/main.js');
const Calculate = main.Calculate;

describe('testing calculate', () => {
    var c1 = new Calculate();
    describe('test calculate part without discount', () => {

        it('it should be 9.0 when given 4.5 + 4.5', () => {
            c1.calculate(4.5, 4.5).should.to.eql(9.0);
        });

        it('it should be 13.0 when given 4.5 + 4.5 + 4.0', () => {
            c1.calculate(4.5, 4.5, 4.0).should.to.eql(13.0);
        });

        it('it should be 7.5 when given 1.5 + 2 + 3 + 1.0', () => {
            c1.calculate(1.5, 2, 3, 1.0).should.to.eql(7.5);
        });

    });

});

/*describe('testing print', () => {
    describe('test print part without discount', () => {

    });
});*/
