let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgbox = document.querySelector(".msg");
let msg = document.querySelector("#msg");

let turnO = true; //playerX and playerO

const winPatterns= [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turnO === true) {   //playerO
            box.innerText = "O";
            turnO = false;
        }else{   //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const resetgame = () => {
    turnO = true;
    enable();
    msgbox.classList.add("hide");
};

const disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congo ${winner}`;
    msgbox.classList.remove("hide");
    disable();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != '' && pos2 != '' && pos3 != ''){
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner!", pos1);
                showWinner(pos1);

            }
        }
    }
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
