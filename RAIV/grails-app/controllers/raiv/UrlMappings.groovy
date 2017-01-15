package raiv

class UrlMappings {

    static mappings = {
        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")

        "/"(view: '/index')
        "500"(view: '/error')
        "404"(view: '/notFound')
        "/cards"(resources:"card")
        "/owners"(resources:"owner")
        "/decks"(resources:"deck")
        "/campaigns"(resources:"campaign")
        "/characters"(resources:"character")
        "/equipments"(resources:"equipment")
        "/items"(resources:"item")
    }
}
