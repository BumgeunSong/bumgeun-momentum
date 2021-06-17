const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit (event) {
    event.preventDefault(); //이벤트의 기본 행동이 일어나지 못하게 한다. ex) submit 할때 refresh.
    
    // save username for later
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    // hide the form 
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // show the greetings 
    paintGreetings(username);
    
}

function onLinkClick (event) {
    event.preventDefault();
    console.log(event);
    
}

function paintGreetings (username) {
    // make greetings appear
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    /// show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    /// show the greetings
    paintGreetings(savedUsername);
}