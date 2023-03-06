let URL = "5ba0d81e5b8c476ea399f1533cefd254"


function news(URL){
    fetch(URL)
    .then((response) => response.json())
    .then((data)=>{
        console.log(data)
    })
}


let url = "https://pokeapi.co/api/v2/pokemon/"; //api for the data******************

function fetchpoke() {
  //generate function start*****************
  let name = document.getElementById("val").value.toLowerCase();
  fetch(url + name)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".pokemon-data").innerHTML = `
      <div>
      <img class="pokemone-gen" id= "poke-img"
      src= "${data.sprites.other["official-artwork"].front_default}" 
      alt= "${data.name}">
      <p class="pokemone-gen" id="name"> Pokemone = ${data.name} </p>
      <p class="pokemone-gen"> Attack =  ${data.abilities[0].ability.name}
      <p class="pokemone-gen"> Attack = ${data.abilities[1].ability.name}
      </p>
      </div>
      `;
    })
    .catch((err) => {
      //error catching block********************
      console.log("Enter a valid name \n", err);
      document.querySelector("#info-web").innerText = "Enter a valid name ";
      setTimeout(() => {
        document.querySelector("#info-web").innerText = "Search Again";
      }, 1500);
    });
}

document.querySelector("#input-after").addEventListener("click", fetchpoke);
document.querySelector("#val").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    fetchpoke();
  }
});