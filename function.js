
var forma = document.getElementById("form");
var loginButton = document.getElementById("login-btn");
var popMsgAbove = document.getElementById("popup-msg-above");
var popMsgBelow = document.getElementById("popup-msg-below");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    var username = forma.username.value;
    var password = forma.password.value;

    if (username === "user" && password === "user") {
        popMsgBelow.style.display = "block"; 
        setTimeout(function(){ popMsgBelow.style.display = "none"; }, 2000);
    } 
    else if(username === "admin" && password === "admin"){
        popMsgAbove.style.display = "block"; 
        setTimeout(function(){ popMsgAbove.style.display = "none"; }, 2000);
    }
    else {
        alert("Username or Password is incorrect!");
    }
})
