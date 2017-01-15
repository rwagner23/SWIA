package raiv


import grails.rest.*

@Resource(uri='/items',readOnly = false, formats = ['json', 'xml'])
class Item {
	String name
}