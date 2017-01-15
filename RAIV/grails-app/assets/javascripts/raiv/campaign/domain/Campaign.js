//= wrapped
//= require /angular/angular-resource

angular
    .module("raiv.campaign")
    .factory("Campaign", Campaign);

function Campaign($resource, domainListConversion, domainConversion, domainToManyConversion) {
    var Campaign = $resource(
        "campaigns/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Deck", "eventDeck", "domainConversion"), domainListConversion("Deck", "rebelAid", "domainConversion"), domainListConversion("Character", "characters", "domainToManyConversion"), domainListConversion("Deck", "imperialDeck", "domainConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainConversion("Deck", "eventDeck"), domainConversion("Deck", "rebelAid"), domainToManyConversion("Character", "characters"), domainConversion("Deck", "imperialDeck")]}}
    );

    Campaign.list = Campaign.query;

    Campaign.prototype.toString = function() {
        return 'raiv.Campaign : ' + (this.id ? this.id : '(unsaved)');
    };

    return Campaign;
}
