const shiny = document.getElementById("shiny");
const content = document.getElementById("content");
const nuts = document.getElementById("nuts");
const cat = document.getElementById("cat");

let shinyCount = 10;
let nutsCount = 10;
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
  if (shinyCount < 0 || nutsCount < 0) {
    content.innerHTML = `<h1>GAME OVER</h1> <p>You have run out of shinies or nuts. Better luck next time!</p> <button onclick="startGame()">Restart Game</button>`;
    shiny.innerHTML = `<h1>${shinyCount}</h1><h3>Shinies</h3>`;
    nuts.innerHTML = `<h1> ${nutsCount}</h1><h3>Nuts</h3>`;
    cat.innerHTML = `<h1>${income * day}</h1><p>total income</p>`;

    if (day > 10) {
      content.innerHTML =
        "<p>You were found by some kind humans and sent to live in an Animal Sanctuary to live the rest of your days being an ambassador for Millennial Humans. Your story became a viral sensation, and many humans empathized with your flight, calling for better housing availability. Raven Landlord Corporation's stocks plummeted, and they were forced to change their business model to a more ethical one. You lived the rest of your days happily, knowing you made a difference in the world. The end.</p>";
    } else {
      content.innerHTML =
        "<p>You were found by Raccoon Real Estate Agent, and you were moved into public perching in the zoo. You live with 19 other crows, and you scavenge food from the visitors. You live a long life, but you always wonder what could have been if you had found a better perch. The end.</p>";
    }
  } else {
    shinyCount = (shinyCount + income) - cost;
    nutsCount = nutsCount + food;
    shiny.innerHTML = `<h1>${shinyCount}</h1><h3>Shinies</h3>`;
    nuts.innerHTML = `<h1> ${nutsCount}</h1><h3>Nuts</h3>`;
    cat.innerHTML = `<h1>${income}</h1> <h3>Income</h3>`;
    let event = getEvent();
    shinyCount = shinyCount + event.shinyChange;
    nutsCount = nutsCount + event.nutsChange;
    content.innerHTML = `<p><h2>${event.name}</h2> ${event.description}</p> <ul><li>Shinies: ${event.shinyChange}</li><li>Nuts: ${event.nutsChange}</li></ul>
    </p> <button onclick="gameplay('${name}',${cost},${food},${income})">Next Day</button>`;
  }
}
