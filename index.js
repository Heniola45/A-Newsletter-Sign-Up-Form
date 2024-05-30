function validate(event) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var input = document.getElementById("email").value;
    var errorMessage = document.getElementById("error-message");

    if (!regex.test(input)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = 'block';
        document.getElementById("newsletter-form").classList.add("was-validated");
        event.preventDefault();
    } else {
        errorMessage.textContent = "";
        errorMessage.style.display = 'none';
        document.getElementById("newsletter-form").classList.remove("was-validated");
        window.location.href = "success.html";
    }
}

document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    validate(event);
});




// function validate(){
//     var regex = new RegExp("^[^@]+@[^@]+\.[^@]+$");
//     var input = document.getElementById("email").value;
//     if (!regex.test(input)) {
//         document.getElementById("newsletter-form").className ="was-validated";
//     }
// }