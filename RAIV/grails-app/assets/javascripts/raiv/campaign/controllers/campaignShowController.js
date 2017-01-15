//= wrapped

angular
    .module("raiv.campaign")
    .controller("CampaignShowController", CampaignShowController);

function CampaignShowController(Campaign, $stateParams, $state) {
    var vm = this;

    Campaign.get({id: $stateParams.id}, function(data) {
        vm.campaign = new Campaign(data);
    }, function() {
        $state.go('campaign.list');
    });

    vm.delete = function() {
        vm.campaign.$delete(function() {
            $state.go('campaign.list');
        }, function() {
            //on error
        });
    };

}
