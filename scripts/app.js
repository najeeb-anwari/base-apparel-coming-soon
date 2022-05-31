const btn = document.querySelector("form button");
btn.addEventListener("click", (e) => {
    e.preventDefault(); 
    const formInput = document.querySelector("input");
    
    if (!formInput.checkValidity()) {
        document.querySelector(".input-group").classList.add("error");
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".error-message").innerHTML = formInput.validationMessage;
    }
});