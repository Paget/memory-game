app.gamePlay = function() {

var twoCards = [];

var compareCards;

$('.container').on('click', '.game-tile', function(e){

 compareCards = (twoCards.length > 0) ? true : false;

  var card = $(this);

  var cardCheckbox = card.find(".checkbox");

  var iconValue = card.find('.game-icon').text();

  var unFlipped = cardCheckbox.prop("checked");


  if ( !compareCards ) {

    if (unFlipped) {

      cardCheckbox.prop('checked', false);

      twoCards.push(iconValue);

    }

      return false;

  } else {

      setTimeout(function(){
        if(unFlipped) {

              cardCheckbox.prop('checked', false);
                //compare the cards displayed

                var previousCard = twoCards.pop();

                if (previousCard === iconValue) {


                  return false;
                } else {

                  cardCheckbox.prop('checked', true);



                  $('.game-tile').each(function(index, card){

                    var current = $(this).find('.game-icon').text();

                    if( current === previousCard) {

                      $(this).find('.checkbox').prop("checked", true);

                    }

                  });

                  twoCards = [];

                }

            }

          }, 1000);


  }










});


};
