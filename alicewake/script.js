/* REFERENCE:  

<li id="one">Alice in the Dark Place</li>
            <li id="two">Room 777</li>
            <li id="three">Alan, from the Shadows</li>
            <li id="four">Scratch and its Wake</li>
            <li id="five">Mapping The Spiral</li>
            <li id="six">Saga Anderson</li>
            <li id="seven">Bullet of Light</li>
            <li id="eight">Reunion</li>
            
            */

let content = [
  {
    id: 1,
    title: "Alice in the Dark Place",
    content:
      "If you are reading this, it means that Alan failed to escape the Dark Place again. In turn, it means that you've been set back to some point within the spiral.  Don't worry, look inside the shoebox for your camera, your wedding ring and your journal. <p>You need to remember four things:</p> <ol id='chapter1'><li>Your name is Alice Wake. Every time Alan fails to escape, it resets.</li><li>The FBC helped you dive into the Dark Place; no, that's not true. A kind janitor named Ahti told us about Alan, we sort of ... burned out bridges at the Lakehouse.</li><li>Oceanview Motel, Room 777. The Dark Place will try and stop you, use the camera to capture light and shadow.</li><li>Find Warlin Door, offer him your wedding ring again; he helps us find Alan and reground him. Every time, he needs to start at the show.</li><li><b>IMPORTANT ALICE</b>: if you hear a scratching noise, <b>RUN</b> IT IS NOT ALAN. I REPEAT <b>IT IS NOT ALAN</b></li></ol>",
  },

  {
    id: 2,
    title: "Room 777",
    content:
      "Ahti had taken her to a place they called the Oceanview Hotel. According to him, Alice had to avoid someone named Tom, a man who, in Ahti's own words was <i>lukea kuin piru Raamattua </i>, or always looking for a loophole of this place.  <i>Be careful,</i> he had warned her, <i>Tom talks in riddles and rhymes, and he will try to trick you.</i> <p> Alice had found her room, 777, and stepped inside. The room was dimly lit, with a single window overlooking a dark, foggy landscape. As she looked around, she noticed a peculiar painting on the wall; a Spiral, with a door at its center.  <i>Turn on the TV, I hear that tonight In Between With Mr. Door is going to have a special guest.</i></p> <p>For a moment, Alice wondered what she had gotten herself into. She had gone into her worst fear itself, with no plan, no escape and no idea what awaited her. She flopped on the bed, covering her face with a pillow as she screamed into the abyss. There was no way out, only through.",
  },

  {
    id: 3,
    title: "Alan, from the Shadows",
    content: "",
  },

  {
    id: 4,
    title: "Scratch and its Wake",
    content: "",
  },

  {
    id: 5,
    title: "Mapping The Spiral",
    content: "",
  },

  {
    id: 6,
    title: "Saga Anderson",
    content: "",
  },

  {
    id: 7,
    title: "Bullet of Light",
    content: "",
  },

  {
    id: 8,
    title: "Reunion",
    content: "",
  },
];

const listItems = document.querySelectorAll(".documentaryPages ul li");
const divPages = document.getElementsByClassName("pages")[0];

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    const chapterContent = content[parseInt(item.id) - 1];
    console.log(`You clicked on chapter: ${item.id}`);
    divPages.style.bottom = "0%";
    divPages.innerHTML = `<h2>${item.textContent}</h2> <p>
                    ${chapterContent.content}
                    
                    </p> <button class="returnButton" onclick="(() => { divPages.style.bottom = '-500%'; })()">RETURN</button>`;
  });
});
