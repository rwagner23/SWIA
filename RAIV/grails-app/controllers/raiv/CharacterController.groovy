package raiv


import grails.rest.*
import grails.converters.*

class CharacterController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CharacterController() {
        super(Character)
    }
}
