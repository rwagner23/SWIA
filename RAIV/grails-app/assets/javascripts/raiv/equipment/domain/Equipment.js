//= wrapped
//= require /angular/angular-resource

angular
    .module("raiv.equipment")
    .factory("Equipment", Equipment);

function Equipment($resource) {
    var Equipment = $resource(
        "equipments/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Equipment.list = Equipment.query;

    Equipment.prototype.toString = function() {
        return 'raiv.Equipment : ' + (this.id ? this.id : '(unsaved)');
    };

    return Equipment;
}
