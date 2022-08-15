//step-1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
  // step-2 get the deposit amount from the deposit input field
  let depositField = document.getElementById('deposit-field');
  let newDepositAmountString = depositField.value;
  let newDepositAmount = parseFloat(newDepositAmountString);

  // step-3 get the current deposit total
  // for non-input(element other then input, text area) use innertext to get the text
  let depositTotalElement = document.getElementById('diposit-total');
  let pereviousDepositTotalString = depositTotalElement.innerText;
  let pereviousDepositTotal = parseFloat(pereviousDepositTotalString);
  //step-4 add numbers to set total deposit
  let currentDepositTotal = pereviousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

//step-5 get ballans current total
let balanceTotalElement = document.getElementById('blns-total');
let previousBalanceTotalString = balanceTotalElement.innerText;
let previousBalanceTotal = parseFloat(previousBalanceTotalString);
//step-6 calculate current total balance 
let currentBalanceTotal = previousBalanceTotal + newDepositAmount;
// step the blance total
balanceTotalElement.innerText = currentBalanceTotal;
  

  //step-7 clear the deposit field
  depositField.value = '';

})