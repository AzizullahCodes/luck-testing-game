// we create first main function 
function checking(){let getCoin = Number(document.getElementById('heading-two').innerHTML);

let getGuessNumber = Number(document.getElementById('userinput').value);
document.getElementById('userinput').value = '';

let biddingAmount = Number(document.getElementById('bidding-amount').value);
document.getElementById('bidding-amount').value = '';
let random = Math.floor(Math.random()*2)+1;

document.getElementById('p1').innerHTML = getGuessNumber;

document.getElementById('p2').innerHTML = biddingAmount;

document.getElementById('p3').innerHTML = random;

// calling another function here 
statement(getCoin,getGuessNumber,biddingAmount,random);
// now we set time for auto refreshing 
setTimeout(function(){location.reload();},8000)


}

// now we create function 2 for if statement applying 
function statement(getCoin,getGuessNumber,biddingAmount,random){let result;
    if(getGuessNumber === random){result = ` ${biddingAmount + getCoin} <br>
    congratulation you won ${biddingAmount} coins`;}
    else{result = `${getCoin - biddingAmount} <br> 
    Sorry You lose ${biddingAmount} coins, Try again!`}
    document.getElementById('p4').innerHTML = result;
   
}