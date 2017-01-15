//= wrapped

angular
    .module("raiv.card")
    .controller("CardShowController", CardShowController);

function CardShowController(Card, $stateParams, $state) {
    var vm = this;

    Card.get({id: $stateParams.id}, function(data) {
        vm.card = new Card(data);
    }, function() {
        $state.go('card.list');
    });

    vm.delete = function() {
        vm.card.$delete(function() {
            $state.go('card.list');
        }, function() {
            //on error
        });
    };

}
