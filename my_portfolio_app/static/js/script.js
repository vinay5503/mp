/*typing animation*/
var typed = new Typed(".typing", {
  strings: [
    "",
    "Student",
    "Web Developer",
    "Android App Developer",
    "Cloud Enthusiast",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Get all the navigation links
const navLinks = document.querySelectorAll(".nav li a");

// Loop through each link and add a click event listener
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Remove the 'active' class from all links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the 'active' class to the clicked link
    this.classList.add("active");
  });
});

const navToggler = document.querySelector(".nav-toggler");
const asidex = document.getElementsByClassName("aside")[0];

navToggler.style.transform = "translateX(285px)";
asidex.style.transform = "translateX(0%)";

navToggler.addEventListener("click", function () {
  this.classList.toggle("open");
  console.log(asidex.style.transform);
  if(asidex.style.transform=="translateX(0%)"){
    asidex.style.transform = "translateX(-100%)";
    navToggler.style.transform = "translateX(0px)";
    
 
  }
else if(asidex.style.transform=="translateX(-100%)"){
  asidex.style.transform = "translateX(0%)";
  navToggler.style.transform = "translateX(285px)";
}


});

//  email 
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }

  return cookieValue;
}

const csrftoken = getCookie('csrftoken');
function send_mail() {


  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;
  let bodyx = name + "," + email  + ","+ subject  + ","+ message ; 
  
  
  if (email != "" && message != "" && subject!="" && name!="") {
      // document.getElementById("login_text").textContent = "Sending...";

      fetch('/send_mail_password/', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest', //anything to do here for isolating users
              'X-CSRFToken': csrftoken,

          },
          body: JSON.stringify({ 'post_data': bodyx })
      }).then(response => {
          return response.json()
      })
          .then(sent => {
              if (sent['my_data'] == "yes") {
                console.log("sent")
                alert("Email Sent Successfully ✅")
              }
              else {
                  // document.getElementById("forgot_p").textContent = "Some Error Occurred";
                  console.log("some error occured")
                  alert("🛑Some error occured \n Please try again Later ")

              }
          })
document.getElementById('name').value = "";
document.getElementById('email').value = "";
document.getElementById('subject').value = "";
document.getElementById('message').value = "";
  }
  document.getElementById('name').value = "";
document.getElementById('email').value = "";
document.getElementById('subject').value = "";
document.getElementById('message').value = "";
alert("🛑Some error occured \n Please try again Later ")
}  

let sx = document.getElementById("submitx");
let my_form = document.getElementById("my_form");
my_form.onsubmit = function(event) {
  event.preventDefault();
  send_mail();
}


