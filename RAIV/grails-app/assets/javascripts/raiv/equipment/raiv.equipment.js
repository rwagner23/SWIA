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

angular.module("raiv.equipment", ["ui.router", "ngResource", "raiv.core"]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('equipment', {
            url: "/equipment",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('equipment.list', {
            url: "",
            templateUrl: "/raiv/equipment/list.html",
            controller: "EquipmentListController as vm"
        })
        .state('equipment.create', {
            url: "/create",
            templateUrl: "/raiv/equipment/create.html",
            controller: "EquipmentCreateController as vm"
        })
        .state('equipment.edit', {
            url: "/edit/:id",
            templateUrl: "/raiv/equipment/edit.html",
            controller: "EquipmentEditController as vm"
        })
        .state('equipment.show', {
            url: "/show/:id",
            templateUrl: "/raiv/equipment/show.html",
            controller: "EquipmentShowController as vm"
        });
}
