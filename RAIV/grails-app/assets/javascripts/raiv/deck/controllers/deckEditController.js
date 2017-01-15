//= wrapped

angular
    .module("raiv.deck")
    .controller("DeckEditController", DeckEditController);

function DeckEditController(Deck, $stateParams, $state, Card) {
    var vm = this;

    vm.cardList = Card.list();

    Deck.get({id: $stateParams.id}, function(data) {
        vm.deck = new Deck(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve deck with ID " + $stateParams.id}];
    });

    vm.updateDeck = function() {
        vm.errors = undefined;
        vm.deck.$update(function() {
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
