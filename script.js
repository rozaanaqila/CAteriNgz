// toggle class active

const navbarNav = document.querySelector
('.navbar-nav');
// ketika hamburger-menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// Register Page
function validateAll() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const gender = document.getElementById("gender");
    const dob = document.getElementById("dob");
    const privacy = document.getElementById("privacy");
    const form = document.getElementById("registration-form");

    if (name.value.trim() === "" 
        || email.value.trim() === "" 
        || address.value.trim() === "" 
        || gender.value === "none" 
        || dob.value === "" 
        || !privacy.checked) {
        alert("All fields must be filled and privacy policy must be accepted!");
    } 
    else if (!email.value.endsWith("@gmail.com")) {
        alert("Email must be in @gmail.com");
    } 
    else {
        form.submit();
    }
}
