//= wrapped

angular
    .module("raiv.card")
    .controller("CardListController", CardListController);

function CardListController(Card) {
    var vm = this;

    var max = 10, offset = 0;

    Card.list({max: max, offset: offset}, function(data) {
        vm.cardList = data;
    });
}
