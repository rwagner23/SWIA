//= wrapped

angular
    .module("raiv.deck")
    .controller("DeckShowController", DeckShowController);

function DeckShowController(Deck, $stateParams, $state) {
    var vm = this;

    Deck.get({id: $stateParams.id}, function(data) {
        vm.deck = new Deck(data);
    }, function() {
        $state.go('deck.list');
    });

    vm.delete = function() {
        vm.deck.$delete(function() {
            $state.go('deck.list');
        }, function() {
            //on error
        });
    };

}
