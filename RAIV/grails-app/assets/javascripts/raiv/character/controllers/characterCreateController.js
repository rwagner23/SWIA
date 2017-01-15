//= wrapped

angular
    .module("raiv.character")
    .controller("CharacterCreateController", CharacterCreateController);

function CharacterCreateController(Character, $state, $stateParams, Campaign, Equipment, Item) {

    var vm = this;
    vm.campaignList = Campaign.list();
    vm.equipmentList = Equipment.list();
    vm.itemList = Item.list();
    vm.character = new Character();
    
    if ($stateParams.campaignId) {
        vm.character.campaign = {id: $stateParams.campaignId};
    }
    
    vm.saveCharacter = function() {
        vm.errors = undefined;
        vm.character.$save({}, function() {
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
