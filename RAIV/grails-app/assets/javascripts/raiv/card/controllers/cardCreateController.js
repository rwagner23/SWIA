//= wrapped

angular
    .module("raiv.card")
    .controller("CardCreateController", CardCreateController);

function CardCreateController(Card, $state, $stateParams, Owner) {

    var vm = this;
    vm.ownerList = Owner.list();
    vm.card = new Card();
    
    if ($stateParams.ownerId) {
        vm.card.owner = {id: $stateParams.ownerId};
    }
    
    vm.saveCard = function() {
        vm.errors = undefined;
        vm.card.$save({}, function() {
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
