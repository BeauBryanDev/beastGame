console.log("Hello World");
function startGame() {

    const creaturesByPower = {
        Fire: ["Phoenix", "Sphinx", "Dragon"],
        Water: ["catFish", "Piranha", "eel", "Hippo"],
        Snow: ["Seal", "whiteBear", "orca", "blueWhale","Ice Dragon"],
        Forest: ["Fox", "Wolf", "Grizzly Bear", "Deer"],
        Air : [ "Eagle", "Owl", "Hawk", "Falcon"],
        Earth: ["Elephant", "Rhino", "Gorilla", "Lion"],
        tree : ["Oak", "Pine", "Maple", "Birch"],
        rock : ["Granite", "Marble", "Slate", "Sandstone"],
        light : ["Sun", "Moon", "Star", "Lightning"],
        dark : ["Shadow", "Night", "Eclipse", "Black Hole"],
        space : ["Alien","Galaxy", "Nebula", "Quasar", "Black Hole"],
        time : ["Past", "Present", "Future", "Era"],
        Poison: ["Snake", "Scorpion", "Spider", "Wasp","SeaUrchin"],
        Ice: ["Iceberg", "Glacier", "Ice Cube", "Ice Cream"],
        Lava: ["Volcano", "Magma", "Lava Flow", "Lava Lamp"],
        Desert: ["Cactus", "YellowScorpion", "desertsnake", "Vulture", "Camel"],
        Jungle: ["Tiger", "Monkey", "Parrot", "Anaconda"],
        Mountain: ["Goat", "Eagle", "Bear", "Mountain Lion"],
        Ocean: ["Shark", "Whale", "Octopus", "Jellyfish"],
        Sky: ["Cloud", "Rainbow", "Sunset", "Meteor"],
        Swamp: ["Alligator", "Mosquito", "Frog", "Flamingo", "crocodrile"],
        Volcano: ["Lava", "Ash", "Smoke", "Fire"],
        Forest: [ "Bison", "Deer", "Fox", "Wolf"],
        Jungle: ["Tiger", "Monkey", "Parrot", "giraffe"],
        Sea: ["Fish", "Shark", "Whale", "Octopus", "Jellyfish", "elver", "squid"],
        wWind: ["Breeze", "Gust", "Tornado", "Hurricane"],
        Storm: ["Rain", "Flood", "Tsunami", "Waterfall"],
        Earthquake: ["Tremor", "Quake", "Aftershock", "Fault"],
        Blizzard: ["Snow", "Ice", "Cold", "Frost"],
        Tornado: ["Twister", "Vortex", "Funnel", "Cyclone"],
        Hurricane: ["Typhoon", "Cyclone", "Storm", "Tornado"],
    };

    let selectFire = document.getElementById("fire-btn--select");

    selectFire.addEventListener("click", function() {
        console.log("Fire selected");
        alert("Fire selected");
    });

    let selectWaterBtn = document.getElementById("water-btn--select");
    selectWaterBtn.addEventListener("click", selectWater );

    const creatureContainer = document.getElementById("Choose-Creature");

    const powerButtons = document.querySelectorAll(".rootElements button");

    alert("Welcome to the Creature Game");
    alert("Select a power to see the creatures");

    powerButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedPower = button.textContent.trim(); 
            console.log(selectedPower);
            console.log(creaturesByPower[selectedPower]);
            showCreaturesOnConsole(selectedPower);
            //showCreaturesOnAlert(selectedPower);
            checkedSelectedCreature();
            getSelectedCreature();
            showCreatures(selectedPower);

        });
    });

    function getCreaturesByPower(power) {

        return creaturesByPower[power];

    }

    function showCreaturesOnConsole(power) {

        const creatures = getCreaturesByPower(power);

        creatures.forEach(creature => {

            console.log(creature);

        });

    }   

    function showCreaturesOnAlert(power) {  
        
        const creatures = getCreaturesByPower(power);

        alert(creatures.join("\n"));

    }   

    function checkedSelectedCreature() {

        const selectedCreature = document.querySelector("input[name='creature']:checked");

        if (!selectedCreature) {

            alert("Please select a creature I ");
            return;
        }
        alert(`You selected I : ${selectedCreature.id}`);

    }

    function getSelectedCreature() { 

        const selectedCreature = document.querySelector("input[name='creature']:checked");

        if (!selectedCreature) {

            alert("Please select a creature II ");
            return;
        } 
        else {

            alert(`You selected II : ${selectedCreature.id}`);
            return selectedCreature.id;
        }
        

    }

    // Ensure creatures are displayed before attempting to get the selected creature
    showCreatures("Fire"); // Replace "Fire" with the desired default power if needed
    const myCreature = getSelectedCreature();
    console.log(myCreature);

    if (myCreature) {
        const userCreature = myCreature;
        console.log(`User selected creature: ${userCreature}`);
    }

    //this Function() is to dynamically display the creatures based on the power selected ...
    function showCreatures(power) {
        if (!creaturesByPower[power]) return; 
    
        //Clear the container

        //Avoid Template Literals, it is a major CyberSecurity concern as it can be used to inject malicious codeXXS to daface my game webpage , 
        //It is not secure.  interms of security, it is not recommended to use Template Literals
        //Instead use the DOM API to create elements and append them to the container
        // creatureContainer.innerHTML = `<h2>Choose your Creature</h2>`;
    
        // creaturesByPower[power].forEach(creature => {
        //     const creatureDiv = document.createElement("div");
        //     creatureDiv.classList.add("creature-card");
        //     creatureDiv.innerHTML = `
        //         <input type="radio" name="creature" id="${creature.toLowerCase()}" />
        //         <label for="${creature.toLowerCase()}">${creature}</label>
        //         <img src="./creatures/${creature.toLowerCase()}.svg" alt="${creature} Creature" class="creature-image">
        //     `;
        //     creatureContainer.appendChild(creatureDiv);
        // });

        //Clear the container
        creatureContainer.innerHTML = "";
        //create an h2 title inside choose-creature div
        const h2Title = document.createElement("h2");
        h2Title.textContent = "Choose your Creature";
        creatureContainer.appendChild(h2Title);

        creaturesByPower[power].forEach(creature => {
            const creatureDiv = document.createElement("div");
            creatureDiv.classList.add("creature-card");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = "creature";
            input.id = creature.toLowerCase();

            const label = document.createElement("label");
            label.htmlFor = creature.toLowerCase();
            label.textContent = creature;

            const img = document.createElement("img");
            img.src = `./creatures/${creature.toLowerCase()}.svg`;
            img.alt = `${creature} Creature`;
            img.classList.add("creature-image");

            creatureDiv.appendChild(input);
            creatureDiv.appendChild(label);
            creatureDiv.appendChild(img);

            creatureContainer.appendChild(creatureDiv);

        });
        //Avoid using innerHTML , It may be a security concern, use the DOM API to create elements and append them to the container

        //Instead Use document.createElement() and appendChild() to create elements and append them to the container.

    }



}

function selectWater() {
    console.log("Water selected");
    alert("Water selected");
}


function selectCreature() {

    const selectedCreature = document.querySelector("input[name='creature']:checked");

    if (!selectedCreature) {

        alert("Please pick a creature on the list");
        return;
    }
    alert(`You selected III : ${selectedCreature.id}`);
}


document.addEventListener("DOMContentLoaded", function () {
        
    const chooseCreatureBtn = document.getElementById("select-creature--btn");

    if (chooseCreatureBtn) { 

        chooseCreatureBtn.addEventListener("click", selectCreature);
    }

});


window.addEventListener("load", startGame );