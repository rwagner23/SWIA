package raiv


import grails.rest.*
import grails.converters.*

class CampaignController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CampaignController() {
        super(Campaign)
    }
}
