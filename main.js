let jokes = ["Why don’t scientists trust atoms? Because they make up everything!","I told my computer I needed a break, and it froze!","Why did the scarecrow win an award? Because he was outstanding in his field!","Parallel lines have so much in common… it’s a shame they’ll never meet.","I used to play piano by ear, now I use my hands."];

function generateJoke() {
const randomIndex = Math.floor(Math.random() * jokes.length);
document.getElementById("joke").textContent = jokes[randomIndex];
}