'use strict'

//const product = require('./read_file'),
    //count = require('./input'),
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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


const input_mock = [
    {barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 3.00},
    {barcode: 'ITEM000001', name: '雪碧', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 2.00},
    {barcode: 'ITEM000002', name: '芬达', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 1.00},
    {barcode: 'ITEM000003', name: '冰红茶', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 4.00},
    {barcode: 'ITEM000004', name: '奶茶', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 5.00},
    {barcode: 'ITEM000005', name: '绿茶', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 6.00}
]

let input_mock_after_discount = [
    {barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 3.00, discount: 1.00},
    {barcode: 'ITEM000001', name: '雪碧', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 2.00, discount: 1.00},
    {barcode: 'ITEM000002', name: '芬达', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 1.00, discount: 1.00},
    {barcode: 'ITEM000003', name: '冰红茶', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 4.00, discount: 1.00},
    {barcode: 'ITEM000004', name: '奶茶', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 5.00, discount: 1.00},
    {barcode: 'ITEM000005', name: '绿茶', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 6.00, discount: 1.00}
]

let want = [
               'ITEM000001',
               'ITEM000001',
               'ITEM000001',
               'ITEM000001',
               'ITEM000001',
               'ITEM000003-2',
               'ITEM000005',
               'ITEM000005',
               'ITEM000005'
           ];

class Shop {
    constructor() {
        this.input_mock = input_mock;
        this.input_mock_after_discount = input_mock_after_discount;
        this.want = want;
    }
}

class Calculate extends Shop{

    parseBarcode(barcode) {
        let parse_have_ = barcode.match(/(ITEM[0-9]+)-(\d+)/);
        let parse_not_have_ = barcode.match(/ITEM[0-9]+/);
        let parse_barcode = barcode, num = 1;
        if (parse_have_) {
            parse_barcode = parse_have_[1];
            num = parseInt(parse_have_[2]);
        } else if (parse_not_have_) {
            parse_barcode = parse_not_have_[0];
            num = 1;
        } else {
            parse_barcode = null;
            num = null;
        }
        return [parse_barcode, num];
    }

    array_operate(input_array) {
        let new_array = [];
        for (let barcode of input_array) {
            let [parse_barcode, num] = this.parseBarcode(barcode);
            let new_array_have_this = 0;
            for (let new_array_child of new_array) {
                if (new_array_child.barcode === parse_barcode) {
                    new_array_child.num += num;
                    new_array_have_this = 1;
                }
            }
            if (!new_array_have_this) {
                new_array.push({barcode: parse_barcode, num: num});
            }
        }
        return new_array;
    }

    calculate(barcodeArray) {
        let total = 0;
        let save = 0;
        for ( let barcode of barcodeArray ) {
            for ( let data of input_mock_after_discount ) {
                if ( data.barcode === barcode.barcode ) {
                    total += barcode.num * data.price * data.discount;
                    save += barcode.num * data.price - barcode.num * data.price * data.discount;
                }
            }
        }
        return {totalPrice: total.toFixed(2), savePrice: save.toFixed(2)};
    }

    calculate_without_dis(...barcode) {

        let sum = 0.00;

        for (let input_product_barcode of barcode) {
            let [parse_barcode, num] = this.parse(input_product_barcode);
            if (parse_barcode !== null && num !== null){
                for(let product of this.input_mock) {
                    if (product.barcode === parse_barcode) {
                        sum += product.price * num;
                    }
                }
            }

        }

        return sum;
    }

    calculate_with_discount(...barcode) {

        let sum = 0.00;
        console.log(barcode);

        for (let input_product_barcode of barcode) {
            let [parse_barcode, num] = this.parse(input_product_barcode);
            if (parse_barcode !== null && num !== null) {
                for(let product of input_mock_after_discount) {
                    if (product.barcode === parse_barcode) {
                        sum += product.price * num * product.discount;
                    }
                }
            }
        }

        return sum;
    }


    int_to_Chinese(discount_num) {
        let dis = discount_num.match(/\.(\d+)/);
        let str = "零一二三四五六七八九";
        let discount = "";
        for (var s of dis[1]) {
             if(s != undefined){
                  discount += str.charAt(parseInt(s));
             }
        }
        return discount;
    }

    print(inputs) {
        console.log("***<没钱赚商店>购物清单***");
        //let new_array = [];
        inputs = this.array_operate(inputs);
        for(let input of inputs) {
            for(let product of input_mock_after_discount) {
                if (product.barcode === input.barcode) {
                    console.log("名称：" + product.name + "，数量：" + input.num + product.unit + "，单价：" + product.price + "(元)，小计：" + (input.num * product.price * product.discount).toFixed(2) + "(元)" + "，优惠" + (product.price * (1 - product.discount) * input.num).toFixed(2) + "（元）");
                }
            }
            //new_array.push(input.barcode + "-" + input.num);
        }
        console.log("----------------------\n单品打折商品：");
        for(let input of inputs) {
            for(let product of input_mock_after_discount) {
                if (product.barcode === input.barcode && product.discount !== 1) {
                    console.log("名称：" + product.name + "，折扣：" + this.int_to_Chinese(product.discount) + "折");
                }
            }
        }
        //let [...items] = new_array;
        let priceAfterCal = this.calculate(inputs)
        console.log("----------------------");
        console.log("总计：" + priceAfterCal.totalPrice + "(元)");
        console.log("节省：" + priceAfterCal.savePrice + "(元)");
        console.log("**********************");
    }

}

class Cashier extends Shop{

    set_discount(discount_num, ...product_barcode) {

        let discount = discount_num;

        for(let origin_product of this.input_mock_after_discount) {
            for (let input_product_barcode of product_barcode) {
                if (origin_product.barcode === input_product_barcode) {
                    origin_product.discount = discount_num;
                    if (discount !== origin_product.discount) {
                        throw new Error();
                    }
                    continue;
                }
            }
        }

        return discount;
    }

    ask_to_make_discount() {
        console.log("请输入需要打折商品的编号和折扣（小数）以/区分，每输入一组后按回车确认，修改完毕后，按回车即可打印小票");
        rl.on('line', (answer) => {
            var have_p = 1;
            if(answer == "") {
                have_p = 3;
                rl.close();
                let c1 = new Calculate();
                c1.print(want);
            }
            answer = answer.split(" ");
            for(let product of this.input_mock_after_discount) {
                if (product.barcode === answer[0]) {
                    let dis = this.set_discount(answer[1], answer[0]);
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

}

export { Calculate, Cashier, input_mock, input_mock_after_discount, want };