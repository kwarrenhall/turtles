$(document).ready(function() {
  var animal = parseInt(prompt("Do you like turtles or snakes? Enter 1 for turtles and 2 for snakes."));

   if (animal === 1) {
     $('#turtles').show();
   }
   else if (animal === 2) {
     $('#snakes').show();
   }
 });
