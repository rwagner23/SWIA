//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /raiv/core/raiv.core
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("raiv.item", ["ui.router", "ngResource", "raiv.core"]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('item', {
            url: "/item",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('item.list', {
            url: "",
            templateUrl: "/raiv/item/list.html",
            controller: "ItemListController as vm"
        })
        .state('item.create', {
            url: "/create",
            templateUrl: "/raiv/item/create.html",
            controller: "ItemCreateController as vm"
        })
        .state('item.edit', {
            url: "/edit/:id",
            templateUrl: "/raiv/item/edit.html",
            controller: "ItemEditController as vm"
        })
        .state('item.show', {
            url: "/show/:id",
            templateUrl: "/raiv/item/show.html",
            controller: "ItemShowController as vm"
        });
}
