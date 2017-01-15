//= wrapped

angular
    .module("raiv.owner")
    .controller("OwnerShowController", OwnerShowController);

function OwnerShowController(Owner, $stateParams, $state) {
    var vm = this;

    Owner.get({id: $stateParams.id}, function(data) {
        vm.owner = new Owner(data);
    }, function() {
        $state.go('owner.list');
    });

    vm.delete = function() {
        vm.owner.$delete(function() {
            $state.go('owner.list');
        }, function() {
            //on error
        });
    };

}
