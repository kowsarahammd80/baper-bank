// step-1: add click event handler with the submit button
 document.getElementById('btn-submit').addEventListener('click', function(){
  // step-2 get the email address inside the email input field
  // always remeber to use .velue to get text from an input firld and textarea tege.
  let emailField = document.getElementById('enter-email');
  let email = emailField.value;
  
  //step-3 get password
  //3.a set id on the html element
  //3.b get the element 
  //3.c get the value from the element

  let passwordField = document.getElementById('user-password');
  let password = passwordField.value;
  
  // donot verify email password on the client side
  //step-4: verify email and password and check wether valid user or not
  if(email === 'sontan@baap.com' && password === 'secret'){
    console.log('valid user')
  }
  else{
    console.log('invalid user');
  }
  


})