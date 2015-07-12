module.exports = {
    greet: function(name) {
        var dateInHours = new Date().getHours();
        console.log("dateInHours=" + dateInHours);
        if( dateInHours < 12) 
            return "Hi " + name + " ! Good Morning";
        else 
           return "Hi " + name + " ! Good Evening"; 
    }
}



