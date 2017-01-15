//= wrapped

angular
    .module("raiv.character")
    .controller("CharacterShowController", CharacterShowController);

function CharacterShowController(Character, $stateParams, $state) {
    var vm = this;

    Character.get({id: $stateParams.id}, function(data) {
        vm.character = new Character(data);
    }, function() {
        $state.go('character.list');
    });

    vm.delete = function() {
        vm.character.$delete(function() {
            $state.go('character.list');
        }, function() {
            //on error
        });
    };

}
