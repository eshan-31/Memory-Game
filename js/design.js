document.body.onLoad = initialize();
var cards = document.getElementsByClassName("card"); //to store the cards
var p=0; //to keep a track of opended cards

//to open the cards
for(let i=0;i<cards.length; i++){
cards[i].addEventListener('click',function(){
  p++;
  cards[i].classList.add("open");
  if(p===2){
            let opened = document.getElementsByClassName("open"); //the opened cards
            if(opened[0].children[0].getAttribute('class') == opened[1].children[0].getAttribute('class')){p=0; opened[0].classList.add("match"); opened[1].classList.add("match"); opened[1].classList.remove("open"); opened[0].classList.remove("open");} //if both cards are same
            else{p=0; opened[0].classList.add("wrong-match"); opened[1].classList.add("wrong-match");
            window.setTimeout(function(){opened[1].classList.remove("wrong-match","open"); opened[0].classList.remove("wrong-match","open");},2000)}
            }

});
}

function initialize(){
  //types of cards
  var set = ['bicycle', 'leaf', 'cube', 'anchor', 'paper-plane-o', 'bolt', 'bomb', 'diamond', 'bicycle', 'leaf', 'cube', 'anchor', 'paper-plane-o', 'bolt', 'bomb', 'diamond'];
  let shuff_array = [];//to store dhuffled shuff_array
  const deck_begin = document.getElementById("deck"); // to store the deck beginning;
  shuff_array = shuffle(set); //to store shuffled cards
  console.log(shuff_array)
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
