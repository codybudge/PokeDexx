function PokemonController() {
    //Private
    var pokemonService = new PokemonService()

    function drawPokemon(arr) {
        var template = "<ul>";
        for (let i = 0; i < arr.length; i++) {
            const pokemon = arr[i];
            template += `
            <li onclick="#">${pokemon.name}</li>
        `;   
    }
    template +="</ul>";
    document.getElementById('pokemon').innerHTML = template;
    }
    
    //public
    
    this.getDetails = function getDetails(url){
        dndService.getDetails(url, drawDetails)
      }
      pokemonService.getDetails(drawPokemon)
}