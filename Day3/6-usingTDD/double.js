module.exports = {
    double : function(number) {
        // throw an error if number is arg is not a number
        if(typeof number === 'number') {
            return number * number;
        } 
        throw new Error("Expected a number");
    }
}