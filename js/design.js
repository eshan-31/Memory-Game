var cards = document.getElementsByClassName("card"); //to store the cards

//to open the cards
for(let i=0;i<cards.length; i++){
cards[i].addEventListener('click',function(){
  cards[i].classList.add("open");
});
}
