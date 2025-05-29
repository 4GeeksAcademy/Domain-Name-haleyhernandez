import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['cute', 'big'];
  let noun = ['puppy', 'kitty'];
  let extentison =['.com', '.net', '.org']

  for(let elm of pronoun){
    for(let elm2 of adj){
      for(let elm3 of noun){
        for(let elm4 of extentison){
        
        let result = elm + elm2 + elm3 + elm4
        console.log(result);
        document.querySelector('#name').innerHTML += "<ul>"+result+"</ul>";
        }
      }
    }
  }
 console.log("Any string");
};
