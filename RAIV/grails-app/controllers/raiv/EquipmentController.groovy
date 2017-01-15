package raiv


import grails.rest.*
import grails.converters.*

class EquipmentController extends RestfulController {
    static responseFormats = ['json', 'xml']
    EquipmentController() {
        super(Equipment)
    }
}
