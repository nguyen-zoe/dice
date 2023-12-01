
let ranNum1 = Math.floor(Math.random()* 6 +1);
let ranImg1= document.querySelector('.img1').setAttribute('src', `./images/dice${ranNum1}.png`);
let ranNum2 = Math.floor(Math.random()* 6 +1);
let ranImg2= document.querySelector('.img2').setAttribute('src', `./images/dice${ranNum2}.png`);


//declare the winner

document.querySelector('h2').innerHTML= ranNum1 >ranNum2 ? "Player 1 wins 🚩" : "Player 2 wins "; 

