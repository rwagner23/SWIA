//= wrapped

angular
    .module("raiv.equipment")
    .controller("EquipmentCreateController", EquipmentCreateController);

function EquipmentCreateController(Equipment, $state) {

    var vm = this;
    
    vm.equipment = new Equipment();
    
    vm.saveEquipment = function() {
        vm.errors = undefined;
        vm.equipment.$save({}, function() {
            $state.go('equipment.show', {id: vm.equipment.id});
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
