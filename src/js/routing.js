
// Default route
app.router.add('', function () {
    console.log("hello");
    document.title = 'Memory Home';
    app.showGameStart();

});

app.router.add('game/:difficulty', function (game) {
    document.title = 'Memory Game';
    app.showGameBoard(game.params.difficulty);
});
