const shiny = document.getElementById("shiny");
const content = document.getElementById("content");
const nuts = document.getElementById("nuts");
const cat = document.getElementById("cat");

let shinyCount = 20;
let nutsCount = 20;
let shinyCountChange = 0;
let nutsCountChange = 0;
let day = 0;

// show credits
function showCredits() {}

// start game
function startGame() {
  content.innerHTML =
    "<h1>PERCH QUEST</h1> <p>You are a young crow looking for a new perch. Your goal is to find a perch that meets all your needs.</p> <p/> <button onclick='begin()'>Start Game</button> ";
  shiny.innerHTML =
    "<h2>SHINIES</h2> <p>shinies are the currency of the crow world. the game ends when you have no shinies</p>";
  nuts.innerHTML =
    "<h2>NUTS</h2> <p>nuts are the food of the crow world. the game ends when you have no nuts.</p><p/> ";
  cat.innerHTML =
    "<h2>INCOME</h2> <p>how many shinies you get per day! you need this to be able to afford the crow lifestyle</p><p/>";
}

function getProperty() {
  let dieRoll = Math.floor(Math.random() * 6);
  let property = locations[dieRoll];

  return property;
}

function getEvent() {
  let dieRoll = Math.floor(Math.random() * 6);
  let event = chance[dieRoll];
  return event;
}

function begin() {
  let diceRoll = Math.floor(Math.random() * 6);
  let home = locations[diceRoll];
  content.innerHTML = `<h1>Day ${day}</h1><p>You're finally out of the nest (the Ravens didn't like the fact you were living too close to them). Your local possum has told you that you can go to the Raccoon Real Estate Agent to find you some prime spots!</p> <ul><li>
  ${home.name}</li><li>${home.description}</li><li>Cost: ${home.cost} shinies</li><li>Food Availability: ${home.nuts} nuts</ul> </p> 
  <button onclick="gameplay('${home.name}',${home.cost},${home.nuts}, ${home.income})">Move in?</button> &nbsp; <button onclick="begin()">Find another spot</button>`;
  shiny.innerHTML = `<h1>${shinyCount}</h1><h3>Shinies</h3>`;
  nuts.innerHTML = `<h1> ${nutsCount}</h1><h3>Nuts</h3>`;
  cat.innerHTML = `You need to find a place to live and scavenge!</p>`;
}

