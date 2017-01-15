package raiv


import grails.rest.*
import grails.converters.*

class CardController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CardController() {
        super(Card)
    }
    
    def show(Card card) {
    	JSON.use('deep'){
    		render card as JSON
    	}
    }
}
