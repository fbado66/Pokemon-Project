document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// function changeImage1() {
//   let img = document.getElementById('myImage1');
//   if (img.src.match("charmander2")) {
//       img.src = "charmander-Pokeball.jpg";
//   } else {
//       img.src = "charmander2.jpg";
//   }
// }

// function changeImage2() {
//   let img = document.getElementById('myImage2');
//   if (img.src.match("lapras2")) {
//       img.src = "lapras-pokeball.png";
//   } else {
//     img.src = "lapras2.jpg";
//   }
// }

// function changeImage3() {
//   let img = document.getElementById('myImage3');
//   if (img.src.match("mewtwo2")) {
//      img.src = "mewtwo-pokeball.jpg";
//   } else {
//     img.src = "mewtwo2.jpg";
//   }
// }


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
let ol = document.querySelector("ol")
let franklin = new Franklin()

///////////////////////////////////////////////////////////////////////////////////////////////////

// retrieve data from hosted pokemon-4 json file
axios.get("https://fizal.me/pokeapi/api/4.json")
.then((response) => {

  // creates new li element
  let uno = document.createElement("ol")
  let dos = document.createElement("ol")
  let tres = document.createElement("ol")
  let cuatro = document.createElement("ol")
  let cinco = document.createElement("ol")

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


  // appends created ol to the html ul

  ol.appendChild(uno)
  ol.appendChild(dos)
  ol.appendChild(tres)
  ol.appendChild(cuatro)
  ol.appendChild(cinco)


}).catch((error) => {
  console.log(error)
})


//////////////////////////////////////////////////////////////////////////////////////////////////

// retrieve data from hosted pokemon-131 json file
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

  seis.innerHTML = lapras.name
  siete.innerHTML = lapras.attack  
  ocho.innerHTML = lapras.defense 
  nueve.innerHTML = lapras.abilities
  diez.innerHTML = lapras.Hp

  // appends created ol to the html ul

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

  // creates new ol element
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

  once.innerHTML = mewtwo.name
  doce.innerHTML = mewtwo.attack  
  trece.innerHTML = mewtwo.defense 
  catorce.innerHTML = mewtwo.abilities
  quince.innerHTML = mewtwo.Hp

  // appends created ol to the html ul

  ol.appendChild(once)
  ol.appendChild(doce)
  ol.appendChild(trece)
  ol.appendChild(catorce)
  ol.appendChild(quince)


}).catch((error) => {
  console.log(error)
})


// function myFunction() {
//   document.getElementById("panel").style.display = "block";
// }


function myFunction() {
  var x = document.getElementById("panel");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}




