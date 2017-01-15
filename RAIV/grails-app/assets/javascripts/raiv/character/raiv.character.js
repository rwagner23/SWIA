//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /raiv/core/raiv.core
//= require /raiv/campaign/raiv.campaign
//= require /raiv/equipment/raiv.equipment
//= require /raiv/item/raiv.item
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("raiv.character", [
    "ui.router",
    "ngResource",
    "raiv.core",
    "raiv.campaign",
    "raiv.equipment",
    "raiv.item"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('character', {
            url: "/character",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('character.list', {
            url: "",
            templateUrl: "/raiv/character/list.html",
            controller: "CharacterListController as vm"
        })
        .state('character.create', {
            url: "/create",
            params: {"campaignId":null},
            templateUrl: "/raiv/character/create.html",
            controller: "CharacterCreateController as vm"
        })
        .state('character.edit', {
            url: "/edit/:id",
            templateUrl: "/raiv/character/edit.html",
            controller: "CharacterEditController as vm"
        })
        .state('character.show', {
            url: "/show/:id",
            templateUrl: "/raiv/character/show.html",
            controller: "CharacterShowController as vm"
        });
}
