function validate(){
    var username = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var password = document.getElementById('password').value;
    var cnfpassword = document.getElementById('cnfpassword').value;
    //console.log(username+email+password+cnfpassword);
    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkcnfpassword(password, cnfpassword);
}
function checkusername(username){
    if(username.length >7){
        document.getElementById('name').classList.add('success');
        document.getElementById('name').classList.replace('error','success');
        document.getElementById('username_error').innerHTML=''
    }
    else{
        document.getElementById('name').classList.replace('success','error');
        document.getElementById('username_error').innerText='username must have 8 letters'
    }
}
function checkemail(email){
    if(email.includes('@gmail.com')){
        document.getElementById('mail').classList.add('success');
        document.getElementById('mail').classList.replace('error','success');
        document.getElementById('email_error').innerHTML=''
    }
    else{
        document.getElementById('mail').classList.replace('success','error');
        document.getElementById('email_error').innerText='wrong email format'
    }
}
function checkpassword(password){
    if(password.length>8 && password.includes('.')){
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.replace('error','success');
        document.getElementById('password_error').innerHTML=''
    }
    else{
        document.getElementById('password').classList.replace('success','error');
        document.getElementById('password_error').innerText='password should have 8 characters'
    }
}
function checkcnfpassword(password, cnfpassword){
    if(cnfpassword==password  ){
        document.getElementById('cnfpassword').classList.add('success');
        document.getElementById('cnfpassword').classList.replace('error','success');
        document.getElementById('confirmpassword_error').innerHTML=''
    }
    else{
        document.getElementById('cnfpassword').classList.replace('success','error');
        document.getElementById('confirmpassword_error').innerText='not matching'
    }

}
