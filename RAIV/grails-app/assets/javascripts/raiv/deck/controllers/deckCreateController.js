//= wrapped

angular
    .module("raiv.deck")
    .controller("DeckCreateController", DeckCreateController);

function DeckCreateController(Deck, $state, Card) {

    var vm = this;
    vm.cardList = Card.list();
    vm.deck = new Deck();
    
    vm.saveDeck = function() {
        vm.errors = undefined;
        vm.deck.$save({}, function() {
            $state.go('deck.show', {id: vm.deck.id});
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    };
}
