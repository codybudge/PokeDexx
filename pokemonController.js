function PokemonController() {
    //Private
    var pokemonService = new PokemonService()

    function drawPokemon(arr) {
        var template = "<ul>";
        debugger
        for (let i = 0; i < arr.results.length; i++) {
            const pokemon = arr.results[i];
            template += `
            <li onclick="#">${pokemon.name}</li>
        `;   
    }
    template +="</ul>";
    console.log(template)
    document.getElementById('pokemon').innerHTML = template;
    }
    
    //public
    
    this.getDetails = function getDetails(url){
        dndService.getDetails(url, drawDetails)
      }
      pokemonService.getDetails(drawPokemon)
}