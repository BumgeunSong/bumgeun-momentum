
const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg"
]

const backgroundImgNumber = Math.floor(Math.random() * images.length);

const backgroundImgUrl = `url('img/${images[backgroundImgNumber]}')`;

document.body.style.backgroundSize = "cover";
document.body.style.backgroundImage = backgroundImgUrl;
