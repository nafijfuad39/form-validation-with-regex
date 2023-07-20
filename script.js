const validation = () => {

    let username = document.getElementById('username').value;
    let emailfield = document.getElementById('email_field').value;
    let passwordfield = document.getElementById('password_field').value;

    let username_check = /^[a-z]{1,10}$/
    let email_check = /^[a-z0-9_]{0,}@[a-z]{0,}[.][a-z.]{0,}$/;
    let password_check = /^[A-Za-z]\w{1,5}$/;
  
    if(username_check.test(username)){
         document.getElementById('usererror').innerHTML ="";
     }
    else{
       document.getElementById('usererror').innerHTML ="Username is invalid (User_name must be use lowercase, 1 to 10 digits)";
       return false;
      }

    if(email_check.test(emailfield)){
        document.getElementById('emailerror').innerHTML ="";
    }
    else{
      document.getElementById('emailerror').innerHTML ="Email is invalid(Email must be start lowercase ,use '@' , use '.' )";
      return false;
     }

    if(password_check.test(passwordfield)){
        document.getElementById('passworderror').innerHTML ="";
    }
    else{
      document.getElementById('passworderror').innerHTML ="Password is invalid (Password must be use first character must be a letter ,don't over 6 character, underscore)";
      return false;
     }
}



let form = document.getElementById('Form')
for(i = 0; i < form.length; i++){
    form[i].addEventListener('click',validation)
    
}

