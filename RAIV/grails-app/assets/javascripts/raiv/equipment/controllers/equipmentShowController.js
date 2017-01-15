//= wrapped

angular
    .module("raiv.equipment")
    .controller("EquipmentShowController", EquipmentShowController);

function EquipmentShowController(Equipment, $stateParams, $state) {
    var vm = this;

    Equipment.get({id: $stateParams.id}, function(data) {
        vm.equipment = new Equipment(data);
    }, function() {
        $state.go('equipment.list');
    });

    vm.delete = function() {
        vm.equipment.$delete(function() {
            $state.go('equipment.list');
        }, function() {
            //on error
        });
    };

}
