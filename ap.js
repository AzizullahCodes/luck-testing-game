const coinEl = document.getElementById('heading-two');
coinEl.innerHTML = 1000;

// we create first main function 
function checking() {
  
  let coins = Number(coinEl.innerHTML);
  let guessNumber = Number(document.getElementById('userinput').value);
  let biddingAmount = Number(document.getElementById('bidding-amount').value);

  // clear inputs
  document.getElementById('userinput').value = '';
  document.getElementById('bidding-amount').value = '';

  // random number (1 or 2)
  let random = Math.ceil(Math.random() * 6);
// validation 
if(guessNumber < 1 || guessNumber > 2){
  alert('Enter correct guess number');
  return;
}
// validation 2 
if(biddingAmount > coins){
  alert('insufficient balance');
  return;
}
  statement(coins, guessNumber, biddingAmount, random);
}

// statement funtion 
function statement(coins, guessNumber, biddingAmount, random) {
  let result;

  if (guessNumber === random) {
    coins += biddingAmount;
    result = `🎉 Congratulations! You won ${biddingAmount} coins.
    Total Balance: ${coins}`;
  } else {
    coins -= biddingAmount;
    result = `❌ Sorry! You lost ${biddingAmount} coins.
    Remaining Balance: ${coins}`;
  }

  // update coins in HTML
  coinEl.innerHTML = coins;
  document.getElementById('p4').innerText = result;
}
