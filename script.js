
function showMessage() {
    document.getElementById("message").textContent =
        "Welcome! Your sign-up page is working.";
}

function selectContact(name) {
    document.getElementById("contactMessage").textContent =
        "You selected " + name + ".";
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("message").textContent =
        "Thank you, " + name + "! Your form was submitted.";
});
