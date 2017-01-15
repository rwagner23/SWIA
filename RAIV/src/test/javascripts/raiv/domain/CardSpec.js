describe("raiv module", function() {
    var $httpBackend;

    beforeEach(angular.mock.module("raiv", function() {
    }));

    beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("Card domain", function() {

        var Card;

        beforeEach(angular.mock.inject(function(_Card_) {
            Card = _Card_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
