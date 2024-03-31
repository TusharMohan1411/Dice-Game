// 2 random number bnane hain, dono numbers ke hisab se images change krni hai
// array ka use kr skta hu images store krne ke liye
// dono numbers ko compare krna hai fir uske hisab se text ko change krna hai.


var btn = document.querySelector("button");
var p1num = Math.floor(Math.random() * 6) + 1;
var p2num = Math.floor(Math.random() * 6) + 1;


console.log(p1num, p2num)

document.querySelector(".img1").src = "images/dice" + p1num + ".png"

document.querySelector(".img2").src = "images/dice" + p2num + ".png"

if (p1num > p2num) {
    document.querySelector(".container h1").textContent = "Player 1 Wins!"
} else if (p2num > p1num) {
    document.querySelector(".container h1").textContent = "Player 2 Wins!"
} else {
    document.querySelector(".container h1").textContent = "Draw"
}


function diceeGame() {

}

btn.addEventListener("click", () => {
    window.location.reload();
});