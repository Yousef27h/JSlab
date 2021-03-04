alert("Welcome Master")

var userPreference;

if (confirm("Do you want to save changes?") == true) {
    userPreference = "Data saved successfully!";
} else {
    userPreference = "Save Cancelled!";
}

var person = prompt("Please enter your name");

if (person != null ) {
    document.write("Hello "+person)


