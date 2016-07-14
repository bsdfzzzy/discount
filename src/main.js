'use strict'

/*const product = require('./read_file'),
    count = require('./input'),
    readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
*/
/*var create_small_ticket_to_console = () => {
    var sum_price = 0;
    var sum_price_after_discount = 0;
    var discount_products = [];
    console.log("***<没钱赚商店>购物清单***");
    for(var i of count.inputs) {
        var ID = i.ID;
        var have = true;
        for (var j of product.products) {
            if (j.barcode == ID) {
                if (j.discount){
                    discount = parseFloat(j.discount);
                } else {
                    discount = 1.00;
                }
                console.log("名称：" + j.name + "，数量：" + i.num + j.unit + "，单价：" + j.price + "(元)，小计：" + (i.num * j.price * discount) + "(元)");
                have = true;
                sum_price += i.num * j.price;
                sum_price_after_discount += i.num * j.price * discount;
                if (j.discount != "") {
                    discount_products.push(j);
                }
                break;
            } else {
                have = false;
            }
        }
        if (!have) {
            console.log("没有条形码为" + i.ID + "的商品");
        }
    }
    console.log("----------------------\n单品打折商品：");
    for(var k of discount_products) {
        if (k.discount) {
            var dis = k.discount.match(/\.(\d+)/);
            var str = "零一二三四五六七八九";
            var discount_num = "";
            for (var s of dis[1]) {
                if(s != undefined){
                    discount_num += str.charAt(parseInt(s));
                }
            }
            console.log("名称：" + k.name + "，折扣：" + discount_num + "折");
        }
    }
    console.log("----------------------");
    console.log("总计：" + sum_price_after_discount + "(元)");
    console.log("节省：" + (sum_price - sum_price_after_discount).toFixed(2) + "(元)");
    console.log("**********************");
}

var ask_to_make_discount = () => {
    console.log("请输入需要打折商品的编号和折扣（小数）以/区分，每输入一组后按回车确认，修改完毕后，按回车即可打印小票");
    rl.on('line', (answer) => {
        var have_p = 1;
        if(answer == "") {
            have_p = 3;
            rl.close();
            create_small_ticket_to_console();
        }
        answer = answer.split(" ");
        for (var p of product.products) {
            if(p.barcode == answer[0]){
                p.discount = answer[1];
                have_p = 2;
            }
        }
        if (have_p == 1) {
            console.log("没有这个商品。");
        } else if (have_p == 2) {
            console.log("修改完成。");
        }
    });    
}

ask_to_make_discount();*/

class Calculate {

    constructor() {}

    calculate(a, ...prices) {
        let sum = a;
        for (let price of prices) {
            if(price >= 0.0) {
                sum += price;
            }
        }
        return sum;
    }


}

export {Calculate};