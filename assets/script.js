function checkPasswordStrength() {
    const password = document.querySelector("input").value;
    const strengthIndicator = document.getElementById("passwordText");
    const container = document.querySelector(".container");
    const showBtn = document.querySelector(".showBtn");
  
    // Reset the strength indicator and container color
    strengthIndicator.textContent = "";
    container.style.backgroundColor = "";
  
    // Define the regex for the different password strength
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d.]{6,}$/;
    var weakRegex = /^(?=.*[a-z])[A-Za-z\d.]{6,}$/;
  
    if (password === "") {
      // Handle the case when the input is empty
      container.style.backgroundColor = ""; // Reset container color
      showBtn.style.display = "none"; // Hide the Show/Hide button
      return;
    }
  
    if (strongRegex.test(password)) {
        strengthIndicator.textContent = "Your password is strong! 💪🏼";
        strengthIndicator.className = "text strong";
        container.style.backgroundColor = "green";
    } else if (mediumRegex.test(password)) {
        strengthIndicator.textContent = "Your password is medium 👍🏼";
        strengthIndicator.className = "text medium";
        container.style.backgroundColor = "orange";
    } else if (weakRegex.test(password)) {
        strengthIndicator.textContent = "Your password is weak 👎🏼";
        strengthIndicator.className = "text weak";
        container.style.backgroundColor = "red";
    } else {
        // Handle the case when the input does not match any defined regex
        strengthIndicator.textContent = "Please enter a valid password";
        strengthIndicator.className = "text invalid";
        container.style.backgroundColor = "";
    }
      
  
    showBtn.style.display = "block";
    showBtn.onclick = function() {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#23ad5c";
      } else {
        passwordInput.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#000";
      }
    };
  }
  
  
