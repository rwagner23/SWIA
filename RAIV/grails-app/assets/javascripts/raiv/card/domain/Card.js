//= wrapped
//= require /angular/angular-resource

angular
    .module("raiv.card")
    .factory("Card", Card);

function Card($resource, domainListConversion, domainConversion) {
    var Card = $resource(
        "cards/:id",
        {"id": "@id","name":"@name"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Owner", "owner", "domainConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainConversion("Owner", "owner")]}}
    );

    Card.list = Card.query;

    Card.prototype.toString = function() {
        return 'raiv.Card : ' + (this.id ? this.id : '(unsaved)');
    };

    return Card;
}
