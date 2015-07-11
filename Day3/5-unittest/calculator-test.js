var calculator = require('./calculator');

module.exports["calculator add operation"] = function(test) {
    var number1 =100,
        number2 = 200,
        expected = 300;
    
    var result = calculator.add(number1, number2);
    test.equal(result, expected, "Add failed");
    test.done();
}

module.exports["calculator subtract operation"] = function(test) {
    var number1 =100,
        number2 = 200,
        expected = 100;
    
    var result = calculator.subtract(number2, number1);
    test.equal(result, expected, "subtract failed");
    test.done();
}