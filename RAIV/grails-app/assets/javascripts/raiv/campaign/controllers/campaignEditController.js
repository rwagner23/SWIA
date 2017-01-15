//= wrapped

angular
    .module("raiv.campaign")
    .controller("CampaignEditController", CampaignEditController);

function CampaignEditController(Campaign, $stateParams, $state, Deck, Character) {
    var vm = this;

    vm.deckList = Deck.list();
    vm.characterList = Character.list();

    Campaign.get({id: $stateParams.id}, function(data) {
        vm.campaign = new Campaign(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve campaign with ID " + $stateParams.id}];
    });

    vm.updateCampaign = function() {
        vm.errors = undefined;
        vm.campaign.$update(function() {
            $state.go('campaign.show', {id: vm.campaign.id});
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
