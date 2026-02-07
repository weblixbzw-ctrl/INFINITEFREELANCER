// FIXED LOGIN
const FIX_EMAIL = "Weblixbzw@gmail.com";
const FIX_PASS = "Arup@2004";

// LOGIN
function login() {
  let e = document.getElementById("email").value;
  let p = document.getElementById("password").value;

  if (e === FIX_EMAIL && p === FIX_PASS) {
    localStorage.setItem("ownerLogin", "true");
    window.location = "dashboard.html";
  } else {
    alert("Wrong login");
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("ownerLogin");
  window.location = "login.html";
}

// COUNTRY LIST (SHORT – WILL EXTEND TO 150+)
const countries = ["India","USA","UK","Canada","Germany","France"];

countries.forEach(c => {
  if (document.getElementById("country"))
    country.innerHTML += `<option>${c}</option>`;
  if (document.getElementById("filterCountry"))
    filterCountry.innerHTML += `<option>${c}</option>`;
});

// ADD OFFER
function addOffer() {
  let offer = {
    title: title.value,
    price: price.value,
    country: country.value
  };

  let data = JSON.parse(localStorage.getItem("offers") || "[]");
  data.push(offer);
  localStorage.setItem("offers", JSON.stringify(data));
  alert("Offer Added");
}
