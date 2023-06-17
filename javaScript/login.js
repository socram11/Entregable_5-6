function logInFunction() {

    var inputs = document.getElementsByTagName('input');
    var mail = document.getElementById("email");
    var password = document.getElementById("password");

    const LoginData = [
        {EmailAddres:mail.value},
        {password:password.value}
    ];
    
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                alert("Please fill all required fields");
                return false;
            }
        }
    }

    console.log(LoginData);
    alert("Your Log in was succsessful");
    return true;
}
