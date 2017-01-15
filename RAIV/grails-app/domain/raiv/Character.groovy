package raiv


import grails.rest.*

@Resource(uri='/characters', readOnly = false, formats = ['json', 'xml'])
class Character {
	String name
    static belongsTo = [campaign:Campaign]
    static hasMany = [equipment:Equipment,items:Item]
    
}