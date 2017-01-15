//= wrapped
//= require /angular/angular-resource

angular
    .module("raiv.owner")
    .factory("Owner", Owner);

function Owner($resource, domainListConversion, domainToManyConversion) {
    var Owner = $resource(
        "owners/:id",
        {"id": "@id","name":"@name"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Card", "cards", "domainToManyConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainToManyConversion("Card", "cards")]}}
    );

    Owner.list = Owner.query;

    Owner.prototype.toString = function() {
        return 'raiv.Owner : ' + (this.id ? this.id : '(unsaved)');
    };

    return Owner;
}
