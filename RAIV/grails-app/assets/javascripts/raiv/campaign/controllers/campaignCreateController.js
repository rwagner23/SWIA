//= wrapped

angular
    .module("raiv.campaign")
    .controller("CampaignCreateController", CampaignCreateController);

function CampaignCreateController(Campaign, $state, Deck, Character) {

    var vm = this;
    vm.deckList = Deck.list();
    vm.characterList = Character.list();
    vm.campaign = new Campaign();
    
    vm.saveCampaign = function() {
        vm.errors = undefined;
        vm.campaign.$save({}, function() {
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