function gameplay(name, cost, food, income) {
  day = day + 1;
  if (shinyCount < 0 || nutsCount < 0 || day > 30) {
    content.innerHTML = `<h1>GAME OVER</h1> <p>You have run out of shinies or nuts. Better luck next time!</p> <button onclick="startGame()">Restart Game</button>`;
    shiny.innerHTML = `<h1>${shinyCount}</h1><h3>Shinies</h3>`;
    nuts.innerHTML = `<h1> ${nutsCount}</h1><h3>Nuts</h3>`;
    cat.innerHTML = `<h1>${income * day}</h1><h3>total income</h3>`;

    if (day > 30) {
      content.innerHTML = `<h1>${day}</h1>
        <p>Your story became a viral sensation, and many humans empathized with your flight, calling for better housing availability. Raven Landlord Corporation's stocks plummeted, and they were forced to change their business model to a more ethical one. You lived the rest of your days happily, knowing you made a difference in the world. The end.</p> <br/><button onclick="startGame()">Play Again?</button>`;
    } else {
      content.innerHTML = `<h1>${day}</h1><p>You were found by Raccoon Real Estate Agent, and you were moved into public perching in the zoo. You live with 19 other crows, and you scavenge food from the visitors. You live a long life, but you always wonder what could have been if you had found a better perch. The end.</p><br/><button onclick="startGame()">Play Again?</button>"`;
    }
  } else {
    if (day % 2 == 0) {
      shinyCount = shinyCount + (income - cost);
      nutsCount = nutsCount + food;
      shiny.innerHTML = `<h1>${shinyCount}</h1><h3>Shinies</h3>`;
      nuts.innerHTML = `<h1> ${nutsCount}</h1><h3>Nuts</h3>`;
      cat.innerHTML = `<h1>${income}</h1> <h3>Income</h3>`;
      shinyCount = shinyCount;
      nutsCount = nutsCount;
      content.innerHTML = `<p><h1>Day ${day}</h1>
    <p>You are currently living at the <b>${name}</b>. It costs you <b>${cost}</b> shinies per day, and you find <b>${food}</b> nuts per day. You make <b>${income}</b> shinies per day from scavenging. So far, you've made <b>${
        income * day
      }</b> shinies from scavenging over ${day} days. It's a great life, so far - but you're a crow. Maybe, just maybe you want some excitement</p>
  <button onclick="gameplay('${name}',${cost},${food},${income})">Next Day</button> &nbsp; &nbsp; <button onclick="getANewPerch()">Find a new perch</button> &nbsp; &nbsp; <button onclick="tradeNutsForShinies('${name}',${cost},${food},${income})">Trade 3 nuts for 2 shinies</button>`;
    } else {
      shinyCount = shinyCount + (income - cost);
      nutsCount = nutsCount + food;
      shiny.innerHTML = `<h1>${shinyCount}</h1><h3>Shinies</h3>`;
      nuts.innerHTML = `<h1> ${nutsCount}</h1><h3>Nuts</h3>`;
      cat.innerHTML = `<h1>${income}</h1> <h3>Income</h3>`;
      let event = getEvent();
      shinyCount = shinyCount + event.shinyChange;
      nutsCount = nutsCount + event.nutsChange;
      content.innerHTML = `<p><h1>Day ${day}</h1><h2>${event.name}</h2> <p>${
        event.description
      }</p> <ul><li>Shinies: ${event.shinyChange}</li><li>Nuts: ${
        event.nutsChange
      }</li></ul>

    <p>You are currently living at the <b>${name}</b>. It costs you <b>${cost}</b> shinies per day, and you find <b>${food}</b> nuts per day. You make <b>${income}</b> shinies per day from scavenging. So far, you've made <b>${
        income * day
      }</b> shinies from scavenging over ${day} days.</p>
  <button onclick="gameplay('${name}',${cost},${food},${income})">Next Day</button> &nbsp; &nbsp; <button id="newPerch" onclick="getANewPerch()">Find a new perch</button>  &nbsp; &nbsp; <button onclick="tradeNutsForShinies('${name}',${cost},${food},${income})">Trade 3 nuts for 2 shinies</button>`;
    }
  }
}

function getANewPerch() {
  let diceRoll = Math.floor(Math.random() * 6);
  let home = locations[diceRoll];
  day = day + 1;
  content.innerHTML = `<h1>Day ${day}</h1><p>You're moving! This will cost you -1 shiny and -1 nuts to move your stuff over. Every time you click "Find Another Spot", you lose 1 shinies! You can only move once a day, so make it count!</p> <ul><li>
  ${home.name}</li><li>${home.description}</li><li>Cost: ${
    home.cost
  } shinies</li><li>Food Availability: ${home.nuts} nuts</ul> </p> 
<button onclick="gameplay('${home.name}',${home.cost + 1},${home.nuts}, ${
    home.income
  })">Move in?</button>`;
}

function tradeNutsForShinies(name, cost, food, income) {
  if (nutsCount >= 2) {
    nutsCount = nutsCount - 3;
    shinyCount = shinyCount + 2 + (income - cost);
    shiny.innerHTML = `<h1>${shinyCount}</h1><h3>Shinies</h3>`;
    nuts.innerHTML = `<h1> ${nutsCount}</h1><h3>Nuts</h3>`;
    day = day + 1;
    content.innerHTML = `<h1>Day ${day}</h1><p>You go see some woodland creatures to see what you can trade for shinies. You have more than enough to share, but what you really want are more shinies. Vintage shinies. Smart shinies. All shinies. You can only really carry 3 nuts per day. You don't gain any new nuts to eat. The squirrels thank you.</p>
<button onclick="gameplay('${home.name}',${home.cost},${home.nuts}, ${home.income})">Next Day</button>`;
  } else {
    alert("You don't have enough nuts to trade!");
  }
}
