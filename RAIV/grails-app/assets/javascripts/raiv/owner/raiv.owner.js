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

angular.module("raiv.owner", [
    "ui.router",
    "ngResource",
    "raiv.core",
    "raiv.card"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('owner', {
            url: "/owner",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('owner.list', {
            url: "",
            templateUrl: "/raiv/owner/list.html",
            controller: "OwnerListController as vm"
        })
        .state('owner.create', {
            url: "/create",
            templateUrl: "/raiv/owner/create.html",
            controller: "OwnerCreateController as vm"
        })
        .state('owner.edit', {
            url: "/edit/:id",
            templateUrl: "/raiv/owner/edit.html",
            controller: "OwnerEditController as vm"
        })
        .state('owner.show', {
            url: "/show/:id",
            templateUrl: "/raiv/owner/show.html",
            controller: "OwnerShowController as vm"
        });
}
