package raiv


import grails.rest.*

@Resource(uri='/owners',readOnly = false, formats = ['json', 'xml'])
class Owner {
	
	String name
		
	static hasMany = [cards:Card]

}