//= wrapped

angular
    .module("raiv.card")
    .controller("CardEditController", CardEditController);

function CardEditController(Card, $stateParams, $state, Owner) {
    var vm = this;

    vm.ownerList = Owner.list();

    Card.get({id: $stateParams.id}, function(data) {
        vm.card = new Card(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve card with ID " + $stateParams.id}];
    });

    vm.updateCard = function() {
        vm.errors = undefined;
        vm.card.$update(function() {
            $state.go('card.show', {id: vm.card.id});
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
