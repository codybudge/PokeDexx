function PokemonService() {
//Praivate
var url = 'https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0'




//public

this.getPokemon = function getPokemon(pokemon,cb){
    $.get(baseUrl)
    .then(data =>{
        var res = data.results
        cb(res)
    })
}

this.getDetails = function getDetails(cb){
    $.get(url)
      .then(data =>{
        var res = data
        cb(res)
      })
}

}