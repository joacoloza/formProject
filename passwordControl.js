const form = document.getElementById("form");
const password = document.getElementById("user_password");
const confirmationPassword = document.getElementById("confirmation_password");

form.addEventListener('submit',(e) =>  {
    let messages=[];
    if (password.value != confirmationPassword.value) {
        alert('Passwords Do Not Match');
    }else{
        alert('Submition Accepted!');
    }
    e.preventDefault();
})
    