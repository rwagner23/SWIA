//= wrapped

angular
    .module("raiv.owner")
    .controller("OwnerListController", OwnerListController);

function OwnerListController(Owner) {
    var vm = this;

    var max = 10, offset = 0;

    Owner.list({max: max, offset: offset}, function(data) {
        vm.ownerList = data;
    });
}
