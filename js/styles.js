document.getElementById('btn-submit').addEventListener('click', function(){
     // console.log('submit');
     const emailAddress=document.getElementById('user-email');
     const email = emailAddress.value;
     // console.log(email)
     //Step-3--> get password from
     // 3(a).set id from the html
     // 3(b).get the element
     // 3(c).get the value
     const passwordField =document.getElementById('user-password')
     const password = passwordField.value;
     // console.log(password)

     // step-4-> verify the email & password
     if(email === 'rj' && password === 'goldy'){
          window.location.href='bank.html';
     }else{
          alert("Tor Id Hack - Bkash a Taka Patha Joldi");
     }

})
