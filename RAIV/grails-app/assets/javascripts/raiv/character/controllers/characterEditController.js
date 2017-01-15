//= wrapped

angular
    .module("raiv.character")
    .controller("CharacterEditController", CharacterEditController);

function CharacterEditController(Character, $stateParams, $state, Campaign, Equipment, Item) {
    var vm = this;

    vm.campaignList = Campaign.list();
    vm.equipmentList = Equipment.list();
    vm.itemList = Item.list();

    Character.get({id: $stateParams.id}, function(data) {
        vm.character = new Character(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve character with ID " + $stateParams.id}];
    });

    vm.updateCharacter = function() {
        vm.errors = undefined;
        vm.character.$update(function() {
            $state.go('character.show', {id: vm.character.id});
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
