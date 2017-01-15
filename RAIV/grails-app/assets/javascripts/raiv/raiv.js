//= wrapped
//= require /angular/angular
//= require /raiv/core/raiv.core
//= require /raiv/index/raiv.index
//= require /raiv/card/raiv.card
//= require /raiv/owner/raiv.owner
//= require /raiv/deck/raiv.deck
//= require /raiv/campaign/raiv.campaign
//= require /raiv/character/raiv.character
//= require /raiv/equipment/raiv.equipment
//= require /raiv/item/raiv.item

angular.module("raiv", [
    "raiv.core",
    "raiv.index",
    "raiv.card",
    "raiv.owner",
    "raiv.deck",
    "raiv.campaign",
    "raiv.character",
    "raiv.equipment",
    "raiv.item"
]);
