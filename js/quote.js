const quotes = [
    {
        quote: "Brilliant things happen in calm minds. Be calm. You're brilliant.",
        author: "Headspace"
    },
    {
        quote: "To know yourself is to be confident. To be confident is to fearlessly express your potential.",
        author: "Andy Puddicombe"
    },
    {
        quote: "A day thinking about what could happen, should happen, or what might have been is a day missed.",
        author: "Headspace"
    },
    {
        quote: "Creativity is as boundless, spacious and limitless as the sky. We are born with it. It cannot be lost and it cannot be destroyed. It can only be forgotten.",
        author: "Headspace"
    },
    {
        quote: "Distractions are everywhere. Notice what takes your attention, acknowledge it, and then let it go.",
        author: "Andy Puddicombe"
    },
    {
        quote: "Look up and smile. But only if you feel like it.",
        author: "Headspace"
    },
    {
        quote: "To know one's own mind is nothing short of life-changing",
        author: "Headspace"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quoteNumber = Math.floor(Math.random() * quotes.length);

quote.innerText = `${quotes[quoteNumber].quote}`;
author.innerText = `- ${quotes[quoteNumber].author}`;