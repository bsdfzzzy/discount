var fs = require('fs');

var products = function() {
    var jsons = [];
    data = fs.readFileSync('./products.json', 'utf8');
    strings = data.split(/\n/);
    for ( var i of strings) {
        if (i == "") continue;
        var json = JSON.parse(i);
        jsons.push(json);
    }
    return jsons;    
}();

exports.products = products;