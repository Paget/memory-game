app.gamePlay = function() {

var previousCard = [];

$('.container').on('click', '.game-tile', function(e){
console.log("onClick", previousCard);
  var card = $(this);
  var twoCardsToCompare;
  var cardCheckbox = card.find(".checkbox");
  var unFlipped = cardCheckbox.prop("checked");
  var iconValue = card.find('.game-icon').text();


//if the array is greater than 0 then there are two cards to compare

  if (previousCard.length > 0) {
    twoCardsToCompare = true;

//if the array is not greater than 0 then there are not two cards to compare

  } else {

    twoCardsToCompare = false;
  }

//if there are not two cards to compare and the chosen cards is unflipped

  if ( !twoCardsToCompare && unFlipped && !card.hasClass('frozen')) {

//add it to the array

    previousCard.push(card);
    cardCheckbox.prop("checked", false);
    return false;

    //otherwise if there are two cards to compare
  } else if (twoCardsToCompare && unFlipped && !card.hasClass('frozen')) {

    cardCheckbox.prop("checked", false);

    setTimeout(function(){

      //and if the value of their icon text is equal
      if (iconValue === previousCard[0].find('.game-icon').text() && iconValue !== "") {

        //add the class of frozen to each card
        card.addClass("frozen");
        previousCard[0].addClass("frozen");
        previousCard = [];

      } else {
        // set both cards backed to unFlipped
        cardCheckbox.prop("checked", true);
        previousCard[0].find('.checkbox').prop("checked", true);
        previousCard = [];
      }
        // empty out the previous card and return

        return false;
      }, 750);

  } else {
    // do nothing, ie., clicked on a card already flipped or a card already matched (frozen)
    return false;

  }

});

};
