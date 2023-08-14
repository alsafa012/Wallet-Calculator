
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
     depositTotalElement.innerText = currentDepositTotal;

     //  Final-step: set input text empty
     depositField.value = '';

})