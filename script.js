function getFormvalue() {
    // Get the form element
    const form = document.getElementById('loginForm');

    // Get the values of the input fields
    const firstName = form.elements['firstName'].value;
    const lastName = form.elements['lastName'].value;

    // Display the alert with the first and last names
    alert(`${firstName} ${lastName}`);
}
