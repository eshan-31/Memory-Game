document.body.onLoad = initialize(); //when the page loads
var cards = document.getElementsByClassName("card"); //to store the cards
let moves = 0; //inital moves
var interval;
var modal = document.getElementById("myModal");
var star = document.querySelector(".stars");
let movcount = document.getElementById("moves");
movcount.innerHTML = moves;
var flag = false; //for timer on first click

//to open the cards
for (let i = 0; i < cards.length; i++) {
    var p = 0; //to keep a track of opended cards
    cards[i].addEventListener('click', function() {
        if (!flag) {
            start_timer();
            flag = true;
        } //start the timer when a card is clicked
        p++;
        cards[i].classList.add("open");
        if (p === 2) {
            moves++;
            var starset = document.getElementsByClassName('fa-star');
            if (moves == 12) {
                starset[2].classList.add("star-change");
            }
            if (moves == 18) {
                starset[1].classList.add("star-change");
            }
            movcount.innerHTML = moves; //show the moves on the page
            let opened = document.getElementsByClassName("open"); //the opened cards
            if (opened[0].children[0].getAttribute('class') == opened[1].children[0].getAttribute('class')) {
                p = 0;
                opened[0].classList.add("match");
                opened[1].classList.add("match");
                opened[1].classList.remove("open");
                opened[0].classList.remove("open"); //if cards match
            } else {
                p = 0;
                opened[0].classList.add("wrong-match");
                opened[1].classList.add("wrong-match"); //if cards dont match
                window.setTimeout(function() {
                    opened[1].classList.remove("wrong-match", "open");
                    opened[0].classList.remove("wrong-match", "open");
                }, 800)
            }
        }
        var matched = document.getElementsByClassName("match");
        if (matched.length == 16) {
            finalResult();
        } //when all the cards are opened
    });
}

function initialize() {
    //types of cards
    var set = ['bicycle', 'leaf', 'cube', 'anchor', 'paper-plane-o', 'bolt', 'bomb', 'diamond', 'bicycle', 'leaf', 'cube', 'anchor', 'paper-plane-o', 'bolt', 'bomb', 'diamond'];
    let shuff_array = []; //to store dhuffled shuff_array
    const deck_begin = document.getElementById("deck"); // to store the deck beginning;
    shuff_array = shuffle(set); //to store shuffled cards
    console.log(shuff_array);
    for (let j = 0; j < shuff_array.length; j++) {
        let li_element = document.createElement("li");
        li_element.classList.add("card");
        let item_element = document.createElement("i");
        item_element.classList.add("fa", "fa-" + shuff_array[j]);
        li_element.appendChild(item_element);
        deck_begin.appendChild(li_element);
    }
}

//shuffling code taken from w3resource.com
function shuffle(arra1) {
    var ctr = arra1.length,
        temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

//to star the stopwatch timer
function start_timer() {
    let timecount = document.getElementById("timer");
    var time = "00:00:00"; //inital time
    timecount.innerHTML = time;
    let seconds = 0; //inital time
    let minutes = 0; //initial time
    let hours = 0; //initial time
    interval = setInterval(function() {
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
        if (seconds > 9 && minutes > 9 && hours > 9) {
            timecount.innerHTML = hours + ":" + minutes + ":" + seconds;
        } else if (minutes > 9 && seconds > 9) {
            timecount.innerHTML = "0" + hours + ":" + minutes + ":" + seconds;
        } else if (seconds > 9) {
            timecount.innerHTML = "0" + hours + ":0" + minutes + ":" + seconds;
        } else {
            timecount.innerHTML = "0" + hours + ":0" + minutes + ":0" + seconds;
        }
    }, 1000);
}

//for displaying the modal
function finalResult() {
    var finalTime; //for modal
    var finalMoves; //for modal
    var finalStars; //for modal
    clearInterval(interval);
    finalTime = timer.innerHTML;
    finalMoves = movcount.innerHTML;
    finalStars = star.innerHTML;
    document.querySelector(".moves-input").innerHTML = finalMoves;
    document.querySelector(".star-input").innerHTML = finalStars;
    document.querySelector(".time-input").innerHTML = finalTime;
    modal.classList.add("show"); //show the modal
}

function closeModal() {
    modal.classList.remove("show");
} //close the modal
