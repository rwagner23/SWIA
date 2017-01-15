//= wrapped

angular
    .module("raiv.campaign")
    .controller("CampaignListController", CampaignListController);

function CampaignListController(Campaign) {
    var vm = this;

    var max = 10, offset = 0;

    Campaign.list({max: max, offset: offset}, function(data) {
        vm.campaignList = data;
    });
}
