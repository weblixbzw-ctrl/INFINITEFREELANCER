// FIXED LOGIN CREDENTIALS
const USERNAME = "WEBLIX";
const PASSWORD = "ARUP2004";

// LOGIN FUNCTION
function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === USERNAME && p === PASSWORD) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong Username or Password");
  }
}

// CHANGE PASSWORD (OPTIONAL – LOCAL ONLY)
function savePassword() {
  const newPass = document.getElementById("newPass").value;

  if (newPass.length < 4) {
    alert("Password too short");
    return;
  }

  localStorage.setItem("customPassword", newPass);
  alert("New password saved (local only)");
}

// ADD OFFER
function addOffer() {
  const offer = {
    url: offerUrl.value,
    details: details.value,
    price: price.value,
    device: device.value,
    country: country.value
  };

  let offers = JSON.parse(localStorage.getItem("offers")) || [];
  offers.push(offer);
  localStorage.setItem("offers", JSON.stringify(offers));

  alert("Offer Added Successfully");

  offerUrl.value = "";
  details.value = "";
  price.value = "";
  country.value = "";
}

// LOGOUT → HOME PAGE
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// PROTECT DASHBOARD
if (window.location.pathname.includes("dashboard")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}
