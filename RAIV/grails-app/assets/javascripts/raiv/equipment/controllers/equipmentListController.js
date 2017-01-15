//= wrapped

angular
    .module("raiv.equipment")
    .controller("EquipmentListController", EquipmentListController);

function EquipmentListController(Equipment) {
    var vm = this;

    var max = 10, offset = 0;

    Equipment.list({max: max, offset: offset}, function(data) {
        vm.equipmentList = data;
    });
}
