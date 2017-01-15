//= wrapped

angular
    .module("raiv.deck")
    .controller("DeckListController", DeckListController);

function DeckListController(Deck) {
    var vm = this;

    var max = 10, offset = 0;

    Deck.list({max: max, offset: offset}, function(data) {
        vm.deckList = data;
    });
}
