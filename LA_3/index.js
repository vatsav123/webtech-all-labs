const form = document.getElementById('sampleForm');
form.addEventListener('submit', function(event) {
event.preventDefault();
if (validateForm()) {
Alert('Form submitted successfully!');
form.reset();
}
});
function validateForm() {
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;
if (!name || !email || !password || !confirmPassword) { //for all fields
Alert('All fields are required!');
return false;
}
//for password
if (password !== confirmPassword) {
Confirm('Passwords do not match. Do you want to continue?');
return false;
}
//password length
if (password.length < 8) {
Alert('Password must be at least 8 characters long!');
return false;
}
return true; //returns true if all satisfies
}
//these functions help in improving dialog box
function Alert(message) {
Outputs
:
1.
2.
Git hub link: https://github.com/vatsav123/webtech-all-labs.git
console.log(`Alert: ${message}`);
}
function Confirm(message) {
console.log(`Confirm: ${message}`);
}
function Response(message) {
console.log(`Response: ${message}`);
}