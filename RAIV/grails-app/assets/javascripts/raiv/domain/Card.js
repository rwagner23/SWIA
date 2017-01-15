//= wrapped

angular
    .module("raiv")
    .factory("Card", Card);

function Card(DomainServiceFactory) {
    return DomainServiceFactory("card/:id", {"id": "@id"});
}
