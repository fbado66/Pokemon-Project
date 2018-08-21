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

// selecting ul from the html side
let ul = document.querySelector("ul")
let franklin = new Franklin()


///////////////////////////////////////////////////////////////////////////////////////////////////

// retrieve data from hosted pokemon-4 json file
axios.get("https://fizal.me/pokeapi/api/4.json")
.then((response) => {
  // creates new li element
  let uno = document.createElement("li")
  let dos = document.createElement("li")
  let tres = document.createElement("li")
  let cuatro = document.createElement("li")
  let cinco = document.createElement("li")


  let data = response.data


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
// console.log(data.stats[4].base_stat)
  // adds new Person object
  franklin.add(charmander)

  // changes inner html of li to first name
  uno.innerHTML = charmander.name
  dos.innerHTML = charmander.attack  
  tres.innerHTML = charmander.defense 
  cuatro.innerHTML = charmander.abilities
  cinco.innerHTML = charmander.Hp



  // appends created li to the html ul

  ul.appendChild(uno)
  ul.appendChild(dos)
  ul.appendChild(tres)
  ul.appendChild(cuatro)
  ul.appendChild(cinco)


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
  let seis = document.createElement("li")
  let siete = document.createElement("li")
  let ocho = document.createElement("li")
  let nueve = document.createElement("li")
  let diez = document.createElement("li")


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

  ul.appendChild(seis)
  ul.appendChild(siete)
  ul.appendChild(ocho)
  ul.appendChild(nueve)
  ul.appendChild(diez)


}).catch((error) => {
  console.log(error)
})


/////////////////////////////////////////////////////////////////////////////////////////////////////


// let ul = document.querySelector("ul")
// let franklin = new Franklin()

axios.get("https://fizal.me/pokeapi/api/150.json")
.then((response) => {
  // creates new li element
  let once = document.createElement("li")
  let doce = document.createElement("li")
  let trece = document.createElement("li")
  let catorce = document.createElement("li")
  let quince = document.createElement("li")


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

  ul.appendChild(once)
  ul.appendChild(doce)
  ul.appendChild(trece)
  ul.appendChild(catorce)
  ul.appendChild(quince)


}).catch((error) => {
  console.log(error)
})






