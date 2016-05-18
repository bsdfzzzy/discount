var product = require('./read_file');
var count = require('./input');

var create_small_ticket_to_console = function (products, input) {
    var sum_price = 0;
    var sum_price_after_discount = 0;
    var discount_products = [];
    console.log("***<没钱赚商店>购物清单***");
    for(var i of count.inputs) {
        var ID = i.ID;
        var have = true;
        for (var j of product.products) {
            if (j.barcode == ID) {
                if (j.discount != ""){
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
    console.log("----------------------");
    console.log("总计：" + sum_price_after_discount + "(元)");
    console.log("节省：" + (sum_price - sum_price_after_discount).toFixed(2) + "(元)");
    console.log("**********************");
}

var create_small_ticket_to_file = function (products, input) {

}

create_small_ticket_to_console();