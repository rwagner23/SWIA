//= wrapped
//= require /angular/angular-resource

angular
    .module("raiv.character")
    .factory("Character", Character);

function Character($resource, domainListConversion, domainConversion, domainToManyConversion) {
    var Character = $resource(
        "characters/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Campaign", "campaign", "domainConversion"), domainListConversion("Equipment", "equipment", "domainToManyConversion"), domainListConversion("Item", "items", "domainToManyConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainConversion("Campaign", "campaign"), domainToManyConversion("Equipment", "equipment"), domainToManyConversion("Item", "items")]}}
    );

    Character.list = Character.query;

    Character.prototype.toString = function() {
        return 'raiv.Character : ' + (this.id ? this.id : '(unsaved)');
    };

    return Character;
}
