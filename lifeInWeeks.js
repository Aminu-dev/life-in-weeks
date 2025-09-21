function lifeInWeeks(age) {
    var year = 90 - age;
    var days = year * 365;
    var weeks = year * 52;
    var months = year * 12;

    console.log ("You have " + days + " days, " + weeks + " weeks, and " + months+ " months left.")

    
}

lifeInWeeks(89);
