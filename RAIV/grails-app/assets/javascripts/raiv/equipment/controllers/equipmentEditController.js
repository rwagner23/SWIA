//= wrapped

angular
    .module("raiv.equipment")
    .controller("EquipmentEditController", EquipmentEditController);

function EquipmentEditController(Equipment, $stateParams, $state) {
    var vm = this;

    

    Equipment.get({id: $stateParams.id}, function(data) {
        vm.equipment = new Equipment(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve equipment with ID " + $stateParams.id}];
    });

    vm.updateEquipment = function() {
        vm.errors = undefined;
        vm.equipment.$update(function() {
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
