
// step-1: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
     // step-2: get the deposit amount from the deposit input field
     // for input field use .value to get the value inside the input field

     const depositField = document.getElementById('deposit-field')
      const newDepositAmountString = depositField.value;
      const newDepositAmount = parseFloat(newDepositAmountString);
     // console.log(depositAmount);
     // step-3: get the current deposit total
     // for non-input use innerText to get the text

     const depositTotalElement = document.getElementById('deposit-total');
     const previousDepositTotalString = depositTotalElement.innerText;
     const previousDepositTotal = parseFloat(previousDepositTotalString);

     // step-4: add numbers to set the total deposit amount
          const currentDepositTotal = previousDepositTotal + newDepositAmount;

     // console.log(depositTotal);

     // set the total deposit amount
     depositTotalElement.innerText = currentDepositTotal;

     // step-5: get balance total
     const balanceTotalElement = document.getElementById('balance-total');
     const preBalanceTotalString = balanceTotalElement.innerText;
     const preBalanceTotal = parseFloat(preBalanceTotalString);

     // step-6:calculate current total balance
     const currentBalanceTotal = preBalanceTotal + newDepositAmount;
     // set current balance total balance
      balanceTotalElement.innerText = currentBalanceTotal;

     

     //  Final-step: set input text empty
     depositField.value = '';

})

// 
// step-1:add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
     const inp = document.getElementById('withdraw-input-field');
     const inpString = inp.value;
     const finalInp = parseFloat(inpString);

     inp.value = '';  //input field empty done by using this
     // console.log(inpString);
     const widPValue = document.getElementById('wid-calculate');
     const widString = widPValue.innerText;
     const finalWidth = parseFloat(widString);
     // console.log('shdshd');
     // const display = finalInp + finalWidth;
     // widPValue.innerText = display;

     const balanceDecrement = document.getElementById('balance-total')
     const balanceString = balanceDecrement.innerText;
     const finalBalance = parseFloat(balanceString);
     if( finalInp > finalBalance){
          alert('Shameless Person');
          return;
     }
     const display = finalInp + finalWidth;
     widPValue.innerText = display;

     const finalBalanceDecrement = finalBalance - finalInp;
     balanceDecrement.innerText = finalBalanceDecrement;

     // inp.value = '';

})

