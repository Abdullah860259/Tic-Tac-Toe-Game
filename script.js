let boxes = document.querySelectorAll(".box")
let turn = true;
let arr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let winnert = document.getElementById("winnert")
let btn1 = document.getElementById("newGame")
let resetgame = document.getElementById("resetgame")



let showwinner = (pos1) => {
    winnert.classList.add("win")
    winnert.innerText = `Congratulations, "${pos1}" is Winner`
    btn1.classList.remove("hide")
    resetgame.classList.add("hide")
    disable();
    allownewgame();
}

let disable = () => {
    boxes.forEach((val) => {
        val.disabled = true;
    }
    )
    // drawcheck();
}

let draw = (pos1) => {
    winnert.classList.add("win")
    winnert.innerText = `Match is draw `
    resetgame.classList.add("hide")
    btn1.classList.remove("hide")
}

boxes.forEach((val) => {
    val.addEventListener("click", () => {
        console.log("button was clicked")
        if (turn) {
            val.classList.remove("color1")
            val.classList.add("color")
            resetgame.classList.remove("hide")
            val.innerText = "X"
            turn = false
        } else {
            val.classList.remove("color")
            val.classList.add("color1")
            val.innerText = "O"
            turn = true
        }

        val.disabled = true;
        findwinner(arr);
        drawcheck();
    })
})


let findwinner = (arr) => {
    for (const i of arr) {
        let pos1 = boxes[i[0]].innerText
        let pos2 = boxes[i[1]].innerText
        let pos3 = boxes[i[2]].innerText
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos3 === pos2) {
                console.log(`winner is ${pos1}`)
                showwinner(pos1);
            }
        }

    }
}

let drawcheck= ()=>{let l = 0;
for (const j of boxes) {
    if (j.innerText === "X" || j.innerText === "O") {
        l++;
    }
}  
if (l >= 9) {
    draw();
}}

btn1.addEventListener("click", () => {
    turn = true;
    btn1.classList.add("hide")
    boxes.forEach((val) => {
        val.disabled = false
        val.innerText = "";
        winnert.classList.remove("win")
        winnert.innerText = "";

    })
    // main();
})

let allownewgame = () => {
    btn1.innerText = "New Game"
}

resetgame.addEventListener("click",()=>{
    resetgame.classList.add("hide")
    turn = true;
    boxes.forEach((val) => {
        val.disabled = false
        val.innerText = "";
        winnert.classList.remove("win")
        winnert.innerText = "";

    })

})