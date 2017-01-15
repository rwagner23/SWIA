//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /raiv/core/raiv.core
//= require /raiv/card/raiv.card
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("raiv.deck", [
    "ui.router",
    "ngResource",
    "raiv.core",
    "raiv.card"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('deck', {
            url: "/deck",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('deck.list', {
            url: "",
            templateUrl: "/raiv/deck/list.html",
            controller: "DeckListController as vm"
        })
        .state('deck.create', {
            url: "/create",
            templateUrl: "/raiv/deck/create.html",
            controller: "DeckCreateController as vm"
        })
        .state('deck.edit', {
            url: "/edit/:id",
            templateUrl: "/raiv/deck/edit.html",
            controller: "DeckEditController as vm"
        })
        .state('deck.show', {
            url: "/show/:id",
            templateUrl: "/raiv/deck/show.html",
            controller: "DeckShowController as vm"
        });
}
