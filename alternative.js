// container class
class People {
  constructor() {
    this.all = []
  }

  // defines method add to People class
  // it accepts a Person object and adds it to the end
  // of the "all" array
  add(pokemon) {
    this.all.push(pokemon)
  }

  get(name) {
    return this.all.find((element) => {
      return element.firstName == name
    })
  }
}

// individual class
class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }
}

// selecting ul from the html side
let ul = document.querySelector("ul")
let people = new People()

// retrieve data from hosted person-1 json file
axios.get("https://fizal.me/pokeapi/api/4.json")
.then((response) => {
  // creates new li element
  let li = document.createElement("li")
  let data = response.data

  // creates new Person object
  // based on JSON payload
  let orlando = new Person(
    data["name"],
    data["stats[4].base_stat"],
    data["stats[3].base_stat"],
    data["stats[3].base_stat"],
    data[""]
  )

  // adds new Person object
  people.add(orlando)

  // changes inner html of li to first name
  li.innerHTML = orlando.firstName
    
  // appends created li to the html ul
  ul.appendChild(li)
}).catch((error) => {
  console.log(error)
})

// retrieve data from hosted person-2 json file
axios.get("https://raw.githubusercontent.com/orlandocaraballo/sei/master/outlines/18-working-with-ajax/json/person-2.json")
.then((response) => {
  // creates new li element
  let li = document.createElement("li")
  let data = response.data

  // creates new Person object
  // based on JSON payload
  let trish = new Person(
    data["first-name"],
    data["last-name"],
    data["age"],
    data["gender"]
  )

  // adds new Person object
  people.add(trish)

  // changes inner html of li to first name
  li.innerHTML = trish.firstName
    
  // appends created li to the html ul
  ul.appendChild(li)
}).catch((error) => {
  console.log(error)
})

// retrieve data from hosted person-3 json file
axios.get("https://raw.githubusercontent.com/orlandocaraballo/sei/master/outlines/18-working-with-ajax/json/person-3.json")
.then((response) => {
  // creates new li element
  let li = document.createElement("li")
  let front = document.createElement("front")
  let data = response.data

  // creates new Person object
  // based on JSON payload
  let denisse = new Person(
    data["first-name"],
    data["last-name"],
    data["age"],
    data["gender"]
  )

  // adds new Person object
  people.add(denisse)

  // changes inner html of li to first name
  li.innerHTML = denisse.lastName
    
  // appends created li to the html ul
  ul.appendChild(li)
  // changes inner html of li to first name
  front.innerHTML = denisse.age
    
  // appends created li to the html ul
  ul.appendChild(front)


  // console log orlando
  console.log(people.get("orlando"))
}).catch((error) => {
  console.log(error)
})

axios.get(`https://fizal.me/pokeapi/api/4.json`)
    .then(function (response) {
        let res = response.data;
        console.log("name:",res.name)
        // console.log(res)
        console.log( "attack-integer:", res.stats[4].base_stat)
        console.log( "defense-integer:", res.stats[3].base_stat)
        console.log("abilities:", res.abilities[0].ability.name,",", res.abilities[1].ability.name )
        console.log( "hp-integer:", res.stats[5].base_stat)
         

        let li = document.createElement("li")
  
        // let myImg = document.createElement("img")
        // myImg = response.data.avatar_url
        // document.getElementById("imgg").appendChild(myImg)
        // myImg.style.height = "300px";
        // myImg.style.width = "300px";
        ul.appendChild(li)
        li.innerHTML = res.stats[4].base_stat
      });
    