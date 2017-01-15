//= wrapped
//= require /angular/angular-resource

angular
    .module("raiv.item")
    .factory("Item", Item);

function Item($resource) {
    var Item = $resource(
        "items/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Item.list = Item.query;

    Item.prototype.toString = function() {
        return 'raiv.Item : ' + (this.id ? this.id : '(unsaved)');
    };

    return Item;
}
