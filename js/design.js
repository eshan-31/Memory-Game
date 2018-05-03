document.body.onLoad = initialize();
var cards = document.getElementsByClassName("card"); //to store the cards

//to open the cards
for(let i=0;i<cards.length; i++){
cards[i].addEventListener('click',function(){
  cards[i].classList.add("open");
});
}

function initialize(){
  //types of cards
  var set = ['bicycle', 'leaf', 'cube', 'anchor', 'paper-plane-o', 'bolt', 'bomb', 'diamond', 'bicycle', 'leaf', 'cube', 'anchor', 'paper-plane-o', 'bolt', 'bomb', 'diamond'];
  let shuff_array = [];//to store dhuffled shuff_array
  const deck_begin = document.getElementById("deck"); // to store the deck beginning;
  shuff_array = shuffle(set); //to store shuffled cards
  for(let j=0; j<shuff_array.length; j++){
	let li_element= document.createElement("li");
  li_element.classList.add("card");
	let item_element= document.createElement("i");
	item_element.classList.add("fa", "fa-"+ shuff_array[j]);
	li_element.appendChild(item_element);
	deck_begin.appendChild(li_element);}
};

//shuffling code taken from w3resource.com
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
};
