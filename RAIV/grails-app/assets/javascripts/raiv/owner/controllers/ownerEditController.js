//= wrapped

angular
    .module("raiv.owner")
    .controller("OwnerEditController", OwnerEditController);

function OwnerEditController(Owner, $stateParams, $state, Card) {
    var vm = this;

    vm.cardList = Card.list();

    Owner.get({id: $stateParams.id}, function(data) {
        vm.owner = new Owner(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve owner with ID " + $stateParams.id}];
    });

    vm.updateOwner = function() {
        vm.errors = undefined;
        vm.owner.$update(function() {
            $state.go('owner.show', {id: vm.owner.id});
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
