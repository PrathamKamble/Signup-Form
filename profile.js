// showing user details
try {
    const userDetails = document.querySelector(".details");
  
    userData = JSON.parse(localStorage.getItem("userData"));
  
    userDetails.innerHTML = `
      <p>Full Name : ${userData.name}</p>
      <p>Email : ${userData.email}</p>
      <p>Token : ${userData.token}</p>
      <p>Password : ${userData.password}</p>
  `;
  
    // logout button Fn
    const logoutBtn = document.querySelector(".logout-button");
  
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("userData");
      window.location.href = "./index.html";
    });
  } catch {
    window.onload = function () {
      // This function will be executed after the page has loaded
      // alert("on profile page")
      if (!localStorage.getItem("userData")) {
        window.location.href = "./index.html";
        alert("Please Login");
      } else {
        window.location.href = "./profile.html";
      }
    };
  }
  