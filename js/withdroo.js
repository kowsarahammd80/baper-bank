/**
 * 1. add event handler with the withdroo button
 * 2. get the withdraw amount withdraw input field
 * 3. get previous withdraw total
 * 4. calculate toatal withdraw amount
 * 4-5. total withdraw amount
 * 5.get the previous total
 * 6. calculat new balance total;
 * 6-5. set the new balance total
 * 
 * 7. clear the input field
 */

// step-1 
document.getElementById('btn-withdroo').addEventListener('click', function(){
  //step-2
  let withdrowField = document.getElementById('withdraw-inputfild');
  let newWithdrowAmountString = withdrowField.value;
  let newwithdrawAmount = parseFloat(newWithdrowAmountString);
  console.log(newwithdrawAmount )
  
  //step-7
  withdrowField.value = '';
  
  if(isNaN(newwithdrawAmount)){
    alert('please provide a valid number');
  }
  //step-3
  let withdrawTotalElemet = document.getElementById('witdraw-total');
  let previousWithdrawTotalString = withdrawTotalElemet.innerText;
  let previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  
  //step-4
  let currentWithdrawTotal = previousWithdrawTotal + newwithdrawAmount;
  withdrawTotalElemet.innerText = currentWithdrawTotal;

  //step-5
  let balanceTotalElement = document.getElementById('blns-total');
  let previousBalanceTotalString = balanceTotalElement.innerText;
  let previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //step-6 
  let newBlanceTotal = previousBalanceTotal - newwithdrawAmount;
  balanceTotalElement.innerText = newBlanceTotal;





})