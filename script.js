function getFormvalue() {
    // Get the form element
    var form = document.getElementById('nameForm');

    // Get the values of first name and last name
    var firstName = form.elements['firstName'].value;
    var lastName = form.elements['lastName'].value;

    // Display the alert with the first and last name
    alert(firstName + " " + lastName);
}