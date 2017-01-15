//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /raiv/core/raiv.core
//= require /raiv/deck/raiv.deck
//= require /raiv/character/raiv.character
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("raiv.campaign", [
    "ui.router",
    "ngResource",
    "raiv.core",
    "raiv.deck",
    "raiv.character"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('campaign', {
            url: "/campaign",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('campaign.list', {
            url: "",
            templateUrl: "/raiv/campaign/list.html",
            controller: "CampaignListController as vm"
        })
        .state('campaign.create', {
            url: "/create",
            templateUrl: "/raiv/campaign/create.html",
            controller: "CampaignCreateController as vm"
        })
        .state('campaign.edit', {
            url: "/edit/:id",
            templateUrl: "/raiv/campaign/edit.html",
            controller: "CampaignEditController as vm"
        })
        .state('campaign.show', {
            url: "/show/:id",
            templateUrl: "/raiv/campaign/show.html",
            controller: "CampaignShowController as vm"
        });
}
