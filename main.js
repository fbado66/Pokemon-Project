document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

// main container Trainers  
class Trainer{
    constructor(list_names) { 
    this.name = list_names; 
}

  all() {  
    return this.pokemon
}

  get(name) {
    return this.all.find((element) => {
      return element.name == name
    })
  }
}

class Pokemon {
  constructor(data) {
    this.name = data.name,
    this.attack = data.stats[4].base_stat,
    this.defense = data.stats[3].base_stat,
    this.abilities = [`${data.abilities[0].ability.name}`+ `\xa0`+ `${data.abilities[1].ability.name}`],
    this.Hp = data.stats[5].base_stat
  } 
   getName() {
    return this.name;
   }
}

let pokemon_array  = []

///////////////////////////////////////////////////////////////////////////////////////////////////
let charmander = axios.get("https://fizal.me/pokeapi/api/4.json")
.then((response) => {

 data = response.data
 let poke = new Pokemon(data);

 let panel = document.getElementById("panel");
   let divInfo1 = document.createElement("div");
     divInfo1.setAttribute("class", "center");
     divInfo1.innerHTML =        
       `<div > 
           <li> ${poke.name} </li>
           <li> Attack-Integer: ${poke.attack} </li>
           <li> Defense-Integer: ${poke.defense} </li>
           <li> Abilities: ${poke.abilities} </li>
           <li> HP-Integer: ${poke.Hp} </li>
         </div>
                             `
     panel.appendChild(divInfo1);

     pokemon_array.push(data)
  }).catch((error) => {
  })


//////////////////////////////////////////////////////////////////////////////////////////////////
let lapras = axios.get("https://fizal.me/pokeapi/api/131.json")
.then((response) => {

  data = response.data
  let poke = new Pokemon(data);
  
  let panel_2 = document.getElementById("panel_2");
    let divInfo2 = document.createElement("div");
      divInfo2.setAttribute("class", "center");
      divInfo2.innerHTML = 
      `<div > 
        <li> ${poke.name} </li>
        <li> Attack-Integer: ${poke.attack} </li>
        <li> Defense-Integer: ${poke.defense} </li>
        <li> Abilities: ${poke.abilities} </li>
        <li> HP-Integer: ${poke.Hp} </li>
        </div>
                  `  
      panel_2.appendChild(divInfo2);

      pokemon_array.push(data)
   }).catch((error) => {
   })
   

/////////////////////////////////////////////////////////////////////////////////////////////////////
let mewtwo = axios.get("https://fizal.me/pokeapi/api/150.json")
.then((response) => {

  data = response.data
  let poke = new Pokemon(data);

 let panel_3 = document.getElementById("panel_3");
   let divInfo3 = document.createElement("div");
     divInfo3.setAttribute("class", "center");
     divInfo3.innerHTML =        
       `<div > 
           <li> ${poke.name} </li>
           <li> Attack-Integer: ${poke.attack} </li>
           <li> Defense-Integer: ${poke.defense} </li>
           <li> Abilities: ${poke.abilities} </li>
           <li> HP-Integer: ${poke.Hp} </li>
         </div>
                             `
     panel_3.appendChild(divInfo3);

     pokemon_array.push(data)
  }).catch((error) => {
  })

  setTimeout(function(){
    
    let hakuna_matata = new Trainer(pokemon_array);
    console.log(hakuna_matata);

  }, 2800)
  
  
 