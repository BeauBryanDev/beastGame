console.log("Hello World");
function startGame() {

    const creaturesByPower = {

        Fire: ["Phoenix", "Sphinx", "Dragon","WildFire"],
        Water: ["catFish", "Piranha", "eel", "Hippo", "Dolphin", "Shark", "Whale","SeaSerpent"],
        Snow: ["Seal", "WhiteBear", "Orca", "BlueWhale","IceDragon"],
        Forest: ["Fox", "Wolf", "Grizzly Bear", "Deer","Oak","Pine", "Maple",],
        Air : [ "Parrot","Eagle", "Owl", "Hawk", "Falcon",],
        Earth: ["Elephant", "Rhino", "Gorilla", "Lion","Mammoth"],
        Light: ["Sun", "Moon", "Star", "Lightning", "SuperNova"],
        River: ["Fish", "trout","Otter", "Beaver", "Duck", "Swan", "Salmon","Waterfall",],
        Poison: ["Snake", "Scorpion", "Spider", "Wasp","SeaUrchin","GlobeFish"],
        Ice: ["Iceberg", "Glacier","SnowStorm", "IceCube", "iceDragon"],
        Desert: ["Cactus", "YellowScorpion", "desertsnake", "Vulture", "Camel"],
        Mountain: ["Goat", "Eagle", "Bear", "MountainLion","rock","cliff","Granite"],
        Sky: ["Cloud", "Rainbow", "Sunset", "Meteor","Eclipse"],
        Swamp: ["Alligator", "Mosquito", "Frog", "Flamingo", "crocodrile"],
        Volcano: ["Lava", "Ash", "Smoke", "magma","Eruption"],
        Forest: ["Beetle","Hive", "raccoon","Bison", "Deer", "Fox", "Wolf","Bear","Owl","Raven","BaldEagle"],
        Jungle: ["Lizard","Tiger", "Monkey","ostrich" , "Orangutan", "Lion","giraffe","Buffalo","Elephant"],
        Sea: ["seaFish", "Shark", "Whale", "Octopus", "Jellyfish", "elver", "squid","seahorse","Starfish","SeaTurtle"],
        Wind: ["Breeze", "Gust", "Twister", "Typhoon","Hurricane"],
        Storm: ["Breeze","Thunder","Lightning","Rain", "Flood", "Typhoon","Twister" ,"Vortex","Hurricane"],
        Disasters: ["Flood", "Drought","Earthquake","Tsunami", "Landslide"],
        Darkness : ["Shadow", "Night", "Eclipse", "BlackHole"],
        OuterSpace: ["Planet", "Alien", "Galaxy", "Nebula", "Quasar", "BlackHole"],
        Cold: ["Snow", "Ice", "SnowStorm", "Frost","WaterWave"],
        Monster: ["Witch","Goblin", "Ogre", "Troll", "Dragon", "Cyclops", "Minotaur", "Sasquatch"],
        SeaMonster: ["Kraken", "Hydra","MerMaid", "SeaSerpent", "SeaDragon"],
        UnderGround: [ "Ghost", "Witch", "Demon", "Vampire", "Zombie", ] ,
        Mythical: ["Elf", "Unicorn", "Griffin", "Centaur","harpy" , "Sphinx", "Phoenix", "Dragon", "Fairy", "EvilEye"],
       
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
            // checkedSelectedCreature();
            // getSelectedCreature();
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
    let playerCreature = selectedCreature.id;
    console.log(playerCreature);
    let playerCreatureName = document.getElementById("player-creature--name");

    if (!selectedCreature) {

        alert("Please pick a creature on the list");
        return;
    }
    const capitalizedCreature = playerCreature.charAt(0).toUpperCase() + playerCreature.slice(1);
    alert(`You selected III : ${capitalizedCreature}`);
    playerCreatureName.innerHTML = `Your have Chosen: ${capitalizedCreature} as your Creature and it `;
    console.log(playerCreatureName);
    return playerCreature;
}


document.addEventListener("DOMContentLoaded", function () {
        
    const chooseCreatureBtn = document.getElementById("select-creature--btn");

    if (chooseCreatureBtn) { 

        chooseCreatureBtn.addEventListener("click", selectCreature);
    }

});


window.addEventListener("load", startGame );