// we create first main function 
function checking(){let getCoin = Number(document.getElementById('heading-two').innerHTML);

let getGuessNumber = Number(document.getElementById('userinput').value);
document.getElementById('userinput').value = '';

let biddingAmount = Number(document.getElementById('bidding-amount').value);
document.getElementById('bidding-amount').value = '';
let random = Math.floor(Math.random()*6)+1;

// calling another function here 
statement(getCoin,getGuessNumber,biddingAmount,random);
// now we set time for auto refreshing 
 setTimeout(function(){location.reload();},5000)


}

// now we create function 2 for if statement applying 
function statement(getCoin, getGuessNumber, biddingAmount, random) {
  let result;
  if (getGuessNumber === random) {
    result = `🎉 Congratulations! You won ${biddingAmount} coins \n Total Available Coins: ${biddingAmount + getCoin}`;
  } else {
    result = `❌ Sorry! You lost ${biddingAmount} coins. Try again! \n Total Available Coins: ${getCoin - biddingAmount} `;
  }
  document.getElementById('p4').innerHTML = result;
}



