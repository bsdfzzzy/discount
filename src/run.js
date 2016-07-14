const main = require('./main');
const Calculate = main.Calculate;
const Cashier = main.Cashier;
const want = main.want;

let c1 = new Calculate();
let c2 = new Cashier();

c2.ask_to_make_discount();
//c1.print(want);