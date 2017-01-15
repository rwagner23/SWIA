package raiv


import grails.rest.*

@Resource(uri='/equipments',readOnly = false, formats = ['json', 'xml'])
class Equipment {
	String name
}