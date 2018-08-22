document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});



// main container Trainers  
class Trainers {
  constructor() { 
    this.all = []
  }

  //container for me as trainer 
  add(trainer) {
    this.all.push(trainer)
  }

  get(name) {
    return this.all.find((element) => {
      return element.name == name
    })
  }
}

// to define the trainer as individual 
class Trainer {
  constructor(name){
  this.name = name;
  this.pokemon =[];
  }

  //gets the pokemon in the trainer 
  add(pokemon){
  this.pokemon.push(pokemon)
  } 
//adds the pokemon to the pokemon array 
  get(name) {
    return this.pokemon.find((element) => {
      return element.name == name;
    })
  }
}

//me as trainer 
let hakuna_matata = new Trainer("Hakuna_Matata");
console.log(hakuna_matata);


// individual class for all pokemon 
class Pokemon {
  constructor(data) {
    this.name = data.name,
    this.attack = data.stats[4].base_stat,
    this.defense = data.stats[3].base_stat,
    this.abilities = [`${data.abilities[0].ability.name}`+ `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ `${data.abilities[1].ability.name}`],
    this.Hp = data.stats[5].base_stat
  } 
}



// selecting ol from the html side
let ol = document.querySelector("ol")


///////////////////////////////////////////////////////////////////////////////////////////////////

// retrieve data from hosted pokemon-4 json file
axios.get("https://fizal.me/pokeapi/api/4.json")
.then((response) => {

  let data = response.data
  
  let charmander = new Pokemon(data)
 hakuna_matata.add(charmander)
 console.log(charmander)
//  console.log(Trainer.get("charmander"))

 let first_pokemon = document.createElement("ol")
 first_pokemon.innerHTML = [`Name:${charmander.name}`+
 `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ `
 Attack Interger:${charmander.attack}`+
 `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
Defense Integer:   ${charmander.defense}`+
`\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
Abilities:`+  
`\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+
`\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+
`\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
 ${charmander.abilities}`+
 `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
HP Integer:${charmander.Hp}`]

 ol.appendChild(first_pokemon)
 
 


}).catch((error) => {
  console.log(error)
})


//////////////////////////////////////////////////////////////////////////////////////////////////
 let dl = document.querySelector("dl")
// retrieve data from hosted pokemon-131 json file
axios.get("https://fizal.me/pokeapi/api/131.json")
.then((response) => {


  let data = response.data
  let lapras = new Pokemon(data)
  console.log(lapras)
  hakuna_matata.add(lapras)
  // console.log(Trainer.get("lapras"))


let second_pokemon = document.createElement("dl")
second_pokemon.innerHTML = [`Name:${lapras.name}`+
 `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ `
 Attack Interger:${lapras.attack}`+
 `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
Defense Integer:   ${lapras.defense}`+
`\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
Abilities:`+  
`\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+
`\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+
`\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
 ${lapras.abilities}`+
 `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
HP Integer:${lapras.Hp}`]

 dl.appendChild(second_pokemon)

  // console.log(Franklin.get(lapras))  

}).catch((error) => {
  console.log(error)
})


/////////////////////////////////////////////////////////////////////////////////////////////////////
let dt = document.querySelector("dt")
// retrieve data from hosted pokemon-150 json file
axios.get("https://fizal.me/pokeapi/api/150.json")
.then((response) => {

  let data = response.data
  let mewtwo = new Pokemon(data)
  console.log(mewtwo)
  hakuna_matata.add(mewtwo)
  // console.log(Trainer.get("mewtwo"))

  let third_pokemon = document.createElement("dt")
  third_pokemon.innerHTML = [`Name:${mewtwo.name}`+
   `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ `
   Attack Interger:${mewtwo.attack}`+
   `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
  Defense Integer:   ${mewtwo.defense}`+
  `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
  Abilities:`+  
  `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+
  `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+
  `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
   ${mewtwo.abilities}`+
   `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`
  HP Integer:${mewtwo.Hp}`]
  
   dt.appendChild(third_pokemon)


}).catch((error) => {
  console.log(error)
})



function oneFunction() {
  var x = document.getElementById("panel");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

function twoFunction() {
  var y = document.getElementById("panel_2");
  if (y.style.display === "block") {
      y.style.display = "none";
  } else {
      y.style.display = "block";
  }
}

function threeFunction() {
  var z = document.getElementById("panel_3");
  if (z.style.display === "block") {
      z.style.display = "none";
  } else {
      z.style.display = "block";
  }
}