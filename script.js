document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "admin" && password === "admin") {
      window.location.href = "landing.html";
    } else {
      document.getElementById("error").textContent = "Username atau password salah!";
    }
  });
  