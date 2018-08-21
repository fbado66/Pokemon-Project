document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


// container object after your trainer name 
class Franklin {
  constructor() {
    this.all = []
  }

  // defines method add to People class
  // it accepts a Person object and adds it to the end
  // of the "all" array
  add(Pokemon) {
    this.all.push(Pokemon)
  }

  get(name) {
    return this.all.find((element) => {
      return element.firstName == name
    })
  }
}

// individual class
class Pokemon {
  constructor(name, attack, defense, abilities, Hp) {
    this.name = name
    this.attack = attack
    this.defense = defense
    this.abilities = abilities
    this.Hp = Hp
  }
}
//first child in order of appending pokemon-1 // 
 let myDiv = document.getElementById("panel")
 var attacker = document.createElement("div")
 attacker.setAttribute("id", "attack-1")       
myDiv.appendChild(attacker)


// second child in order of appending pokemon-1 // 
  let defenser = document.createElement("div")
  defenser.setAttribute("id", "defense-1")       
myDiv.appendChild(defenser)

// third child in order of appending pokemon-1 // 
let ability = document.createElement("div")
ability.setAttribute("id", "ability-1")       
myDiv.appendChild(ability)

// fourth child in order of appending pokemon-1 // 
let hper = document.createElement("div")
hper.setAttribute("id", "hper-1")       
myDiv.appendChild(hper)



// selecting ul from the html side
let ol = document.querySelector("ol")

let franklin = new Franklin()


///////////////////////////////////////////////////////////////////////////////////////////////////

// retrieve data from hosted pokemon-4 json file
axios.get("https://fizal.me/pokeapi/api/4.json")
.then((response) => {
  // creates new li element
  // let uno = document.createElementById("attack-1")

  let uno = document.createElement("div")
  let dos = document.createElement("ol")
  let tres = document.createElement("ol")
  let cuatro = document.createElement("ol")
  let cinco = document.createElement("ol")


  let data = response.data
  console.log (response.data)

  // console.log(data.stats[4].base_stat)
  // creates new Person object
  // based on JSON payload
  let charmander = new Pokemon(
    data.name,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
   [ `${data.abilities[0].ability.name}` , `${data.abilities[1].ability.name}`],
    data.stats[5].base_stat,
  )
  // adds new Person object
  franklin.add(charmander)

  // changes inner html of li to first name
  uno.innerHTML = charmander.name
  dos.innerHTML = charmander.attack  
  tres.innerHTML = charmander.defense 
  cuatro.innerHTML = charmander.abilities
  cinco.innerHTML = charmander.Hp


  // appends created li to the html ul
  ol.appendChild(uno)
  attacker.appendChild(dos)
  defenser.appendChild(tres)
  ability.appendChild(cuatro)
  hper.appendChild(cinco)


}).catch((error) => {
  console.log(error)
})


//////////////////////////////////////////////////////////////////////////////////////////////////



// retrieve data from hosted pokemon-131 json file

// let ul = document.querySelector("ul")
// let franklin = new Franklin()

axios.get("https://fizal.me/pokeapi/api/131.json")
.then((response) => {
  // creates new li element
  let seis = document.createElement("ol")
  let siete = document.createElement("ol")
  let ocho = document.createElement("ol")
  let nueve = document.createElement("ol")
  let diez = document.createElement("ol")


  let data = response.data


  console.log(data.stats[4].base_stat)
  // creates new Person object
  // based on JSON payload
  let lapras = new Pokemon(
    data.name,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
   [ `${data.abilities[0].ability.name}` , `${data.abilities[1].ability.name}`],
    data.stats[5].base_stat,
  )
// console.log(data.stats[4].base_stat)
  // adds new Person object
  franklin.add(lapras)

  // changes inner html of li to first name
  seis.innerHTML = lapras.name
  siete.innerHTML = lapras.attack  
  ocho.innerHTML = lapras.defense 
  nueve.innerHTML = lapras.abilities
  diez.innerHTML = lapras.Hp

  // appends created li to the html ul

  ol.appendChild(seis)
  ol.appendChild(siete)
  ol.appendChild(ocho)
  ol.appendChild(nueve)
  ol.appendChild(diez)


}).catch((error) => {
  console.log(error)
})


/////////////////////////////////////////////////////////////////////////////////////////////////////


// retrieve data from hosted pokemon-150 json file



axios.get("https://fizal.me/pokeapi/api/150.json")
.then((response) => {
  // creates new li element
  let once = document.createElement("ol")
  let doce = document.createElement("ol")
  let trece = document.createElement("ol")
  let catorce = document.createElement("ol")
  let quince = document.createElement("ol")


  let data = response.data


  console.log(data.stats[4].base_stat)
  // creates new Person object
  // based on JSON payload
  let mewtwo = new Pokemon(
    data.name,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
   [ `${data.abilities[0].ability.name}` , `${data.abilities[1].ability.name}`],
    data.stats[5].base_stat,
  )
// console.log(data.stats[4].base_stat)
  // adds new Person object
  franklin.add(mewtwo)

  // changes inner html of li to first name
  once.innerHTML = mewtwo.name
  doce.innerHTML = mewtwo.attack  
  trece.innerHTML = mewtwo.defense 
  catorce.innerHTML = mewtwo.abilities
  quince.innerHTML = mewtwo.Hp

  // appends created li to the html ul

  ol.appendChild(once)
  ol.appendChild(doce)
  ol.appendChild(trece)
  ol.appendChild(catorce)
  ol.appendChild(quince)


}).catch((error) => {
  console.log(error)
})



function myFunction() {
  // myattack1 = document.getElementById("attack-1")
  if (defenser.style.display === "block") {
    defenser.style.display = "none";
  } else {
    defenser.style.display = "block";
  }
}



