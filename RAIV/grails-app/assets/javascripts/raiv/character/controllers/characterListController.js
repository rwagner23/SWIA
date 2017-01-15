//= wrapped

angular
    .module("raiv.character")
    .controller("CharacterListController", CharacterListController);

function CharacterListController(Character) {
    var vm = this;

    var max = 10, offset = 0;

    Character.list({max: max, offset: offset}, function(data) {
        vm.characterList = data;
    });
}
