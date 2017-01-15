//= wrapped
//= require /angular/angular-resource

angular
    .module("raiv.deck")
    .factory("Deck", Deck);

function Deck($resource, domainListConversion, domainToManyConversion) {
    var Deck = $resource(
        "decks/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Card", "cards", "domainToManyConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainToManyConversion("Card", "cards")]}}
    );

    Deck.list = Deck.query;

    Deck.prototype.toString = function() {
        return 'raiv.Deck : ' + (this.id ? this.id : '(unsaved)');
    };

    return Deck;
}
