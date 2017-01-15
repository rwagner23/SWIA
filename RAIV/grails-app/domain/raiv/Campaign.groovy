package raiv


import grails.rest.*

@Resource(uri='/campaigns', readOnly = false, formats = ['json', 'xml'])
class Campaign {
	
	String name

	Deck eventDeck
	Deck imperialDeck
	Deck rebelAid
	
	static hasMany =[characters:Character]
	static constraints = {
		eventDeck(nullable:true)
	}

}