var doubled = require('./double');

module.exports["double of 2"] = function(test) {
    // arrange
    var number = 2;
    var expected = 4;
    
    // act
    var actual = doubled.double(number);
    
    // assert
    test.equal(actual, 4, " double of 2 failed");
    test.done();
}

module.exports["double of not a number"] = function(test) {
    // arrange
    var number = 'a';
    
    // act
    
    // assert
    test.throws(function() { doubled.double(number); }, " double of not a number failed" );
    test.done();
}



