//
// Contact Form Js
//

function sendEmail() {
    Email.send({
        Host: "smtp.yourisp.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}







// let studentsName = ["Oke John", "Donald Jonas", "John Doe", "David Olive", "Emeka John"];
// for (let values of studentsName) {
//     console.log(values);
// }

// const fullName = "schmidtman jonas";
// for (const char of fullName) {
//     console.log("These are the letters: ", char);
// }

// const object = { a: 1, b: 2, c: 3 };
// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }


// let n = 0;
// do {
//     n = n + 2;
//     console.log(n);
// } while (n <= 10);

// firstName["firstCustomer", "email", "contact"] = "David Okiemute", "ego.okiemute@gmail.com", 09034221357;
// console.log(firstName, typeof firstName);



// function validateForm() {
//     const name = document.forms["form-Email-Form"]["name"].value;
//     const email = document.forms["form-Email-Form"]["email"].value;
//     const Message = document.forms["form-Email-Form"]["Message"].value;
//     document.getElementById("error-msg").style.opacity = 0;
//     document.getElementById('error-msg').innerHTML = "";
//     if (name == "" || name == null) {
//         document.getElementById('error-msg').innerHTML = "<div class='status-message cc-error-message form-fail'><div>Oops! Something went wrong while submitting the form*</div></div>";
//         fadeIn();
//         return false;
//     }
//     if (email == "" || email == null) {
//         document.getElementById('error-msg').innerHTML = "<div class='alert alert-danger error_message'><i  data-feather='alert-triangle' class='icon-sm align-middle me-2'></i> Please enter a email*</div>";
//         fadeIn();
//         return false;
//     }
//     if (Message == "" || Message == null) {
//         document.getElementById('error-msg').innerHTML = "<div class='alert alert-danger error_message'><i class='mdi mdi-alert'></i> Please enter a Message*</div>";
//         fadeIn();
//         return false;
//     }
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("simple-msg").innerHTML = this.responseText;
//         document.forms["form-Email-Form"]["name"].value = "";
//         document.forms["form-Email-Form"]["email"].value = "";
//         document.forms["form-Email-Form"]["Message"].value = "";
//     }
// };
// xhttp.open("POST", "php/contact.php", true);
// xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhttp.send("name=" + name + "&email=" + email + "&Message=" + Message);
// return false;
// }

// function fadeIn() {
//     var fade = document.getElementById("error-msg");
//     var opacity = 0;
//     var intervalID = setInterval(function() {
//         if (opacity < 1) {
//             opacity = opacity + 0.5
//             fade.style.opacity = opacity;
//         } else {
//             clearInterval(intervalID);
//         }
//     }, 200);
// }