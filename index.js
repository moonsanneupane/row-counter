//document.getElementById("count-el").innerText = 5

// function increment() {
//     console.log("The button was clicked.")
// }

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;


function increment()
{
    count += 1;
    countEl.textContent = count;
}

function decrement()
{
    count -= 1;
    countEl.textContent = count;
}

function reset()
{   
    count = 0;
    countEl.textContent = count;
}
function save()
{
    let countStr = count + "-";
    reset();
    saveEl.textContent += countStr; 
}






// let count = 0;
// let transfer;
// let countEl = document.getElementById("count-el");
// let prevCount = 0;
// let prev = "Previous Entries:";
// prevEl = document.getElementById("prev-el");

// function incrementCount() {
   
//     count +=1;
//     prevCount +=1;
//     countEl.innerText = count;
// }
// prevEl.innerText = prev;
// function save()  {
//     console.log(count);
//     transfer = prevCount;
//     prevCount = 0;
//     prevEl.innerText += "-" + transfer;
// }


// // function countDown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// countDown();
// countDown();

// function abc() {
//     console.log(42);
// }
// abc();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }
// logLapTime();

// let lapsCompleted = 0;

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1;
//     // console.log(lapsCompleted);
// }
// incrementLap();
// incrementLap();
// incrementLap();

// console.log(lapsCompleted);

// let username = "per";
// let message = "You have three notifications";

// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser);

// let name = "Moonsan";
// let greeting = "Hi, my name is ";

// let myGreeting = greeting + name;
// console.log(myGreeting);

// let point = 4;
// let bonus = "10";
// let bonusPoint = point + bonus;
// console.log(bonusPoint);