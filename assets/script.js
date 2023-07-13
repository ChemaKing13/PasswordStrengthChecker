function checkPasswordStrength() {
    const password = document.querySelector("input").value;
    const strengthIndicator = document.getElementById("passwordText");
    const container = document.querySelector(".container");
    
    //reset the strength indicator and container color
    strengthIndicator.textContent = "";
    container.style.backgroundColor = ""; 

    //Define the regex for the different password strength
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
    var mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{6,}$");

    if (strongRegex.test(password)) {
        strengthIndicator.textContent = "Your password is strong! 💪🏼 "; 
        strengthIndicator.className = "text strong"; 
        container.style.backgroundColor = "green"; 
    } else if (mediumRegex.test(password)) {
        strengthIndicator.textContent = "Your password is medium 👍🏼"; 
        strengthIndicator.className = "text medium"; 
        container.style.backgroundColor = "orange"; 
    } else {
        strengthIndicator.textContent = "Your password is weak 👎🏼"; 
        strengthIndicator.className = "text weak"; 
        container.style.backgroundColor = "red"; 
    }
}; 
