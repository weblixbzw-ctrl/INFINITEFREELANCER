// Default login
if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify({
    username: "admin",
    password: "1234"
  }));
}

function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (u === user.username && p === user.password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}

function savePassword() {
  let newPass = document.getElementById("newPass").value;
  let user = JSON.parse(localStorage.getItem("user"));
  user.password = newPass;
  localStorage.setItem("user", JSON.stringify(user));
  alert("Password updated");
}

function addOffer() {
  let offer = {
    url: offerUrl.value,
    details: details.value,
    price: price.value,
    device: device.value,
    country: country.value
  };
  console.log("Offer Added:", offer);
  alert("Offer Added Successfully");
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// Protect dashboard
if (window.location.pathname.includes("dashboard")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}
