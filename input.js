var input = [
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

var count = [];

for (var i of input) {
    if (i.length == 10) {
        var r1 = i.match(/ITEM0+([1-9]+)/);
        var have = true;
        if (count.length != 0) {
            for(var j of count) {
                if (j.ID == r1[0]) {
                    j.num += 1;
                    have = true;
                    break;
                } else {
                    have = false;
                }
            }
        } else {
            count.push({ID: r1[0], num: 1});
        }
        if (!have) {
            count.push({ID: r1[0], num: 1});
        }
    } else {
        var r2 = i.match(/ITEM0+([1-9]+)/);
        var r2_num = i.match(/ITEM[0-9]+-(\d+)/);
        var have2 = true;
        if (count.length != 0) {
            for(var j of count) {
                if (j.ID == r2[0]) {
                    j.num += 1;
                    have = true;
                    break;
                } else {
                    have = false;
                }
            }
        } else {
            count.push({ID: r2[0], num: 1});
        }
        if (!have) {
            count.push({ID: r2[0], num: parseInt(r2_num[1])});
        }
    }
}

exports.inputs = count;