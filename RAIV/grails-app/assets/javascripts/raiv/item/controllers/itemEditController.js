//= wrapped

angular
    .module("raiv.item")
    .controller("ItemEditController", ItemEditController);

function ItemEditController(Item, $stateParams, $state) {
    var vm = this;

    

    Item.get({id: $stateParams.id}, function(data) {
        vm.item = new Item(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve item with ID " + $stateParams.id}];
    });

    vm.updateItem = function() {
        vm.errors = undefined;
        vm.item.$update(function() {
            $state.go('item.show', {id: vm.item.id});
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
