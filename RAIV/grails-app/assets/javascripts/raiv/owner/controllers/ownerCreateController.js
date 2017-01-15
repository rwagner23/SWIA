//= wrapped

angular
    .module("raiv.owner")
    .controller("OwnerCreateController", OwnerCreateController);

function OwnerCreateController(Owner, $state, Card) {

    var vm = this;
    vm.cardList = Card.list();
    vm.owner = new Owner();
    
    vm.saveOwner = function() {
        vm.errors = undefined;
        vm.owner.$save({}, function() {
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
