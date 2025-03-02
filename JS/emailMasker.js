const maskEmail = (email) => { // arrow function from es6
    let atIndex = email.indexOf('@'); // find the point you want to separate
    let firstletter = email[0]; // you need to let the first char clear
    let clearSection = email.slice(atIndex); // to extract the domain , you can use let domain = email.substring(atIndex); // Also extracts "@gmail.com"

    let masked = '*'.repeat(atIndex - 1); //to repeat x time the * from 1 to the indexOf choosen ( 7 for me )
    return firstletter + masked + clearSection; // concanate 
  
  
  }
  
  const email = "cyrilsalamite@gmail.com"; // global varaible 
  
  //maskEmail(email);
  
  console.log(`Here is my email address, ${maskEmail(email)}, as you can see it is masked.`) // console log the result , call the function and concanate a sentence


  /*result from the terminal

  csalamithome@penguin:~/FCC_Cursus/JS$ node emailMasker.js ( node is to "compilate")
Here is my email address, c************@gmail.com, as you can see it is masked.

*/