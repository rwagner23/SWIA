//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /raiv/core/raiv.core
//= require /raiv/owner/raiv.owner
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("raiv.card", [
    "ui.router",
    "ngResource",
    "raiv.core",
    "raiv.owner"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('card', {
            url: "/card",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('card.list', {
            url: "",
            templateUrl: "/raiv/card/list.html",
            controller: "CardListController as vm"
        })
        .state('card.create', {
            url: "/create",
            params: {"ownerId":null},
            templateUrl: "/raiv/card/create.html",
            controller: "CardCreateController as vm"
        })
        .state('card.edit', {
            url: "/edit/:id",
            templateUrl: "/raiv/card/edit.html",
            controller: "CardEditController as vm"
        })
        .state('card.show', {
            url: "/show/:id",
            templateUrl: "/raiv/card/show.html",
            controller: "CardShowController as vm"
        });
}
