console.log("Hello World");
import { creaturesByPower } from "./gameCreatures.mjs";
import { attacksByPower  } from "./attacks.js";
import { showCurrentAttacks, getDamageByAttack } from "./attacks.js";

// Function to start the game
// This function will be called when the window is loaded
// It will contain all the game logic
// It will be responsible for starting the game
// It will be responsible for getting the selected creature
// It will be responsible for getting the computer's selected creature
// It will be responsible for displaying the selected creatures
// It will be responsible for displaying the computer's selected creature
// It will be responsible for displaying the player's selected creature
// It will be responsible for displaying the computer's selected creature
// It will be responsible for displaying the selected creatures

let playerAttack;

function startGame() {

    let selectFire = document.getElementById("fire-btn--select");

    selectFire.addEventListener("click", function() {
        console.log("Fire selected");
        alert("Fire selected");
    });

    let selectWaterBtn = document.getElementById("water-btn--select");
    selectWaterBtn.addEventListener("click", selectWater );

    let creatureContainer = document.getElementById("Creature-Container");

    const powerButtons = document.querySelectorAll(".rootElements button");

    alert("Welcome to the Creature Game");
    alert("Select a power to see the creatures");

    powerButtons.forEach(button => {

        button.addEventListener("click", () => {

            var selectedPower = button.textContent.trim(); 
            console.log(selectedPower);
            console.log(creaturesByPower[selectedPower]);
            window.selectedPower = button.textContent.trim(); 
            console.log(window.selectedPower);
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
        creatureContainer.innerHTML = "";
        //create an h2 title that show the Power selected by the User ...
        const h2Power = document.createElement("h2");
        h2Power.textContent = `Your have Chosen  ${power}, Then these are Creatures of ${power}`;
        creatureContainer.appendChild(h2Power);

        //create an h2 title inside Creature-Container div
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
            img.src = `./creatures/${creature}.svg`;
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

    function randomNumber(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    function computerPlay() {

        const powers = Object.keys(creaturesByPower);
        //console.log(powers);
        const randomPower = powers[randomNumber(0, powers.length - 1)];
        const creatures = creaturesByPower[randomPower];
        const randomCreature = creatures[randomNumber(0, creatures.length - 1)];
        //const capitalizedComputerCreature = randomCreature.charAt(0).toUpperCase() + randomCreature.slice(1);
        return randomCreature;

    }

    // Call computerPlay after the user has selected their creature
    const chooseCreatureBtn = document.getElementById("select-creature--btn");

    if (chooseCreatureBtn) {
        chooseCreatureBtn.addEventListener("click", function () {
            const computerCreature = computerPlay();
            console.log(`Computer selected creature: ${computerCreature}`);
        });

    }

    //console.log("User Chosen Power: ", window.selectedPower);

    let computerCreature = computerPlay();

    console.log(`Computer selected creature: ${computerCreature}`); 

    let playerCreature = getSelectedCreature();
    console.log(`Player selected creature: ${playerCreature}`);

    let computerCreatureName = document.getElementById("computer-creature--name");
    // computerCreatureName.innerHTML = `Computer has Chosen: ${computerCreature} as its Creature`;

    // Ensure the computer chooses its creature after the user has chosen theirs
    chooseCreatureBtn.addEventListener("click", function () {

        const selectedCreature = document.querySelector("input[name='creature']:checked");
        if (!selectedCreature) {
            alert("Please select a creature before proceeding.");
            return;
        }

        console.log(`Computer selected creature: ${computerCreature}`);
        computerCreatureName.innerHTML = `Computer has Chosen: ${computerCreature} as its Creature, `;
    });
    // Modify the DOM in oder to clear the container and display the selected creatures and its svg pictures ...
    // Create a function that will display the selected creatures and its svg pictures ...

    // This is a Function to get the selected power by the Player / User ..
    // This function will travers the creatureByPoser Object , then get the selected power by the Player / User
    // This function will return the selected power by the Player / User beased on the selected creature ...

    let battleContainer = document.getElementById("battle-Container");

    battleContainer.style.display = "block";
    battleContainer.style.textAlign = "center";
    battleContainer.style.margin = "auto";
    battleContainer.style.width = "80%";
    battleContainer.style.border = "1px solid black";
    battleContainer.style.padding = "10px";
    battleContainer.style.borderRadius = "10px";
    battleContainer.style.backgroundColor = "lightgrey";
    battleContainer.style.gap = "10px";
    
    // let thisCreatuere = getSelectedCreature();
    // let currentPower = getSelectedPower(thisCreatuere);

    function displaySelectedCreatures() {

        //clear the container 

        battleContainer.innerHTML = "";
        const chosenCreatueres = document.createElement("h2");
        const thisCreatuere = selectCreature();
        chosenCreatueres.textContent = `Your have Chosen  ${thisCreatuere}, and the Web Browser has Chosen ${computerCreature} as its Creature`;
        battleContainer.appendChild(chosenCreatueres);
        const fightingField = document.createElement("div");
        fightingField.classList.add("fighting-field");
        // Apply flex styling to the battle container
        fightingField.style.display = "flex";
        fightingField.style.justifyContent = "space-evenly";
        fightingField.style.alignItems = "center";

        const playerCreatureDiv = document.createElement("div");
        playerCreatureDiv.classList.add("fighting-field");

        const playerCreatureName = document.createElement("h3");
        playerCreatureName.textContent = `Your Creature: ${thisCreatuere}`;
        playerCreatureDiv.appendChild(playerCreatureName);

        const imgPlayerCreature = document.createElement("img");
        imgPlayerCreature.src = `./creatures/${thisCreatuere}.svg`;
        imgPlayerCreature.alt = `${thisCreatuere} Creature`;
        imgPlayerCreature.classList.add("creature-image");
        playerCreatureDiv.appendChild(imgPlayerCreature);
        fightingField.appendChild(playerCreatureDiv);
        battleContainer.appendChild(fightingField);
        // Get the User Creature Selected Power ...
        let currentPower = getSelectedPower(thisCreatuere);
        console.log("this is the current player Power here : ", currentPower);
        //Get the computer  selected Power 
        let computerPower = getSelectedPower(computerCreature);
        console.log("this is the current computer Power here : ", computerPower);
        
        //Set div container for the computer creature ...

        const computerCreatureDiv = document.createElement("div");
        computerCreatureDiv.classList.add("fighting-field");

        computerCreatureName = document.createElement("h3");
        computerCreatureName.textContent = `Computer Creature: ${computerCreature}`;
        computerCreatureDiv.appendChild(computerCreatureName);

        const imgComputerCreature = document.createElement("img");
        imgComputerCreature.src = `./creatures/${computerCreature}.svg`;
        imgComputerCreature.alt = `${computerCreature} Creature`;
        imgComputerCreature.classList.add("creature-image");
        computerCreatureDiv.appendChild(imgComputerCreature);
        fightingField.appendChild(computerCreatureDiv)
        battleContainer.appendChild(fightingField);
        showAvailableAttacks(thisCreatuere);
        //Get the computer selected attack
        let computerAttack = computerChooseAttack(computerCreature);
        console.log(`Computer selected creature: ${computerCreature}`);
        console.log(`Computer selected attack: ${computerAttack}`);
        

    }

    function showAvailableAttacks(creature) {   

        const myAttacks = document.createElement("div");
        myAttacks.classList.add("my-attacks");
        const h3Attacks = document.createElement("h3");
        h3Attacks.textContent = "Choose your Attack";
        myAttacks.appendChild(h3Attacks);
        let thisCreatuere = getSelectedCreature();
        let currentPower = getSelectedPower(creature);
        /* Beau , You have to CHANGE ALL THIS LOGIC SINCE I WILL BE USING THE Main Object attackByCreatures
        that is in ./creaturesAttack.js file, I will be using the attackByCreatures object to get the attacks of the creatures
        based on the selected power by the user, I will be using the attackByCreatures object to get the attacks of the creatures,  that is a better Object Option with more detailed Information about each creatures attacks rather tnat the current attackByPower object that I have created in the ./attacks.js file,
        I will be using the attackByCreatures object to get the attacks of the creatures based on the selected power by the user, I will be using the attackByCreatures object to get the attacks of the creatures,  that is a better Object Option with more detailed Information about each creatures attacks rather tnat the current attackByPower object that I have created in the ./attacks.js file

        */
        const attacks = attacksByPower[currentPower];
        console.log(attacks);
        battleContainer.appendChild(myAttacks);
        attacks.forEach(attack => {

            const attackBtn = document.createElement("button");
            attackBtn.textContent = attack.name;
            //set styles to attackBtns 
            attackBtn.style.padding = "10px";
            attackBtn.style.margin = "10px";
            attackBtn.style.border = "2px solid black";
            attackBtn.style.borderRadius = "10px";
            attackBtn.style.cursor = "pointer";
            attackBtn.style.fontSize = "1.2rem";
            attackBtn.style.backgroundColor = attack.BackGroundColor; 
            attackBtn.style.color = "black";
            attackBtn.id = attack.name.toLowerCase().split(" ").join("-");
            console.log(attackBtn.id);
            attackBtn.classList.add("attack-btn");
            myAttacks.appendChild(attackBtn);
            displayAttackDescription(attack);

        });
        //Get the player selected attack
        let attackBtns = document.querySelectorAll(".attack-btn");
        attackBtns.forEach(attackBtn => {
            attackBtn.addEventListener("click", function() {
                playerAttack = attackBtn.id;
                console.log(playerAttack);
                // const computerAttack = computerChooseAttack( computerCreature );
                // console.log(`Computer selected attack: ${computerAttack}`);
                // battle(playerAttack, computerAttack);
                
            });
            
        });

        return playerAttack;

    }

    function computerChooseAttack(creature) {

        let currentPower = getSelectedPower(creature);
        const attacks = attacksByPower[currentPower];
        const randomAttack = attacks[randomNumber(0, attacks.length - 1)];

        return randomAttack.name.toLowerCase().split(" ").join("-");

    }

    function displayAttackDescription(attack) { 

        const attackName = document.createElement("h4");
        attackName.textContent = attack.name;
        battleContainer.appendChild(attackName);

        const myAttacks = document.createElement("div");
        myAttacks.classList.add("my-attacks");
        /* Beau , You have to CHANGE ALL THIS LOGIC SINCE I WILL BE USING THE Main Object attackByCreatures
        that is in ./creaturesAttack.js file, I will be using the attackByCreatures object to get the attacks of the creatures
        based on the selected power by the user, I will be using the attackByCreatures object to get the attacks of the creatures,  that is a better Object Option with more detailed Information about each creatures attacks rather tnat the current attackByPower object that I have created in the ./attacks.js file,
        I will be using the attackByCreatures object to get the attacks of the creatures based on the selected power by the user, I will be using the attackByCreatures object to get the attacks of the creatures,  that is a better Object Option with more detailed Information about each creatures attacks rather tnat the current attackByPower object that I have created in the ./attacks.js file
*/
        let thisCreatuere = selectCreature();
        let currentPower = getSelectedPower(thisCreatuere);
        const attacks = attacksByPower[currentPower];
        console.log(attacks);
        battleContainer.appendChild(myAttacks);

        const attackDamage = document.createElement("p");
        console.log("Debugging attack.damage object:", attack.damage);
        console.log("Debugging thisCreatuere value:", thisCreatuere);

        //const capitalizedCreature = thisCreatuere.charAt(0).toUpperCase() + thisCreatuere.slice(1);
        const creatureDamage = attack.damage && attack.damage[thisCreatuere];
        console.log("Fetched creatureDamage:", creatureDamage);

        if (creatureDamage !== undefined) {

            attackDamage.textContent = `Damage: ${creatureDamage}`;

        } else {

            attackDamage.textContent = "Damage: Not available";

        }
        battleContainer.appendChild(attackDamage);
        const attackDescription = document.createElement("p");
        attackDescription.textContent = attack.description;
        battleContainer.appendChild(attackDescription);
    }


    function attack() { 

        
        let computerAttack = computerChooseAttack(computerCreature);
        console.log(`Computer selected attack: ${computerAttack}`);
        //battle(playerAttack, computerAttack);        

    }


    const battleBtn = document.getElementById("battle--btn");

    if (battleBtn) {
        battleBtn.addEventListener("click", function () {
            const selectedCreature = document.querySelector("input[name='creature']:checked");
            if (!selectedCreature) {
                alert("You have to pick a creature before you can battle");
                return;
            }
            displaySelectedCreatures();
            attack();
        });
    }

    console.log("Player Attack| ", playerAttack);
    //End of the Game Function() ...

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
    playerCreatureName.innerHTML = `Your have Chosen: ${capitalizedCreature} as your Creature, `;
    return capitalizedCreature;
}

function getSelectedPower(animal) {

    animal = animal.charAt(0).toUpperCase() + animal.slice(1);

    for (const [category, creatures] of Object.entries(creaturesByPower)) {

        if (creatures.includes(animal)) {
            return category;
        }
    }
    return "Not found";

}

function getSelectedCreature() { 

    const selectedCreature = document.querySelector("input[name='creature']:checked");

    if (!selectedCreature) {

        alert("Please select a creature II ");
        return;
    } 
    else {

        //alert(`You selected II : ${selectedCreature.id}`);
        return selectedCreature.id;
    }
    

}


document.addEventListener("DOMContentLoaded", function () {
        
    const chooseCreatureBtn = document.getElementById("select-creature--btn");

    if (chooseCreatureBtn) { 

        chooseCreatureBtn.addEventListener("click", selectCreature);
    }

});



window.addEventListener("load", startGame );
