package raiv


import grails.rest.*
import grails.converters.*

class OwnerController extends RestfulController {
    static responseFormats = ['json', 'xml']
    OwnerController() {
        super(Owner)
    }
}
