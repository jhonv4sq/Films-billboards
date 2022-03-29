$(document).ready(function(){
    const json = './json/Films.json';

    ReadJson(json).then(films => {
        show(films);
    });

});
// funcion asincronia para leer el json
async function ReadJson(json){
    const answer = await fetch(json);
    const films = await answer.json();
    return films;
}

function show(films){
    let info;
    let all = "";

    for(let film of films.Films){
        info = "<div class='col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>"+
                            "<div class='card bg-dark text-center'>"+
                                "<img class='card-img-top' src='"+ film.image +"'>"+
                                "<div class='card-body'>"+
                                    "<h5 class='card-title'>"+ film.name +"</h5>"+
                                "</div>"+
                                "<ul class='list-group list-group-flush'>"+
                                    "<li class='list-group-item'>"+ film.rating +"</li>"+
                                    "<li class='list-group-item'>"+ film.distributor +"</li>"+
                                "</ul>"+
                                "<div class='card-footer'>"+
                                    "<small class='text-mute'>"+ film.directors.join(", ") +"</small>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        all += info;
    }
    document.getElementById('films').innerHTML = all;
}