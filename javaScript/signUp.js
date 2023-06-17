function signUpFunction() {

    var inputs = document.getElementsByTagName('input');
    var mail = document.getElementById("email");
    var password = document.getElementById("password");
    var secondPassword = document.getElementById("passwordRepeat");

    const SignUpData = [
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

    if(secondPassword.value != password.value){
        alert("passwords do not match, please verify your password");
        return false;
    }

    console.log(SignUpData);
    alert("Your registration was succsessful");
    return true;
}
