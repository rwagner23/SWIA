package raiv


import grails.rest.*
import grails.converters.*

class DeckController extends RestfulController {
    static responseFormats = ['json', 'xml']
    DeckController() {
        super(Deck)
    }
}
