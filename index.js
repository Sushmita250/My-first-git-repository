//infopage of breeds//
function showInfoPage(imageNumber) {
    window.location.href = `info${imageNumber}.html`;
}
//Contact form//
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var valid = true;

    document.getElementById("form-message").innerHTML = "";

    if (name === "") {
        document.getElementById("form-message").innerHTML += "<p class='error'>Name must be filled out</p>";
        valid = false;
    }
    if (email === "") {
        document.getElementById("form-message").innerHTML += "<p class='error'>Email must be filled out</p>";
        valid = false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("form-message").innerHTML += "<p class='error'>Please enter a valid email address</p>";
        valid = false;
    }
    if (message === "") {
        document.getElementById("form-message").innerHTML += "<p class='error'>Message must be filled out</p>";
        valid = false;
    }
    return valid;
}
//Avaible puppies button//
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('availablePuppiesButton');
    button.addEventListener('click', () => {
        window.location.href = 'Avaiblepup.html';
    });
});
