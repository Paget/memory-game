app.showGameBoard = function() {

  var gameBoardPage = $('#gameBoard').html();
  var gameBoardPageTemplate = _.template(gameBoardPage, {variable: 'm'});

  app.gamePlay();

  $('.container').html(gameBoardPageTemplate({

    cards: app.gameDeck()
  }));



};
