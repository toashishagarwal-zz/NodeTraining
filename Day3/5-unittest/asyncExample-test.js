var greeter = require('./asyncExample');

module.exports["greet Morning operation"] = function(test) {
    // arrange
    var name = "Someone";
    var expected = "Hi " + name + " ! Good Morning";
    var checkIsMethodInvoked = false;
    Date.prototype.getHours = function() { checkIsMethodInvoked=true; return 7;};
    
    // act
    var actual = greeter.greet(name);
    
    // assert    
    test.ok(checkIsMethodInvoked);
    test.equal(actual, expected, "morning greeting failed");
    test.done();
}

module.exports["greet Evening operation"] = function(test) {
    // arrange
    var name = "Someone";
    var expected = "Hi " + name + " ! Good Evening";
    var checkIsMethodInvoked = false;
    
    Date.prototype.getHours = function() { checkIsMethodInvoked=true; return 13;};
    
    // act
    var actual = greeter.greet(name);
    
    // assert
    test.ok(checkIsMethodInvoked);
    test.equal(actual, expected, "evening greeting failed");
    test.done();
}