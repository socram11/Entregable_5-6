
  function formFunction() {
    var inputs = document.getElementsByTagName('input');
    var name = document.getElementById("First name")
    var lastName = document.getElementById("Last name")
    var email = document.getElementById("Email addres")
    var phone = document.getElementById("Phone number")
    var company = document.getElementById("Company name")

    const UserformData = [
        {FirstName:name.value},
        {LastName:lastName.value},
        {EmailAdress:email.value},
        {CompanyName:company.value},
        {PhoneNumber:phone.value}
    ];

    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                alert("Please fill all required fields");
                return false;
            }
        }
    }
    console.log(UserformData);
    alert("First name: " + name.value + "\n" +
          "Last name: " + lastName.value + "\n" +
          "Email address: " + email.value + "\n" + 
          "Company name: " + company.value + "\n" + 
          "Phone number: " + phone.value);
    return true;
}

