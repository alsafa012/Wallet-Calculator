// crete functions for multiple uses
// 01.To get final value for each and every input-field
function getInputFieldValue(inputFieldId){
     const inputField = document.getElementById(inputFieldId);
     const inputFieldString = inputField.value;
     const FinalInputValue = parseFloat(inputFieldString);
     inputField.value='';
     // if(isNaN(FinalInputValue)){
     //      return alert('Please enter a valid number');
          
     // }
     return FinalInputValue;
}
// 02.To get final value for each and every text-field
function getTextFieldValue(textFieldId){
     const textField = document.getElementById(textFieldId);
     const textFieldString = textField.innerText;
     const finalTextValue = parseFloat(textFieldString);
     textField.innerText = '';
     if(isNaN(finalTextValue)){
         return alert('Please enter a valid number');
     
     }
     return finalTextValue;
}
function displayValue(element, newValue){
     const totalElement = document.getElementById(element);
     console.log(totalElement);
     totalElement.innerText = newValue;
}
document.getElementById('btn-deposit').addEventListener('click',function(){
     const depositAmount = getInputFieldValue('deposit-field');
     const displayTotalDeposit = getTextFieldValue('deposit-total');
     const Sum = depositAmount + displayTotalDeposit;
     console.log(typeof depositAmount);
     if(isNaN(depositAmount)){
          return alert('Please enter a');
     }
     console.log('Execute');
     displayValue('deposit-total',Sum);

     const inc = getTextFieldValue('balance-total');
     const totalIncrement = depositAmount + inc;
     
          displayValue('balance-total', totalIncrement);
     
     
})


document.getElementById('btn-withdraw').addEventListener('click',function(){
     const widAmount = getInputFieldValue('withdraw-input-field');
     const displayTotalWid = getTextFieldValue('wid-calculate');
     // const sum = x+displayTotalWid;
     // displayValue('wid-calculate',sum);
     const dec = getTextFieldValue('balance-total');
     if( widAmount > dec){

          return alert('Failed to calculate');
          
     }
     const sum = widAmount + displayTotalWid;
     displayValue('wid-calculate',sum);

     const totalDec =dec - widAmount;
     displayValue('balance-total',totalDec);

})


