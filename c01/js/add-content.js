let today = new Date(); // Creating new date object
let hourNow = today.getHours(); // Finding the current hour
let greeting;

// Display the appropriate greeting based on the time of day
if (hourNow > 18) {
  greeting = 'Good evening!';
}
else if (hourNow > 12) {
  greeting = 'Good afternoon!';
}
else if (hourNow > 0) {
  greeting = 'Good morning!';
}
else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
