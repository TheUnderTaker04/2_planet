

// async function getPokemon(){
//     let respone = await fetch('https://pokeapi.co/api/v2/pokemon/234/');
//     let pokemonData = await respone.json();
//    let pokemon_img = pokemonData.sprites.front_default;
//     console.log(pokemon_img);
//     let image = document.getElementById("pokemon_img");
//     console.log(image);
//     image.src = pokemon_img;
 
// }

// getPokemon();


//new!!!!

let liList = document.getElementsByTagName("li");
for(let i=0;i<liList.length;i+=1){


console.log(liList[i]);
liList[i].style.color="blue"
}
// loops
// Innitual condition
// for(let i = 0; i < 6 ; i+=1){
//     console.log(i)
// }

let btnCheck = document.getElementById('btn_check');
btnCheck.addEventListener('click', () => {
  
    let input= document.getElementById('temp');
    let temp = Number(input.value);
    if (temp < 15 ) {
        console.log('Ui da lanh qua');
    }
    else {
        if (temp<27) {
            console.log("Cool");
        }
        else {
            console.log("Hot")
        }
    }
})