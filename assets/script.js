function checkPasswordStrength() {
    //use query selectors to retrieve password input and the other elements 
    const password = document.querySelector("input").value;
    const strengthIndicator = document.getElementById("passwordText");
    const container = document.querySelector(".container");
    const showBtn = document.querySelector(".showBtn");
  
    // Reset the strength indicator and container color
    strengthIndicator.textContent = "";
    container.style.backgroundColor = "";
  
    // Define the regex for the different password strength
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //(?=.*[a-z] at least one lowercase letter)
    //(?=.*[A-Z]) at least one uppercase letter
    //(?=.*\d) at least one digit)
    //(?=.*[@$!%*?&]) at least one digit 
    //[A-Za-z\d@$!%*?&]{8,} combination of at least 8 characters
    var mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d.]{6,}$/;
    //(?=.*[a-z] at least one lowercase letter)
    //(?=.*[A-Z]) at least one uppercase letter
    //(?=.*\d) at least one digit)
    //[A-Za-z\d.]{6,} a combination of a minimum length of 6 characters
    var weakRegex = /^(?=.*[a-z])[A-Za-z\d.]{6,}$/;
    //(?=.*[a-z]) at least one lowercase letter
    //[A-Za-z\d.]{6,} a combination of minimum length 6 characters
  
    if (password === "") {
      // Handle the case when the input is empty
      container.style.backgroundColor = ""; // Reset container color
      showBtn.style.display = "none"; // Hide the Show/Hide button
      return;
    }
  
    //Evaluates the strength of the password using the defined regular expressions 
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
    //event handler to the showBtn, when the button is clicked the function will be executed
    showBtn.onclick = function() {
        //if password is "password" means thaht is currently hidden 
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#23ad5c";
        //this line executes when the current type is not password, what means thaht is visible
      } else {
        passwordInput.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#000";
      }
    };
  }
  
  
