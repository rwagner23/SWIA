package raiv


import grails.rest.*
import grails.converters.*

class ItemController extends RestfulController {
    static responseFormats = ['json', 'xml']
    ItemController() {
        super(Item)
    }
}
