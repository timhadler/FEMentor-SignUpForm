$(document).ready(function() {
    $("#submitButton").on('click', function () { submitForm() });
});

function submitForm() {
    const data = $('#form').serialize();
    const params = new URLSearchParams(data);

    const fName = params.get('firstName');
    const lName = params.get('lastName');
    const email = params.get('email');
    const password = params.get('password');

    // Process
    if (fName.length == 0) {
        $('#fNameInput').addClass("errorDisplay");
        $('#firstNameErr').css("display", "inline-block");
    }
    if (lName.length == 0) {
        $('#lNameInput').addClass("errorDisplay");
        $('#lastNameErr').css("display", "inline-block");
    }
    if (email.slice(-10) != "@gmail.com" || email.length < 11) {
        $('#emailInput').addClass("errorDisplay");
        $('#emailErr').css("display", "inline-block");
    }
    if (password.length == 0) {
        $('#passwordInput').addClass("errorDisplay");
        $('#passwordErr').css("display", "inline-block");
    }
}