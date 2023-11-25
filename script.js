const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const genericError = document.getElementById('genericError');

  if (!name || !email || !password || !confirmPassword) {
    genericError.style.display = 'block';
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  } else console.log("password matched");

  const token = generateAccessToken();
  console.log('token no: ' + token);

  // Store user details in local storage
  let userData = {
    name: name,
    email: email,
    token: token,
    password: password,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  console.log(`user Data : ${userData}`);

//   redirect to page after few seconds
  setTimeout(function () {
    window.location.href = './profile.html';
  }, 1000);
});

// token generation fn
function generateAccessToken(){
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const tokenArray = [];

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    tokenArray.push(charset[randomIndex]);
  }

  return tokenArray.join("");
}
    window.onload = function () {
        // This function will be executed after the page has loaded
        // alert("on signUp page")
        if (localStorage.getItem("userData")) {
          window.location.href = "./profile.html";
          alert("Already Loggedin");
        }
    };
