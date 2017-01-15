package raiv


import grails.rest.*

@Resource(uri='/decks', readOnly = false, formats = ['json', 'xml'])
class Deck {
	String name

	static hasMany = [cards:Card]
}