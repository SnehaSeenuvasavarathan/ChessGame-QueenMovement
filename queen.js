
positionLog =

    [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];


const queen = [
    {
        qno: 1,
        x: 0,
        y: 4,
        pos: "e8"
    },
    {
        qno: 2,
        x: 0,
        y: 7,
        pos: "h8"
    },
    {
        qno: 3,
        x: 7,
        y: 7,
        pos: "h1"
    }
];

function checkpos() {
    if ((queen[0].x === queen[1].x && queen[0].y === queen[1].y) || (queen[0].x === queen[2].x && queen[0].y === queen[2].y) || (queen[1].x === queen[2].x && queen[1].y === queen[2].y))
        return true;
    else
        return false;
}
function move(q, dir, d) {

    switch (dir) {
        case 'N': if (queen[q].x - d < 0)
            console.log("out of bounds");
        else {
            queen[q].x -= d;
            if (checkpos() == false) {
                queen[q].pos = positionLog[queen[q].x][queen[q].y];
                console.log("Queen " + (q + 1) + " updated to position..." + queen[q].pos);
            } else {
                console.log("Another queen is already present in that position");
                queen[q].x += d;

            }
        }
            break;

        case 'S': if (queen[q].x + d > 7)
            console.log("out of bounds");
        else {
            queen[q].x += d;
            if (checkpos() == false) {
                queen[q].pos = positionLog[queen[q].x][queen[q].y];
                console.log("Queen " + (q + 1) + " updated to position..." + queen[q].pos);
            }
            else {
                console.log("Another queen is already present in that position");
                queen[q].x -= d;
            }
        }
            break;

        case 'E': if (queen[q].y + d > 7)
            console.log("out of bounds");
        else {
            queen[q].y += d;
            if (checkpos() == false) {
                queen[q].pos = positionLog[queen[q].x][queen[q].y];
                console.log("Queen " + (q + 1) + " updated to position..." + queen[q].pos);
            }
            else {
                console.log("Another queen is already present in that position");
                queen[q].y -= d;
            }
        }
            break;

        case 'W': if (queen[q].y - d < 0)
            console.log("out of bounds");
        else {
            queen[q].y -= d;
            if (checkpos() == false) {
                queen[q].pos = positionLog[queen[q].x][queen[q].y];
                console.log("Queen " + (q + 1) + " updated to position..." + queen[q].pos);
            }
            else {
                console.log("Another queen is already present in that position");
                queen[q].y += d;
            }
        }
            break;

        case 'NE': if (queen[q].x - d > 0 || queen[q].y + d < 7)
            console.log("out of bounds");
        else {
            queen[q].y -= d;
            queen[q].x += d;
            if (checkpos() == false) {
                queen[q].pos = positionLog[queen[q].x][queen[q].y];
                console.log("Queen " + (q + 1) + " updated to position..." + queen[q].pos);
            }
            else {
                console.log("Another queen is already present in that position");
                queen[q].y += d;
                queen[q].x -= d;
            }
        }
            break;

        case 'NW': if (queen[q].x - d < 0 || queen[q].y - d < 0)
            console.log("out of bounds");
        else {
            queen[q].y -= d;
            queen[q].x -= d;
            if (checkpos() == false) {
                queen[q].pos = positionLog[queen[q].x][queen[q].y];
                queen[q].pos = positionLog[queen[q].x][queen[q].y];
                console.log("Queen " + (q + 1) + " updated to position..." + queen[q].pos);
            }
            else {
                console.log("Another queen is already present in that position");
                queen[q].y += d;
                queen[q].x += d;
            }
        }
            break;

        case 'SE': if (queen[q].x + d < 7 || queen[q].y + d < 7)
            console.log("out of bounds");
        else {
            queen[q].y += d;
            queen[q].x += d;
            if (checkpos() == false) {
                queen[q].pos = positionLog[queen[q].x][queen[q].y];
                console.log("Queen " + (q + 1) + " updated to position..." + queen[q].pos);
            }
            else {
                console.log("Another queen is already present in that position");
                queen[q].y -= d;
                queen[q].x -= d;
            }
        }
            break;

        case 'SW': if (queen[q].x + d > 7 || queen[q].y - d < 0)
            console.log("out of bounds");
        else {
            queen[q].y -= d;
            queen[q].x += d;
            if (checkpos() == false) {
                queen[q].pos = positionLog[queen[q].x][queen[q].y];
                console.log("Queen " + (q + 1) + " updated to position..." + queen[q].pos);
            }
            else {
                console.log("Another queen is already present in that position");
                queen[q].y += d;
                queen[q].x -= d;
            }
        }
            break;

    }
}

function moveForward(q) {
    let dir = window.prompt("Enter direction in upper case(eg. N, NE, etc)");
    move(q, dir, 1);

}

function jumpForward(q) {
    let dir = window.prompt("Enter direction in upper case(eg. N, NE, etc)");
    let d = parseInt(window.prompt("Enter th number of steps"));
    move(q, dir, d);
}

function showPos(q) {
    console.log("Position of Queen " + (q + 1) + " is " + queen[q].pos);
}

let q = window.prompt("Enter the Queen number(1,2,3)");
console.log("You have chosen Queen" + q);
console.log("Her current status is..");
console.log("x: " + queen[q - 1].x + " y: " + queen[q - 1].y + " pos: " + queen[q - 1].pos);
let option = window.prompt("Enter choice: 1. moveForward 2. jumpForward 3. showPosition");
console.log(option);
switch (option) {
    case '1': moveForward(q - 1);
        break;
    case '2': jumpForward(q - 1);
        break;
    case '3': showPos(q - 1);
        break;
    default: console.log("Not chosen");
}




