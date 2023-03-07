const form = document.querySelector("#form");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const zip = document.querySelector("#zip");
const country = document.querySelector("#country");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  let isEmailValid = emailRegex.test(email.value);


  if (fullname.value === "") {
    alert("Fullname is not valid")
  } else if (email.value === "" || !isEmailValid) {
    alert("email is not valid");
  }

  let data = {
    email: email.value,
    fullname: fullname.value
  }

  return data

});
