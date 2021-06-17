const clock = document.querySelector("#clock");

function getClock () {
    const date = new Date();
    const dateSeconds = String(date.getSeconds()).padStart(2, "0");
    const dateMinutes = String(date.getMinutes()).padStart(2,"0");
    const dateHours = String(date.getHours()).padStart(2,"0");
    clock.innerText = `${dateHours}:${dateMinutes}:${dateSeconds}`;

}

setInterval(getClock, 1000);
