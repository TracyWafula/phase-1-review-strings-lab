// Write your code in this file!

//define current user
const currentUser = 'Grass Hopper';
//string interpolation 
const welcomeMessage =  `Welcome to Flatbook, ${currentUser}!`; 
//uppercase method
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//short greeting should display the first character of current user
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
