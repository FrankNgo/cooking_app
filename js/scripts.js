var liters = function(gallons){
  return gallons/0.26417;
};

var gallons = prompt("Enter amount in gallons: ");
var result = liters(gallons);
alert(gallons + " gallons equals " + result.toPrecision(3) + " liters.");
