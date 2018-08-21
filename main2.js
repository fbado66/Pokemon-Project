let div = document.getElementById("mainContainer");

// let values[0] = 4; 

 for(let i = 4; i < 5; i++) {
axios.get(`https://fizal.me/pokeapi/api/${i}.json`)
    .then(function (response) {
        let res = response.data;
        console.log("name:",res.name)
        // console.log(res)
        console.log( "attack-integer:", res.stats[4].base_stat)
        console.log( "defense-integer:", res.stats[3].base_stat)
        console.log("abilities:", res.abilities[0].ability.name,",", res.abilities[1].ability.name )
        console.log( "hp-integer:", res.stats[5].base_stat)
         

        let span = document.createElement("span")
  
        // let attacker = document.createElement("div")
        // myImg = response.data.avatar_url
        // document.getElementById("attack-1").appendChild(ol)
        // myImg.style.height = "300px";
        // myImg.style.width = "300px";
        

    
  


         
            
    //         let divRow = document.createElement("div");
    //         divRow.setAttribute("class", "row margin");
    //         divRow.innerHTML = `<div class="card">
    //         <div class="card-image waves-effect waves-block waves-light">
    //             <img class="activator img" src="${response.data.avatar_url}">
    //         </div>

    //          <div class="card-title">
    //              <span class="card-title activator grey-text text-darken-4">${response.data.name}
    //                  <i class="material-icons right">more_vert</i>
    //              </span>
    //          </div>
            
    //          <div class="card-content">
    //              <span class="card-title activator grey-text text-darken-4"> number ${response.data.public_repos}
    //                  <i class="material-icons right">more_vert</i>
    //              </span>
    //          </div>
            
    //     </div>`
    //     div.appendChild(divRow);
        


    //     mymaindiv = document.getElementById("mainContainer")

    //      b = response.data.html_url;
    //     let myatag = document.createElement("a")
    //     // myatag = response.data.html_url;
    //     myatag.setAttribute("href", b);
    //     myatag.innerHTML = "MY PROFILE";
    //     mymaindiv.appendChild(myatag);
          


    //     // <a class="waves-effect waves-light btn">Git-Hub Go</a>

    // });
    

    // axios.get('https://api.github.com/users/fbado66/repos?access_token=e25544b63fa6849171c385ad167c6b96254d5b6b')
    //   .then(function (response) {
    //     let res2 = response.data[0].clone_url;
    //     console.log(res2)
    //     // console.log (response.data.clone_url)

    //     mymaindiv = document.getElementById("mainContainer")

  
    //    let myatag2 = document.createElement("a")
     
    //    myatag2.setAttribute("href", res2);
    //    myatag2.setAttribute("class", "aClass")
    //    myatag2.innerHTML = "MY REPO";
    //    mymaindiv.appendChild(myatag2);
       



        
      });
    }